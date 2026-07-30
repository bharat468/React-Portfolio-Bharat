# Bharat Kumar Portfolio Documentation

## 1. Project Overview

This repository contains a personal portfolio website for Bharat Kumar built with React and Vite. The website is a polished single-page experience that highlights the developer's identity, experience, technical skills, projects, and contact information.

## 2. Purpose of the Project

The project is designed to:
- present Bharat Kumar as a Full Stack Developer
- showcase projects and technical abilities
- provide a professional online presence for recruiters and clients
- make it easy to contact the developer

## 3. Main Features

- Responsive landing page
- Fixed animated header with mobile navigation
- Section-based layout with smooth scrolling
- Animated content using AOS
- Dark modern UI with orange and cyan accents
- Project cards with preview, live link, and code link
- Contact information and social links
- Resume download button

## 4. Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- AOS
- React Icons
- ESLint

## 5. Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
    img/
  components/
    About.jsx
    Contact.jsx
    Experience.jsx
    Header.jsx
    Hero.jsx
    Project.jsx
    Skill.jsx
```

## 6. Component Details

### App.jsx
- Imports and renders all main sections:
  - Header
  - Hero
  - About
  - Skill
  - Project
  - Experience
  - Contact

### Header.jsx
- Fixed top navigation bar
- Displays the logo text "BHARAT KUMAR"
- Contains desktop and mobile menu navigation
- Uses smooth scrolling to section IDs
- Closes the mobile menu after a link is clicked

### Hero.jsx
- Main hero section
- Displays the developer name and role
- Includes a resume button that points to /bharat-resume.pdf
- Shows profile image and availability badge

### About.jsx
- Introduces the developer professionally
- Displays short descriptive text
- Shows quick stats cards for learning experience and project count

### Skill.jsx
- Displays skills as a responsive grid of cards
- Lists technologies such as HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, GitHub, and Vercel

### Project.jsx
- Shows all listed projects in a card-based layout
- Each project includes image, description, technology tags, live link, and code link
- Projects cover plain HTML/CSS/JS, React, and full-stack work

### Experience.jsx
- Presents the experience timeline
- Shows an internship entry for FSL Learning with a present timeline status

### Contact.jsx
- Provides contact details and a contact form UI
- Includes email, phone, LinkedIn, and GitHub links

## 7. Content Data Used by the Portfolio

### Personal Information
- Name: Bharat Kumar
- Role: Full Stack Developer
- Email: bharatpareek256@gmail.com
- Phone: 8003953815
- GitHub: https://github.com/bharat468
- LinkedIn: https://www.linkedin.com/in/bharat-kumar-3678a324a/
- Resume path: /bharat-resume.pdf

### Skills Data
- HTML5
- CSS3
- JavaScript
- React
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- GitHub
- Vercel

### Project Data
- Full Stack E-Commerce (In Progress)
- The Asian Club
- API Movie Search App
- Dice Rolling Game
- Pokemon World
- Todo App
- Calculator App
- E-Commerce UI Demo
- Form Dashboard CMS

## 8. Design Notes

- The theme is dark and futuristic
- Tailwind CSS is used for layout and styling
- AOS provides smooth animation on scroll
- Cards use glassmorphism-style backgrounds and hover effects
- Orange and cyan colors are used for highlights

## 9. Setup Instructions

### Install dependencies
```bash
npm install
```

### Start local development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Run lint checks
```bash
npm run lint
```

## 10. Verified Build Status

The project was verified locally by running:
```bash
npm run build
```

Result:
- Build completed successfully
- Production files were generated in the dist folder

## 11. Notes and Observations

- The contact form is visually present but not connected to any backend service
- The resume button depends on the file public/bharat-resume.pdf being available
- The site is a frontend-only portfolio and does not currently include a server-side backend

## 12. Summary

This is a complete React-based portfolio website for Bharat Kumar with modern UI, animated sections, reusable components, and polished presentation suitable for professional use.
