Tell cx in your own words how to watch your listings, such as “check it every day and tell me only when something needs changing”, and cx keeps to it on a schedule.

## How it works

- Type `/listing-watch` with the ASINs and what you want. cx asks only what your words leave open: how often, when to tell you, where to tell you, and what it may change without asking you.
- cx writes your words down as the instruction it follows for each listing, in your files, where you can read and change it.
- At each check cx looks at the listing and the market, and tells you only what you asked to hear.

## What it uses

It uses cx-listing-playbook for reviewing a listing, Amazon SP-API for your store, Keepa for the market's history where you have it, cx-schedule for the times, and cx-feishu to tell you in Feishu. Plugins installs them with it.

## What it costs

Checks run only while cx's computer is on, and you pay for that time and for the data each check reads.
