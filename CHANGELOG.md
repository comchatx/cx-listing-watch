# Changelog

## 0.1.1

- cx-feishu is optional: `comchatx.needs` names `@comchatx/cx-schedule` alone, and `builds` carries `{ "on": "cx-feishu", "need": "optional" }`, so the Plugins page no longer installs cx-feishu unless the seller wants it. Where the seller asked to be told in Feishu and cx-feishu is not installed, the template has cx tell them in the chat and say once that it installs from Plugins.

## 0.1.0

- `/listing-watch`: the seller's standing instruction for watching a listing on a schedule.
