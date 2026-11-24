# Changelog

## 0.1.9

- The tile's mark on the Plugins page is the signed drawing.

## 0.1.8

- The `listing-watch` template sends its Try it sentence, word for word, then the words you type after its name.
- A skill, `watch-instruction`, says that a listing's standing instruction is the file `/tenant/listings/<ASIN>/watch.md`, that it holds your own words, and that you can read and change it.
- `watch-instruction` has its line in the `/` list, at `comchatx.skills["watch-instruction"]`: 「每个 listing 定期检查的要求是你写的，你可以查看和修改。」 / "Each listing's instructions for a regular check, in your own words, for you to read and change."

## 0.1.7

- The README, in English and Chinese, no longer names other plugins, as signed on 2026-11-18: the Overview's first paragraph drops its last sentence ("It needs Amazon Listing Playbook, Amazon SP-API and Scheduled Tasks, which Plugins installs with it."), and the sentence on Keepa and Feishu in the later paragraph is removed. The Plugins page draws what the package builds on from `comchatx.builds`.
- Each optional entry of `comchatx.builds` carries its reason in `why` (`en`, `zh`): `cx-keepa` 「用于让 cx 检查时也看市场的历史。」 / "Lets cx read the market's history when it checks.", `cx-feishu` 「用于让 cx 把检查结果发到你的飞书群。」 / "Sends each check's result to your Feishu group.", and a new optional `cx-amazon-seller` 「用于让 cx 从第一条消息起就知道你在亚马逊开店。」 / "Tells cx from the start that you sell on Amazon.".
- The template's line is the words signed on 2026-11-17, written as the seller's own message: its `description` is "Check [ASINs] regularly. How often, and when to tell me: [instructions]" and `comchatx.prompts["listing-watch"].zh` is 「定期检查【ASIN】，多久查一次、什么时候告诉我：【要求】」.

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
