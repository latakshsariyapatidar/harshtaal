# Harshtal — IIT Dharwad cultural fest website

An anime-themed cultural fest website with event information, entry passes, sponsors, organizing teams, and a photo gallery. The GitHub repository is named **harshtaal**; the site's existing display name is **Harshtal**.

## Start locally

Use Node.js **22.12 or newer in the Node 22 release line** and npm. The locked Vite version requires Node `^20.19.0 || >=22.12.0`; Node 18 is not supported.

```bash
git clone https://github.com/latakshsariyapatidar/harshtaal.git
cd harshtaal
npm ci
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173). To build:

```bash
npm run build
```

Build output goes to `dist/`. The current package scripts are `dev` and `build`; there is no test, lint, or preview script yet.

## Current implementation

The site uses JavaScript/JSX, React, Vite, Tailwind CSS, Motion, GSAP, and Lottie. React and React DOM currently resolve to 18.3.1 in the lockfile as peer dependencies; explicitly declaring them is tracked in the contributor backlog.

Navigation is handled in `src/App.jsx` with browser history and location state. It supports Home, Events, Event Detail, Gallery, Sponsors, Teams, Tickets, and a not-found view. Production hosting must serve the app entry point for routes such as `/events` and `/tickets`; configure this for the actual hosting provider before deployment.

Event details are currently placeholders. Pass prices are TBA and Register Pass buttons are not yet connected to registration. Treat this as the current implementation, not a working payment or registration service.

## Repository map

| Path | Purpose |
| --- | --- |
| `src/App.jsx` | Page selection, browser navigation, intro state |
| `src/pages/` | Page views |
| `src/components/` | Navigation, footer, loader, gallery layout, visual effects |
| `src/data/eventsData.js` | Club/event data and event lookup |
| `src/styles/` | Shared CSS, font imports, Tailwind styles |
| `public/` | Local images, sponsor logo, Lottie JSON |
| `vite.config.js` | Plugins, aliases, and build chunk configuration |

Remote media is also referenced directly from Cloudinary. The configured 200 KB chunk warning threshold is a warning, not a guaranteed bundle-size limit.

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md), then pick an unassigned [ready issue](https://github.com/latakshsariyapatidar/harshtaal/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22status%3A%20ready%22%20no%3Aassignee).

- [Component guide](docs/COMPONENTS.md)
- [Labels and maintainer workflow](docs/MAINTAINING.md)
- [Community conduct](CODE_OF_CONDUCT.md)
- [Issue tracker](https://github.com/latakshsariyapatidar/harshtaal/issues)

## License and media

The previous README described the project as MIT, but no LICENSE file is currently tracked. The owner must confirm the license before this documentation asserts a grant. Photographs, sponsor marks, and other third-party media may have separate usage restrictions; do not assume the code license covers them.
