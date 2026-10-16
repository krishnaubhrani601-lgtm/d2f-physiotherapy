# 🏥 D2F Physiotherapy Clinic — Full-Stack College Project

> **"From Dysfunction to Function"**  
> Complete multi-page web application for **D2F Physiotherapy Clinic by Dr. Tanmai** in Nashik, Maharashtra. Built strictly adhering to college examination standards with modern React (Vite), pure Vanilla CSS design system, Bootstrap components, and a minimal Node.js/Express + MySQL demo backend.

---

## 📌 Project Overview

This project was built to deliver a production-grade, patient-friendly digital presence for **D2F Physiotherapy Clinic** based on its public Google Maps listing. The architecture highlights clean separation of concerns, complete medical safety compliance (no recovery timeline guarantees or claims), full responsiveness, and parameterized SQL security.

- **Clinic Name:** D2F Physiotherapy clinic by Dr Tanmai (Dysfunction to Function)
- **Chief Physiotherapist:** Dr. Tanmai
- **Address:** Shop No-1, Bagul Bldg, Lane Number 5, behind Adgaonkar Sarees, Racca Colony, New Pandit Colony, Nashik, Maharashtra 422002
- **Phone:** 077388 98970
- **Google Rating:** 5.0 ★ (65 Reviews)
- **Opening Hours:** Monday – Saturday: 9:00 AM – 8:00 PM (Sunday Closed)

---

## 📐 Architecture Diagram

```
+-----------------------------------------------------------------------+
|                         CLIENT TIER (Frontend)                        |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                      React (Vite) Single Page App             |   |
|   |  - React Router (15 distinct pages & dynamic route params)    |   |
|   |  - Pure CSS Design System tokens (Teal / Warm Wood / Grays)   |   |
|   |  - Bootstrap 5 for grid & accessible UI tables                |   |
|   |  - IntersectionObserver scroll reveal animations              |   |
|   |  - Client-side form validation (Appointments & Contact)       |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------▲-----------------------------------+
                                    |
                        HTTP REST (fetch / JSON)
                                    |
+-----------------------------------▼-----------------------------------+
|                        APPLICATION TIER (Backend)                     |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                      Node.js + Express API                    |   |
|   |  - CORS & express.json() middleware                           |   |
|   |  - REST endpoints: /api/services, /api/stories, /api/reviews, |   |
|   |    /api/faqs, /api/appointments, /api/contact                 |   |
|   |  - Parameterized prepared queries (mysql2/promise)            |   |
|   |  - Resilient mock data fallback if MySQL server is offline    |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------▲-----------------------------------+
                                    |
                           TCP / Port 3306
                                    |
+-----------------------------------▼-----------------------------------+
|                          DATA TIER (Database)                         |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                         MySQL Database                        |   |
|   |  Tables: services, appointments, stories, reviews,            |   |
|   |          faqs, contact_messages                               |   |
|   |  - Enforced foreign keys, data constraints, timestamps        |   |
|   |  - FAKE demo seed dataset (90000 00000 numbers, example.com)  |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------------------------------------------+
```

---

## 🌐 Complete Page List (15 Routes)

| # | Route | Page Name | Description |
|---|-------|-----------|-------------|
| 1 | `/` | **Home** | Hero with Google rating badge, clinic philosophy, highlights, services preview, doctor preview, testimonials, appointment CTA. |
| 2 | `/about-doctor` | **About the Doctor** | Profile of Dr. Tanmai, clinical background, approach to movement re-education, qualifications placeholder, and philosophy of care. |
| 3 | `/about-clinic` | **About the Clinic** | Founding story of D2F ("Dysfunction to Function"), facility features, hygiene protocols, core clinic values. |
| 4 | `/services` | **Services** | Complete card grid of all 8 physiotherapy services dynamically fetched from API. |
| 5 | `/services/:id` | **Service Detail** | Reusable template page driven by route parameter displaying assessment criteria, modalities, and booking link. |
| 6 | `/conditions` | **Conditions We Treat** | Educational breakdown across Musculoskeletal, Sports, Neurological, Post-Surgical, and Postural care with medical awareness disclaimer. |
| 7 | `/care-process` | **Our Care Process** | 5-step patient journey: Initial Assessment, Personalized Plan, Guided Treatment, Progress Review, and Home Guidance. |
| 8 | `/book-appointment` | **Book Appointment** | Full validated booking form (name, phone, email, service, date, concern) posting to MySQL backend. |
| 9 | `/stories` | **Treatment Stories** | Representative anonymized case studies illustrating therapeutic methods without promising timelines. |
| 10 | `/reviews` | **Reviews** | 5.0 Google rating summary banner, 65 reviews count, patient review cards, and direct Google Maps link. |
| 11 | `/gallery` | **Gallery** | Categorized clinic and equipment visuals: Reception, Treatment Plinth, Active Rehab Zone, and Modalities. |
| 12 | `/faq` | **FAQ** | Accessible single-expand accordion answering common consultation, attire, and preparation questions. |
| 13 | `/contact` | **Contact & Location** | Full Nashik address, phone, interactive opening hours table, embedded Google Map iframe, and validated message form. |
| 14 | `/admin-demo` | **Admin Demo** | Evaluation dashboard displaying Bootstrap tables of appointments and contact inquiries stored in MySQL. |
| 15 | `*` | **404 Page** | User-friendly error page with redirection buttons. |

---

## 📁 Folder Structure

```
dsf(1)/
├── index.html                   # HTML entry point with meta SEO & Google Fonts
├── package.json                 # Frontend dependencies (React 19, Router, Bootstrap)
├── vite.config.js               # Vite configuration with @vitejs/plugin-react
│
├── src/
│   ├── main.jsx                 # React DOM mount point + global styles
│   ├── App.jsx                  # 15 React Router route definitions
│   │
│   ├── assets/                  # Media & static imagery
│   │
│   ├── data/
│   │   ├── clinicData.js        # Verified clinic information extracted from Google Maps
│   │   └── apiConfig.js         # Centralized API base URL (http://localhost:5000/api)
│   │
│   ├── styles/
│   │   ├── variables.css        # Design tokens: Teal, Warm Wood/Amber, Grays, Typography
│   │   └── global.css           # Global typography, layout, buttons, cards, animations
│   │
│   ├── components/
│   │   ├── Navbar.jsx / .css    # Sticky glassmorphism navbar with active link highlight & mobile toggle
│   │   ├── Footer.jsx / .css    # 4-column footer with clinic details & mandatory medical disclaimer
│   │   ├── FloatingCTA.jsx/.css # Sticky bottom-right "Book Appointment" pulse button
│   │   ├── SectionHeading.jsx   # Reusable section header with decorative gradient bar
│   │   ├── ServiceCard.jsx      # Reusable service card with hover lifting effect
│   │   ├── ReviewCard.jsx       # Reusable testimonial card with star rating
│   │   ├── StoryCard.jsx        # Reusable patient treatment case study card
│   │   ├── Accordion.jsx        # Accessible single-open FAQ accordion
│   │   ├── AppointmentForm.jsx  # Validated appointment booking form
│   │   ├── ScrollReveal.jsx     # IntersectionObserver reveal wrapper
│   │   └── useScrollReveal.js   # Custom hook respecting prefers-reduced-motion
│   │
│   └── pages/                   # All 15 distinct page components (Home, AboutDoctor, etc.)
│
└── server/                      # Minimal Express + MySQL Demo Backend
    ├── server.js                # Express app initialization, CORS, and route mounting
    ├── db.js                    # MySQL2 connection pool with startup test & fallback
    ├── package.json             # Backend dependencies (express, mysql2, cors, dotenv)
    ├── .env.example             # Template for database credentials
    ├── .env                     # Local environment settings
    ├── schema.sql               # MySQL DDL script creating all 6 relational tables
    ├── seed.sql                 # FAKE demo records (8-10 rows per table, zero timeline claims)
    └── routes/
        ├── services.js          # GET /api/services
        ├── appointments.js      # GET & POST /api/appointments (parameterized SQL)
        ├── stories.js           # GET /api/stories
        ├── reviews.js           # GET /api/reviews
        ├── faqs.js              # GET /api/faqs
        └── contact.js           # GET & POST /api/contact (parameterized SQL)
```

---

## 🚀 Quick Setup Instructions

### Step 1: Clone or Open Project Directory
```bash
cd "c:\Users\kanis\OneDrive\Desktop\dsf(1)"
```

### Step 2: Set Up MySQL Database
1. Open your MySQL client (MySQL Workbench, phpMyAdmin, or MySQL CLI).
2. Execute `server/schema.sql`:
   ```sql
   SOURCE server/schema.sql;
   ```
3. Execute `server/seed.sql` to populate sample fake records:
   ```sql
   SOURCE server/seed.sql;
   ```

### Step 3: Configure Backend Environment
1. In the `server` directory, copy `.env.example` to `.env`:
   ```bash
   cd server
   cp .env.example .env
   ```
2. Update `.env` with your local MySQL password:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_actual_password
   DB_NAME=d2f_physiotherapy
   DB_PORT=3306
   ```

### Step 4: Install Dependencies & Run
Open **two terminal windows**:

**Terminal 1 (Backend API):**
```bash
cd server
npm install
node server.js
```
*(Server will start on http://localhost:5000)*

**Terminal 2 (Frontend Client):**
```bash
npm install
npm run dev
```
*(Vite dev server will start on http://localhost:5173)*

> **Note on Evaluation Resilience:** If MySQL is not running on your computer, the Express server will automatically switch to **memory mock data fallback**. Both Appointment and Contact forms will still succeed and display directly on the `/admin-demo` dashboard without crashing!

---

## 🎓 College Viva & Examiner Preparation Guide

### 8–10 Likely Examiner Questions & Answers

#### Q1: What is the purpose of this project and what problem does it solve?
**Answer:** It is a patient-centric, evidence-based digital web platform for D2F Physiotherapy Clinic in Nashik. It streamlines patient communication by offering educational resources on movement health, transparent care processes, appointment booking, and an admin view for managing inquiries.

#### Q2: Why is a backend and database necessary if the frontend already displays clinic info?
**Answer:** While informational pages can be rendered statically, clinical operations require dynamic data persistence:
1. Patient appointment requests and contact messages must be permanently captured in a secure database rather than lost when a browser closes.
2. An admin view (`/admin-demo`) requires a server to read and display live submissions.
3. Decoupling the frontend from data storage allows clinic staff to update services or FAQs in MySQL without modifying React source code.

#### Q3: How do you prevent SQL Injection in this application?
**Answer:** In `server/routes/appointments.js` and `server/routes/contact.js`, we use **parameterized prepared statements** via `mysql2/promise` (e.g. `INSERT INTO appointments (...) VALUES (?, ?, ...)`). The database driver treats user input strictly as literal values rather than executable SQL commands, neutralizing malicious inputs like `' OR 1=1 --`.

#### Q4: Why did you choose React with Vite instead of traditional multi-page HTML?
**Answer:** Vite offers instant Hot Module Replacement (HMR) and lightning-fast ES module bundling. React's component-based architecture enables high reusability (such as `Navbar`, `Footer`, `ServiceCard`, `AppointmentForm`) and client-side routing via React Router for instant, flicker-free transitions between all 15 pages.

#### Q5: How is form validation handled?
**Answer:** We implemented **defense-in-depth validation**:
1. **Client-side validation:** In `AppointmentForm.jsx` and `Contact.jsx`, JavaScript validates non-empty inputs, 10-digit phone number regex, and valid email patterns before dispatching HTTP requests.
2. **Server-side validation:** In Express route handlers, input fields are validated before constructing SQL queries, returning HTTP 400 with specific error messages if invalid.

#### Q6: How does the application handle situations where the backend or MySQL is unreachable?
**Answer:** Resilience is built in at both tiers:
- The React frontend uses `try...catch` blocks within `fetch()` calls. If the API fails, it displays friendly fallback content and warning banners instead of crashing.
- The Express backend tests MySQL connectivity on launch. If the database is stopped, it gracefully activates an in-memory data store so examiners can test form submissions and immediately see them on `/admin-demo`.

#### Q7: What design decisions were made for UI/UX and accessibility?
**Answer:**
- **Color Palette:** Derived directly from the clinic's signage and interior: deep teal primary (`#00bfb7`, `#007c78`), warm wood/amber accent (`#ffc107`), and clean neutral grays (`#f4f6f8`).
- **Typography:** Outfit for clear headings, Inter for high-legibility body text.
- **Motion & Accessibility:** Subtle scroll-reveal animations use the native browser `IntersectionObserver` API with strict support for `prefers-reduced-motion` media queries for motion-sensitive users.

#### Q8: What medical safety guidelines were enforced across the application?
**Answer:** Medical ethics dictate that physiotherapy cannot guarantee outcomes or timelines. We strictly enforced:
1. Zero promises of cures or guaranteed relief.
2. Zero mention of specific recovery durations (no "recover in 2 weeks" or "pain-free in 5 sessions").
3. Neutral, factual medical disclaimers prominently located in the site-wide footer, on the Conditions page, and on all treatment summaries.

---

## 📋 Placeholders to Fill (Real-world Data Needed)

Because we used strictly real data found on the Google Maps listing, the following unavailable items have been marked with clear placeholders:
1. `[Add doctor qualifications here, e.g. BPTh, MPTh]` — in `src/data/clinicData.js` and `src/pages/AboutDoctor.jsx`
2. `[Add clinic email here]` — in `src/data/clinicData.js`
3. `[Add clinic website URL here]` — in `src/data/clinicData.js`
4. `[Add Instagram URL here]` & `[Add Facebook URL here]` — in `src/data/clinicData.js`
