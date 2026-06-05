# Where To Look For What - Codebase Directory Guide

This guide acts as a map for developers working on the Harshtal 2026 website, detailing where specific sections and features are implemented and how to edit them.

---

## 📁 Workspace Map

```
Harshtal/
├── docs/                     # Documentation files
│   ├── README.md             # Setup, launch, and build instructions
│   ├── Decision.md           # Architecture and design decisions log
│   └── WhereToLookForWhat.md # This guide
│
├── public/                   # Static visual assets
│   ├── NavBarBackground.png  # Navigation panel texture
│   ├── PassBackground.png    # Entry ticket texture
│   ├── SponsorsPage.png      # Sponsors page background
│   └── background_about.png  # About section and Teams page background
│
└── src/
    ├── app/
    │   ├── components/       # Pages and layout components
    │   │   ├── AnimeTransition.tsx  # Page sweep transitions (1.0s shutter)
    │   │   ├── HomePage.tsx         # Main Landing page (Hero, About, Clubs Menu)
    │   │   ├── Navbar.tsx           # Floating glassmorphism navbar
    │   │   ├── SponsorsPage.tsx     # Sponsors page
    │   │   ├── TeamsPage.tsx        # Organizing committee listings
    │   │   ├── TicketsPage.tsx      # Pass Purchase / Registrations listings
    │   │   ├── EventsPage.tsx       # Club Events listing page
    │   │   └── EventDetailPage.tsx  # Dynamic event rules & guidelines details
    │   │
    │   ├── data/
    │   │   └── eventsData.ts        # Centralized metadata for clubs and events
    │   │
    │   └── App.tsx           # Entry React component and routing logic
    │
    ├── components/           # Generic interactive components
    │   ├── FlowingMenu.tsx   # Text scroll menu on Hover (GSAP driven)
    │   └── ImageTrail.tsx    # Interactive mouse-follow cursor image effects
    │
    └── styles/               # CSS styling sheets
        ├── fonts.css         # Josefin Sans & Noto Sans JP loading
        ├── theme.css         # HSL colors variables (Tailwind CSS v4 theme)
        └── index.css         # Custom cursors, scroll bars, and imports
```

---

## 🛠️ How Do I...

### 1. Add, Remove, or Edit an Event?
- Go to [eventsData.ts](file:///f:/Projects/Harshtal/src/app/data/eventsData.ts).
- Modify the `clubsData` array. Locate the corresponding club block (e.g. `id: "music"`) and update the objects in the `events` array. You can edit the rules, prize details, timeline, or venue here.

### 2. Update the Navbar Link Targets?
- Go to [Navbar.tsx](file:///f:/Projects/Harshtal/src/app/components/Navbar.tsx).
- Locate the `navLinks` array at the top of the file. You can change labels, paths, or toggle the `highlight` parameter.

### 3. Edit Theme Colors?
- Go to [theme.css](file:///f:/Projects/Harshtal/src/styles/theme.css).
- Change the CSS variables defined in `:root` (for light theme) or `.dark` (for dark theme) blocks. Primary colors are bound to `--primary` and specific red accents utilize crimson `#c62828`.

### 4. Customize Page Transition Shutter Speed?
- Go to [AnimeTransition.tsx](file:///f:/Projects/Harshtal/src/app/components/AnimeTransition.tsx).
- Change the `timer1` (swap timer, currently `500ms`), `timer2` (complete timer, currently `1000ms`), and `duration` (shutter speed, currently `1.0` seconds).
