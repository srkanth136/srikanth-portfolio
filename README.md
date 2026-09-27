
# Srikanth Bheemagani - Developer Portfolio

A modern, responsive, and performance-optimized developer portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed specifically for showcasing software development projects, technical skills, and academic background to recruiters and engineering teams.

---

## About

This portfolio represents the engineering profile and project showcase of **Srikanth Bheemagani**, a Computer Science Engineering student (graduating class of 2026) and Python Full Stack Developer. It emphasizes clean code principles, full-stack web architectures, scalable backend services, and relational database systems.

---

## Technologies

- **Frontend Core:** React.js 19, JavaScript (ES6+), Vite
- **Styling & Design System:** Tailwind CSS v4, Modern Glassmorphism, CSS Custom Properties
- **Icons:** Lucide React & Handcrafted Feather-compatible SVGs
- **Typography:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Deployment Platform:** Vercel (or Netlify / GitHub Pages)

---

## Features

- **Sticky Glassmorphic Navigation:** Smooth scrolling to sections with mobile responsive drawer and active section tracking.
- **Developer Hero Section:** Code-editor visual card with Python profile representation, live blinking prompt, direct resume download, and quick project navigation.
- **Categorized Skills Matrix:** Clean technology cards organized into Programming Languages, Frontend, Backend, Databases, and Tools (no deceptive percentage bars).
- **Featured Project Showcase:** Highlights the MERN E-Commerce platform with an elevated card design, alongside Voice Desk Assistant, Chrome Extension, and SQL Course Management projects.
- **Education & Credentials:** Authentic academic timeline for B.Tech in CSE (2026) and Microsoft/LinkedIn Generative AI certification.
- **Resume Distribution:** Pre-configured resume download and browser preview buttons linked to `public/resume.pdf`.
- **Accessible Contact Section:** Direct contact channels (Email, GitHub, LinkedIn) and a validated message interface with mailto fallback.
- **Search Engine Optimization (SEO):** Open Graph meta tags, meta descriptions, mobile viewport optimization, and accessibility standards.

---

## Projects

### 1. E-Commerce Website (Featured)
- **Stack:** MERN (MongoDB, Express.js, React.js, Node.js)
- **Summary:** Built a full-stack e-commerce web platform featuring user authentication, product catalog with category filtering, shopping cart, checkout flow, and administrative inventory management.

### 2. Voice Desk Assistant
- **Stack:** Python, Speech Recognition, Audio Engines, OS Automation
- **Summary:** Voice-driven assistant engineered to execute voice commands, automate desktop tasks, and generate audio feedback through a modular processing pipeline.

### 3. Time Tracking & Productivity Analytics Chrome Extension
- **Stack:** JavaScript, Chrome Extension APIs, HTML5, CSS3, Storage API
- **Summary:** Browser extension that monitors active tab duration, classifies visited domains into productive vs unproductive categories, and generates productivity analytics.

### 4. Student Course Management System
- **Stack:** MySQL, Relational Database Design, SQL Stored Procedures
- **Summary:** Relational database schema managing student enrollments and academic courses, utilizing multi-table JOINs, subqueries, views, stored procedures, triggers, and transactions.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher; v22 LTS recommended)
- [npm](https://www.npmjs.com/) (version 9.0.0 or higher)
- [Git](https://git-scm.com/)

---

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/srkanth136/srikanth-portfolio.git

# Navigate into the project folder
cd srikanth-portfolio

# Install required npm packages
npm install
```

---

## Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the live application with instant hot module replacement (HMR).

---

## Building for Production

Compile and bundle the project for production deployment:

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

To test the production build locally before deploying:

```bash
npm run preview
```

---

## Deployment

### Deploying to Vercel (Recommended)

#### Option 1: Via GitHub & Vercel Dashboard
1. Push this repository to your GitHub account (see Git commands below).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** -> **"Project"**.
4. Select the `srikanth-portfolio` repository.
5. Vercel automatically detects the Vite framework:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**. Your portfolio will be live in seconds with automatic HTTPS and global CDN.

#### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## Customization Guide

All personal text, social handles, links, and project entries are centralized in a single configuration file:

**`src/data/portfolioData.js`**

| Field | Location | Description |
|---|---|---|
| Social Links | `personalInfo.socialLinks` | Replace `YOUR_GITHUB_USERNAME`, `YOUR_LINKEDIN_USERNAME`, `YOUR_EMAIL` |
| Project URLs | `projectsData[].githubUrl` / `liveUrl` | Replace repository links and demo URLs |
| Resume Document | `public/resume.pdf` | Replace the placeholder PDF with your official PDF resume |
| About & Bio | `personalInfo.aboutText` | Customize personal statements or specializations |

---

## License

This project is open source and available under the [MIT License](LICENSE).


