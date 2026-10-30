# Responsive Portfolio Landing Page

A clean, responsive portfolio landing page built with React and Tailwind CSS.

**Live Demo:** https://my-landing-page-7tui.vercel.app

## Tech Stack
- React (Vite)
- Tailwind CSS
- Deployed on Vercel

## Project Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css
```

## Component-Based Design
The UI is split into reusable components. Each section (Navbar, Hero, About, Projects, Contact, Footer) lives in its own file and is assembled in `App.jsx`. Project cards are rendered from a data array using `map()`.

## Design System
- **Primary color:** Indigo (`indigo-600`)
- **Accent color:** Amber (`amber-400`)
- **Typography:** Sans-serif with a clear hierarchy (`text-4xl` for headings, `text-2xl` for sections, `text-base` for body)
- **Spacing:** Consistent Tailwind spacing scale (`px-6`, `py-16`, `gap-6`)

## Responsive Behavior
Built mobile-first with Tailwind breakpoints:
- **Mobile:** single-column layout, compact navbar
- **Tablet (`sm`/`md`):** 2-column project cards, larger headings
- **Desktop (`lg`):** wider layout and bigger hero text

## Run Locally
```
npm install
npm run dev
```

## Author
Muniba Ali