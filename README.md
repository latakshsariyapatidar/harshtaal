# 🌸 Harshtal - Annual Cultural Fest Web Application

An anime-themed, interactive, and high-performance web application built for **Harshtal**, the annual cultural fest of IIT Dharwad. Built with **React 19**, **JavaScript (JSX)**, **Vite**, **Tailwind CSS**, **Motion**, **GSAP**, and **Locomotive Scroll**.

---

## 🚀 Quick Start & Setup

Follow these steps to run Harshtal locally on your machine:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone the Repository

```bash
git clone https://github.com/latakshsariyapatidar/harshtal.git
cd harshtal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with live reloading.

### 4. Build for Production

```bash
npm run build
```

The optimized production assets will be generated in the `dist/` directory. All chunks are optimized to remain under 200 KB for lightning-fast initial load speeds.

---

## 📁 Repository Structure

```
harshtal/
├── public/                 # Static public assets (Lottie animations, images, icons)
├── src/
│   ├── components/         # Shared UI and visual effect components
│   │   ├── AnimeTransition.jsx  # Page transition wrapper
│   │   ├── ClickSpark.jsx       # Canvas click spark effect
│   │   ├── Counter.jsx          # Animated numbers counter
│   │   ├── FlowingMenu.jsx      # Interactive marquee menu
│   │   ├── Footer.jsx           # Global footer
│   │   ├── ImageTrail.jsx       # Mouse image trail effect
│   │   ├── Loader.jsx           # Initial morphing logo loader
│   │   ├── Masonry.jsx          # Responsive image masonry grid
│   │   ├── Navbar.jsx           # Fixed floating navbar
│   │   └── SakuraPetals.jsx     # Canvas falling sakura petals effect
│   ├── pages/              # Top-level application page views
│   │   ├── EventDetailPage.jsx  # Detailed event view with rules & prizes
│   │   ├── EventsPage.jsx       # Category & club event browser
│   │   ├── GalleryPage.jsx      # Fest photo gallery with lightbox grid
│   │   ├── HomePage.jsx         # Main landing page
│   │   ├── NotFoundPage.jsx     # 404 page
│   │   ├── SponsorsPage.jsx     # Sponsor showcase page
│   │   ├── TeamsPage.jsx        # Organizing committee roster
│   │   └── TicketsPage.jsx      # Pass registration page
│   ├── data/               # Static event & club dataset
│   │   └── eventsData.js
│   ├── lib/                # Shared utilities & audio engine
│   │   ├── audioEngine.js
│   │   └── utils.js
│   ├── styles/             # CSS & Tailwind styling files
│   ├── App.jsx             # Root component with dynamic route resolution
│   └── main.jsx            # Vite DOM entry point
├── docs/                   # Developer documentation & component specs
├── CONTRIBUTING.md         # Guidelines & Git workflow for contributors
├── vite.config.js          # Vite build configuration & chunk splitting
└── package.json            # Project dependencies & scripts
```

---

## 📖 Documentation & Contributing

- **Component Architecture**: Check out [docs/COMPONENTS.md](./docs/COMPONENTS.md) for a detailed component breakdown.
- **Contribution Guide**: Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for step-by-step Git commands and PR instructions to prevent merge conflicts.

---

## 📜 License

This project is open-source under the MIT License.
