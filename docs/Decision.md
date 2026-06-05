# Architectural & Design Decisions

This document details the key technical decisions made during the development of Harshtal 2026 and explains the rationale behind them.

---

## 1. Custom State-Based Routing
* **Decision**: Implemented a manual React-state routing system synchronizing with `window.history.pushState` and `popstate`/`hashchange` event listeners in [App.tsx](file:///f:/Projects/Harshtal/src/app/App.tsx).
* **Rationale**:
  - **Transition Coexistence**: Incorporating standard routers (like `react-router-dom`) often causes abrupt components unmounting before transition animations can complete. The manual system lets [AnimeTransition.tsx](file:///f:/Projects/Harshtal/src/app/components/AnimeTransition.tsx) handle children swapping midway through the shutter sweep at exactly `500ms`.
  - **Locomotive Scroll Damping**: Locomotive scroll hooks directly into the page viewport. Managing routes manually allows us to safely destroy and re-instantiate Locomotive Scroll only after pages have finished transitioning, preventing vertical height computation bugs.
  - **Bookmarkable Links**: Pathname matching for `/tickets`, `/teams`, `/events`, and query parsing for `/event?id=xxx` ensures that page locations are fully shareable and reload-friendly.

---

## 2. Floating Glassmorphism Navigation Bar
* **Decision**: Redesigned the navigation bar to float centered (`left-1/2 -translate-x-1/2`) using an image background overlay.
* **Rationale**:
  - **Immersive Japanese Vibe**: Placing `NavBarBackground.png` with low opacity (`20%` to `35%`) and a slight blur creates a textured glass panel that matches the Japanese cultural theme.
  - **Backdrop Contrast Protection**: Layering a dark `#0e100f` tint below text elements ensures high contrast and accessibility for links and logos, preventing the background image from obstructing readability.
  - **Dynamic Pill Scaling**: Transitioning the padding and top margins on scroll makes the header feel active and responsive.

---

## 3. Separation of Card Easing and CSS Transitions
* **Decision**: Removed Tailwind CSS `transition-all` utility classes from components using Framer Motion hover bindings (like the Ticket Cards).
* **Rationale**:
  - **Jitter Prevention**: Combining CSS `transition: all` with Framer Motion inline style translations causes animations to fight, producing jittery layout movements. Separating them so Framer Motion controls coordinate offsets (`y`, `scale`) and CSS transitions handle color properties (`transition-colors`) ensures a smooth user experience.

---

## 4. Centralized Events and Clubs Data
* **Decision**: Segregated all event details, schedules, venues, and competition guidelines into [eventsData.ts](file:///f:/Projects/Harshtal/src/app/data/eventsData.ts).
* **Rationale**:
  - **Code Cleanliness**: Prevents JSX components from bloating with long mock arrays and text strings.
  - **Future Extensibility**: Keeps data management DRY (Don't Repeat Yourself). The [EventsPage.tsx](file:///f:/Projects/Harshtal/src/app/components/EventsPage.tsx) and [EventDetailPage.tsx](file:///f:/Projects/Harshtal/src/app/components/EventDetailPage.tsx) query this single dataset dynamically, allowing organizers to modify rules or prizes by editing a single array.

---

## 5. Mobile Layout Scaling
* **Decision**: Utilized Tailwind responsive breakpoints (e.g. `pr-6 md:pr-16 lg:pr-24` and `text-center md:text-right`) for alignment.
* **Rationale**:
  - **Responsive Optimizations**: Shifting the contact section rightwards on desktop but centering it on mobile keeps text readable across all viewports.
