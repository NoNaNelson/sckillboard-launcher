# scKillboard Launcher

The desktop launcher for **[scKillboard](https://www.sckillboard.com)** — a community-run PvP kill tracker for *Star Citizen*.

The launcher is a small Electron app that watches your local `Game.log`, detects your combat activity, and reports it to scKillboard, where it appears on the public kill feed, leaderboards, player profiles, and org pages.

## Download

Grab the latest installer from the [**Releases**](https://github.com/ver9jl-cell/sckillboard-launcher/releases/latest) page and run it. Windows only.

## What it does

The launcher reads just two files on your machine:

- Your *Star Citizen* `Game.log`
- Its own settings file in your `AppData` folder

From the log it detects your kills and deaths, the vehicle you're in, the weapon you're carrying, completed bounty missions, and your location. For each player involved, it looks up their **public** RSI profile page (avatar, org, profile details) — the same page anyone can view in a browser. It never uses your RSI login or password, and it doesn't read anything else on your system.

Your identity on scKillboard is **RSI-verified**: you prove you own a handle via a one-time code on your RSI profile. Registration happens on the website; the launcher only logs in.

## Building from source

Requires [Node.js](https://nodejs.org/).

```bash
npm install          # install dependencies
npm run dev          # run locally
npm run build        # build the Windows installer (output in dist/)
```

## Security

By design, this client is open source. Security lives on the server, not in the client — nothing secret ships in this repo. See the public site for how identity verification and anti-fraud work.

## Disclaimer

scKillboard is an **unofficial, fan-made project**. It is **not affiliated with Cloud Imperium Games (CIG)**. It respects CIG's ownership of *Star Citizen* and will comply with any instruction or request from CIG regarding this tool.

## License

_To be determined — see repository for updates._
