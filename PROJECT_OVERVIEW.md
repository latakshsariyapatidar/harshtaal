# Harshtal - Japanese Cultural Festival Web Application
## Project Overview & Logic Specification

This document details the core logic, state management, and algorithms currently present in the Harshtal web application, followed by the planned future logical roadmap. It is designed to be parsed by an AI website builder (e.g., Lovable, Bolt.new, v0, Cursor, Replit) to construct, modify, or extend the website's functionality.

---

## 1. Current Architecture & Tech Stack

- **Framework**: React 18.3+ with TypeScript.
- **Build Tool**: Vite 6+ (configured with CSS injection and JSX transformations).
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin).
- **Icons**: `lucide-react` for interface iconography.
- **Animation**: `motion/react` (Framer Motion v12) for scroll animations and micro-interactions.
- **Routing**: Current routing is mock-simulated via local state, though `react-router` v7 is installed in `package.json` for future usage.

---

## 2. Current Core Logical Systems

The website functions as a responsive Single Page Application (SPA) with three major custom logical systems:

### A. State-Based Router & Smooth Scroll Handler
* **File Location**: [App.tsx](file:///F:/Projects/Harshtal/src/app/App.tsx)
* **Logic**:
  1. **Routing State**: A React state variable `page` tracks whether the user is on the `"home"` or `"sponsors"` view.
  2. **Event Delegation**: A single `onClick` event listener is mounted on the root container of the application. It captures clicks on all anchor tags (`<a>`) using `e.target.closest("a")`.
  3. **Page Switching Logic**:
     - Clicking `#sponsors` updates the `page` state to `"sponsors"` and triggers `window.scrollTo({ top: 0, behavior: "smooth" })`.
     - Clicking any section on the home page (e.g., `#home`, `#about`, `#tickets`, `#contact`):
       - If currently on the `"sponsors"` page, the handler blocks default behavior, changes the state back to `"home"`, scrolls to the top of the window, and queues a `100ms` timeout. Once the homepage renders, it calls `scrollIntoView({ behavior: "smooth" })` on the target section's DOM element.
       - If already on the `"home"` page, standard browser anchor transitions/smooth scroll options are preserved.

### B. Mathematical Sakura Petals Canvas Particle System
* **File Location**: [SakuraPetals.tsx](file:///F:/Projects/Harshtal/src/app/components/SakuraPetals.tsx)
* **Logic**:
  1. **Initialization**: Instantiates a particle array containing 40 individual `Petal` objects. Each petal object tracks:
     - `x`, `y`: Absolute coordinates on the canvas.
     - `size`: Normalized visual scale factor.
     - `speed`: Fall velocity multiplier.
     - `drift`: Lateral wind movement coefficient.
     - `rotation`, `rotationSpeed`: Rotational orientation and angular velocity.
     - `opacity`: Opacity (transparency) levels.
  2. **Canvas Resize Listener**: Adds a listener to the window `resize` event to keep the `<canvas>` width and height matching `window.innerWidth` and `window.innerHeight`.
  3. **Bezier Curve Drawing Algorithm**: Draws each petal relative to its translation and rotation matrices on the canvas 2D context using twin Bezier curves:
     ```typescript
     ctx.beginPath();
     ctx.moveTo(0, 0);
     ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.2, -p.size, p.size, 0);
     ctx.bezierCurveTo(p.size * 1.2, p.size, p.size / 2, p.size, 0, 0);
     ctx.fillStyle = "#c62828";
     ctx.fill();
     ```
  4. **Simulation/Animation Loop**:
     - Uses `requestAnimationFrame` to compute updates once per frame.
     - Increases `y` coordinate by `speed`, updates `x` coordinate by `drift`, and increments `rotation` by `rotationSpeed`.
     - **Boundary Reset Constraint**: When a particle's `y` coordinate exceeds `canvas.height + 20` (falls off-screen), the engine resets `y` to `-20` and randomizes the horizontal `x` coordinate.
  5. **Resource Cleanup**: Calls `cancelAnimationFrame` and removes window resize listeners upon component unmounting to prevent memory leaks.

### C. Sticky Navigation & Responsive Drawer Scroll Trigger
* **File Location**: [Navbar.tsx](file:///F:/Projects/Harshtal/src/app/components/Navbar.tsx)
* **Logic**:
  1. **Scroll Threshold Listener**: Uses an active window scroll listener. If `window.scrollY > 40`, updates local state `scrolled = true`, changing the visual layout of the navbar (adds backdrop blur, white background, smaller padding, and subtle shadow).
  2. **Mobile Drawer State**: Tracks boolean state `open` for mobile drawer toggle. Clicks on navigation links automatically toggle `open = false` to close the dropdown/drawer.
  3. **Memory Cleanup**: Removes scroll listeners on component cleanup.

### D. Hardcoded Structural & Presentation Data
1. **Sponsorship Packages Structure** ([SponsorsPage.tsx](file:///F:/Projects/Harshtal/src/app/components/SponsorsPage.tsx)):
   - Defines a mapping of sponsor tiers: `platinum`, `gold`, and `silver`.
   - Defines a list of sponsorship packages:
     - **Partner**: ₹50,000 (standard perks, banner placement).
     - **Co-Sponsor**: ₹1,50,000 (branded booth, VIP access, stage announcement).
     - **Title Sponsor**: ₹4,00,000 (named stage sponsorship, co-branded merchandise).
   - "Apply Now" buttons redirect the user anchor context to the Contact page (`#contact`).
2. **Registration / Ticket Tiers Structure** ([HomePage.tsx](file:///F:/Projects/Harshtal/src/app/components/HomePage.tsx)):
   - Defines three ticket classes:
     - **Viewer** (External Visitors) - Perks: Stage access, Food stalls, Exhibitions (TBA price).
     - **Participant** (External Students) - Perks: Competition entry, Priority seating, Certificate, Welcome kit (TBA price).
     - **IITD Pass** (IIT Dharwad Students) - Perks: Event access, Competition entry, Priority seating, Certificate (TBA price).

---

## 3. Planned Logical Roadmap (For AI Builder Implementation)

To transition Harshtal from a static informational website to a fully interactive festival portal, the following features should be integrated into the logic layers:

### A. User Authentication & Authorization Logic
- **Authentication Routes**: Connect to a backend or auth provider (Firebase Auth, Supabase Auth, Clerk, or custom JWT).
- **Role-Based Routing System**:
  - `Admin`: Accesses analytics dashboards, scans tickets, manages event schedules, and creates sponsor listings.
  - `Participant`: Accesses dynamic profile panels, registered events, team list, and downloads digital certificates.
  - `General Visitor`: Accesses ticket purchases and event schedules.
- **IIT Dharwad Verification Filter**: Regex matching or SSO integration to verify students with `@iitdh.ac.in` domain emails to auto-approve the "IITD Pass" tier.

### B. Dynamic Registration Forms & E-Commerce/Payment Logic
- **Multi-Step Checkout Flow**:
  - Step 1: Collect user metadata (Name, Email, College Name, Phone, ID card scan/upload).
  - Step 2: Tier Selection validation (restrict "IITD Pass" to valid student credentials).
  - Step 3: Call checkout APIs.
- **Payment Gateway Integration**:
  - Implement SDK integrations for Razorpay, Stripe, or Paytm inside a payment processor file (e.g., `checkout.ts`).
  - Handle webhook callbacks on backend servers to confirm transaction success/failure.
- **Ticket Verification Engine**:
  - Generate a secure, unique ticket hash on payment confirmation.
  - Generate a SVG/PNG QR Code referencing the ticket hash.
  - Integrate an automated emailer (e.g., SendGrid, Nodemailer) to email the ticket confirmation PDF containing the QR code.

### C. Live Interactive Event Schedule & Individual Competition Registration
- **Event Filter & Search Engine**:
  - Create a dataset representing events, timings, locations, and hosting clubs.
  - Logic to filter events in real-time by:
    - Hosting Club (Music, Dance, Drama, Photography, Design, Literary, etc.).
    - Event Type (Workshop, Performance, Competitive Event).
    - Event Date/Time range.
- **Team Registry and Constraint Validation**:
  - Allow team leaders to create a team code.
  - Allow other participants to enter the team code to join.
  - Implement size boundaries (e.g., Music groups must have between 3 to 8 members) and prevent double-registration across the same event categories.

### D. Interactive Sponsor Onboarding Portal
- **Onboarding Pipeline**:
  - Online submission form where corporate entities can fill out details (Organization name, select Tier, upload Brand Logo).
  - Automated generation of Sponsorship Invoice PDFs based on the selected package (Partner/Co-Sponsor/Title Sponsor).
  - Admin approval dashboard where organizers can approve/reject sponsor request submissions, automatically updating the visible list of sponsors in [SponsorsPage.tsx](file:///F:/Projects/Harshtal/src/app/components/SponsorsPage.tsx).

### E. Admin Control Panel, Analytics, & Ticket Scanner
- **Data Aggregator**: Calculate and display total revenue generated, registrations per ticket tier, and event-wise participant counts.
- **On-Site QR Scanner Logic**:
  - Implement a mobile-responsive camera-scanner screen (using `html5-qrcode` or react-scanner libraries).
  - Camera scans participant's ticket QR -> executes a backend POST request `/api/tickets/verify` -> validates authenticity and updates ticket status to "Checked-in" to prevent duplicate entries.
- **Real-Time Stage Feed (WebSocket / Server-Sent Events)**:
  - Broadcast current/upcoming events on stage to all active visitors.
  - Instantly push live results of competitive events to the website's homepage ticker.
