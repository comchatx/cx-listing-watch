# Changelog

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
