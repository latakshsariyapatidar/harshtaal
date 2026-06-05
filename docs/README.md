# Harshtal 2026 - Setup Guide

Welcome to the **Harshtal 2026** web development workspace. Harshtal is a Japanese-themed cultural event website built for IIT Dharwad. It features a modern, immersive design system with custom loaders, floating glassmorphism navigation, smooth parallax layers, page transitions, and a clean, responsive layout.

---

## 🛠️ Technology Stack
The application is constructed using a modern frontend stack:
- **Core Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4.0 (for custom utility classes and HSL variables)
- **Asset Bundler**: Vite 6+ (optimized for hot-reloads and lightning-fast bundling)
- **Animations**:
  - `motion/react` (Framer Motion) for page transitions and card micro-interactivities
  - `GSAP` (GreenSock) for high-performance canvas/DOM sequences (e.g. `FlowingMenu`, `ImageTrail`)
- **Scroll Engine**: `Locomotive Scroll` for smooth scroll damping

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 2. Install Dependencies
Navigate to the project directory and run the install command:
```bash
npm install
```

### 3. Start the Development Server
Launch the local development server:
```bash
npm run dev
```
Once the command executes, open [http://localhost:5173](http://localhost:5173) in your web browser.

### 4. Build for Production
To build and optimize the application for production hosting, run:
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

---

## ⚠️ Troubleshooting

- **Locomotive Scroll jumps on page changes**: Ensure `window.scrollTo(0, 0)` executes and Locomotive Scroll instance is updated on route changes (fully automated inside `App.tsx`'s lifecycle hooks).
- **TypeScript compile errors**: Run `npx tsc --noEmit` locally to check for type errors.
