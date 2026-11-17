# Changelog

## 0.1.6

- The card's name is the one signed on 2026-11-17: "Amazon Listing Watch" on the English page (`comchatx.name`) and 「亚马逊 listing 巡检」 on the Chinese page (`comchatx.nameZh`).
- The README, in English and Chinese, calls each plugin of ours it names by the card's name signed on 2026-11-17.
- The README names each other plugin it speaks of by the card's name in its own language, a link to that plugin's page on npm, never by the npm name.

## 0.1.5

- The card's name is the one signed on 2026-11-11, "Amazon Listing Watch", in `comchatx.name`, the same on the Chinese and the English page.
- The README, in English and Chinese, calls each of our plugins by its card's name, not its npm name.

## 0.1.4

- The template's line is the words signed on 2026-11-10: its `description` is "Tell cx which listings to check regularly, and when to tell you.", in English only, and `comchatx.prompts["listing-watch"].zh` is 「告诉 cx 定期检查哪些 listing，以及何时告诉你。」.
- `comchatx.tryIt` is removed: the template is the package's Try it example.

## 0.1.3

- The card's line and the Overview, in English and Chinese, are the words signed on 2026-11-10: "Has cx check listings regularly and say what needs changing." as npm's `description`, and 「让 cx 按你的要求定期检查 listing，需要修改时再告诉你。」 as `comchatx.about`. They said "Has cx watch your listings on a schedule and tell you what needs changing." and 「让 cx 在你设定的时间检查 listing，需要修改时再告诉你。」.

## 0.1.2

- The README in Chinese, `README.zh-CN.md`, which the Plugins page draws as the Overview in Chinese.
- `comchatx.description` is removed: the Plugins page never drew it, and the card's Chinese line is `about`.

## 0.1.1

- cx-feishu is optional: `comchatx.needs` names `@comchatx/cx-schedule` alone, and `builds` carries `{ "on": "cx-feishu", "need": "optional" }`, so the Plugins page no longer installs cx-feishu unless the seller wants it. Where the seller asked to be told in Feishu and cx-feishu is not installed, the template has cx tell them in the chat and say once that it installs from Plugins.

## 0.1.0

- `/listing-watch`: the seller's standing instruction for watching a listing on a schedule.
