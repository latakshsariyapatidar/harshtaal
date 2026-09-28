# Component guide

This describes the implementation at the initial contributor-backlog review. Keep it current when ownership or data flow changes.

| Area | Entry points | Responsibilities |
| --- | --- | --- |
| Bootstrap | `src/main.jsx` | Mount the React app |
| Navigation | `src/App.jsx` | Interpret path/hash/query, push browser history, select page and event |
| Shell | `Navbar.jsx`, `Footer.jsx` | Global navigation, mobile menu, public contact information |
| Intro | `Loader.jsx` | First-session introduction and completion callback |
| Transitions/effects | `AnimeTransition.jsx`, `SakuraPetals.jsx`, `ClickSpark.jsx`, `ImageTrail.jsx`, `Counter.jsx`, `FlowingMenu.jsx` | Reusable motion/effect components; presence does not imply every component is mounted |
| Events | `EventsPage.jsx`, `EventDetailPage.jsx`, `src/data/eventsData.js` | Club/event listing, event selection, rules and pass CTA |
| Gallery | `GalleryPage.jsx`, `Masonry.jsx`, `src/styles/globals.css` | Image dataset, repeated scrolling columns, hover styles |
| Passes | `TicketsPage.jsx` | Pass descriptions and pending registration UI |
| Other pages | `HomePage.jsx`, `SponsorsPage.jsx`, `TeamsPage.jsx`, `NotFoundPage.jsx` | Landing content, sponsors, team roster, unknown routes |

Component filenames in the table are in `src/components/`; page filenames are in `src/pages/`.

## Data flow

The app selects a page from browser location. EventsPage receives the selected club and an event-selection callback; EventDetailPage receives the selected event ID and navigation callbacks. Event data is static; there is no backend or registration service in this repository.

The intro is controlled by App's loader state and the `harshtal-loader-shown` sessionStorage key. Changes must preserve the requested route as the loader finishes.

GalleryPage supplies item IDs, display images, destination URLs, heights, and titles to Masonry. Masonry distributes them by breakpoint and repeats them to form scrolling columns. When modifying markup, consider keyboard focus, duplicate content, pausing, and reduced-motion behavior together.

## Coordination boundaries

- Route parsing and intro completion both touch App.jsx; coordinate PR order.
- Gallery accessibility, image loading, and reduced-motion work may touch Masonry and shared CSS.
- Runtime setup and test tooling both edit package.json and package-lock.json.
- Keep official event content in a separate review from broad visual or routing changes.

## Known boundaries

The original documentation referred to `src/lib/audioEngine.js`, `src/lib/utils.js`, and Locomotive Scroll, which are not present in the reviewed repository. Do not base new work on those references. CI and automated tests are backlog tasks, not existing checks.
