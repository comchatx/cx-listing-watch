import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";
import { loadPackage, scratch, typed } from "./pi.js";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const manifest = (): Record<string, any> => JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));

it("the pinned pi loads one template, /listing-watch, and no skill or extension", async () => {
  const { loader } = await loadPackage(ROOT);
  const prompts = loader.getPrompts();
  expect(prompts.diagnostics).toEqual([]);
  expect(prompts.prompts.map((prompt) => [prompt.name, prompt.filePath])).toEqual([["listing-watch", join(ROOT, "prompts", "listing-watch.md")]]);
  expect(loader.getSkills().skills).toEqual([]);
  expect(loader.getExtensions().extensions).toEqual([]);
});

it("/listing-watch shows as a command and expands with the seller's ASINs and words, no placeholder left", async () => {
  const text = await typed(ROOT, "/listing-watch B000123456 以后每天帮我盯着这个 listing，有要改的告诉我，没事别吵");
  expect(text.split("\n")[0]).toBe("Watch my listings B000123456 from my words: 以后每天帮我盯着这个 listing，有要改的告诉我，没事别吵");
  expect(text).toContain("/tenant/listings/<ASIN>/watch.md");
  expect(text).not.toMatch(/\$\{?[@0-9A]/);
});

it("is @comchatx/cx-listing-watch; the Plugins page installs every borrowed plugin from builds, and needs names the two that ship a skill of their own name", () => {
  expect([manifest()["name"], manifest()["repository"]["url"]]).toEqual(["@comchatx/cx-listing-watch", "git+https://github.com/comchatx/cx-listing-watch.git"]);
  expect(manifest()["comchatx"]["needs"]).toEqual(["@comchatx/cx-schedule", "cx-feishu"]);
  expect(manifest()["comchatx"]["builds"]).toEqual(["@comchatx/cx-schedule", "cx-feishu", "cx-listing-playbook", "cx-amazon-sp-api", { on: "cx-keepa", need: "optional" }]);
  expect(manifest()["pi"]).toEqual({ prompts: ["./prompts"] });
  for (const field of ["dependencies", "bundleDependencies", "bundledDependencies"]) expect(manifest()[field], field).toBeUndefined();
});

it("the tarball holds the template, the README and the licence alone", () => {
  const out = scratch();
  const [packed] = JSON.parse(execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts", "--pack-destination", out], { cwd: ROOT, encoding: "utf8" })) as { files: { path: string }[] }[];
  expect(packed!.files.map((file) => file.path).sort()).toEqual(["LICENSE", "README.md", "package.json", "prompts/listing-watch.md"]);
}, 60_000);
