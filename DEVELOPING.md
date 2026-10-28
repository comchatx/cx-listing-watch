# Developing cx-listing-watch

What a seller reads is `README.md`, which npm and the Plugins page show. This page is for whoever works on the package.

A [pi](https://pi.dev) package for a [ComChatX](https://comchatx.com) box that carries one prompt template, `prompts/listing-watch.md`: the seller's standing instruction for watching listings, written from the seller's own words, kept on a schedule and reported where the seller says. It carries no skill, extension or script. How to check and how to fix are the model's, with the skills of the plugins it uses; the template holds only the seller's half: the goal, when to look, what may be changed unasked, where to report, and when to hand over (the roadmap's §15, Jack 2026-10-16).

## What it needs

- **Every plugin it uses is in the `comchatx` field's `builds`**, which the Plugins page installs with it: `@comchatx/cx-schedule`, `cx-feishu`, `cx-listing-playbook`, `cx-amazon-sp-api`, and `cx-keepa` as optional.
- **`comchatx.needs` names the two that ship a skill of their own name**, `@comchatx/cx-schedule` and `cx-feishu` (`docs/parts/plugin-interface.md` §2 item 5).
- **It ships no skill, so it carries no `needs` sentence of its own.** No package needs a template-only package, and none names this one. The sentence cx reads lives in the skills of the plugins it uses: each of those skills says how it is installed, and what it means when none of that plugin's tools is there.

## Install

```bash
pi install -l npm:@comchatx/cx-listing-watch
```

Run in `/tenant`; without `-l` the install is gone at the box's next start. On ComChatX, a seller installs it from the Plugins page, which installs what it uses with it.

## Develop

```bash
npm ci
npm run typecheck
npm test
```

`test/package.test.ts` loads the package on the pinned pi (1.1.0, the pin of `cx-listing-playbook`): one template shown as `/listing-watch`, no skill and no extension; the template expanded with an ASIN and the seller's words, no placeholder left; the manifest's `builds` and `needs`; and a tarball holding the template, the README and the licence alone.

## Release

A `v*` tag whose name is the version publishes by npm's trusted publishing (`.github/workflows/release.yml`, copied from `comchatx/cx-schedule`). The first publish is a maintainer's, by hand, after which this workflow is set as the package's trusted publisher.
