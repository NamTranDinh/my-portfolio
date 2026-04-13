# Tran Dinh Nam - Portfolio

A modern dark-mode portfolio website built with React, TypeScript, and Tailwind CSS. Inspired by GitHub's landing page design with gradient accents, glow effects, and smooth scroll animations.

## Live Features

- Dark theme with gradient text (blue, purple, pink)
- Animated hero section with avatar and availability badge
- Alternating timeline layout for Experience and Projects
- Project cards with App Store-style banners and detail modals
- Company logos with interactive hover effects
- Scroll-triggered fade-in animations (Motion)
- Responsive design with mobile menu
- Download CV and contact integration

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

## Project Structure

```
src/
  components/
    PortfolioStatic.tsx   # Main portfolio component
  data/
    portfolioData.ts      # All content and data types
  index.css               # Global styles and Tailwind config
  App.tsx                  # Root component
  main.tsx                # Entry point
public/
  images/
    avatar.jpeg           # Profile photo
    companies/            # Company logos (BES, CMC Global, AHT Tech)
    projects/             # Project logos (Unitel, Vsale, VCM360, etc.)
```

## Author

**Tran Dinh Nam** - Flutter Developer | Mobile & Cross-Platform Specialist

- GitHub: [NamTranDinh](https://github.com/NamTranDinh)
- LinkedIn: [trandinham20102](https://www.linkedin.com/in/trandinham20102)
- Email: trandinhnamnd0102@gmail.com
