# Darwin Apolinario's Portfolio

A modern, performant portfolio website built with Astro, featuring a clean design inspired by Gruvbox color scheme.

## Features

- **Blazing Fast**: Built with Astro for optimal performance and zero JS by default
- **Dark/Light Mode**: Theme toggle with smooth transitions and Gruvbox-inspired color palette
- **Content Collections**: Type-safe content management for projects, experience, and blog posts
- **Interactive UI**: Smooth hover effects and animations for enhanced user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, sitemap, and structured data

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.17
- **Content**: Astro Content Collections with TypeScript
- **Theme**: Custom Gruvbox-inspired color scheme
- **Code Quality**: Prettier with Astro & Tailwind plugins

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, About, Experience, Projects, Writing
│   │   └── ui/         # Reusable UI components
│   ├── content/        # Content collections
│   │   ├── projects/   # Project markdown files
│   │   ├── experience/ # Experience markdown files
│   │   └── config.ts   # Content schema definitions
│   ├── layouts/        # Base layout wrapper
│   ├── pages/          # File-based routing
│   ├── styles/         # Global CSS with theme variables
│   └── utils/          # Constants and utilities
├── tailwind.config.mjs # Tailwind configuration
└── astro.config.mjs    # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd personal-2026

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Adding Projects

Create a new markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
order: 1
technologies: ["TypeScript", "React", "Node.js"]
githubUrl: "https://github.com/..."
liveUrl: "https://..."
featured: true
---

Detailed project description...
```

### Adding Experience

Create a new markdown file in `src/content/experience/`:

```markdown
---
company: "Company Name"
position: "Job Title"
dateRange: "Jan 2023 - Present"
url: "https://company.com"
order: 1
technologies: ["Tech1", "Tech2"]
---

Job description and achievements...
```

## Theme Customization

Colors and theme variables are defined in `src/styles/global.css`:

- Dark theme (default): Gruvbox dark palette
- Light theme: Gruvbox light palette
- Custom variables for card backgrounds and borders

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run astro`   | Run Astro CLI commands                      |

## License

MIT

## Contact

Darwin Apolinario - Full-Stack Software Engineer & AI Developer

- GitHub: [@darwin808](https://github.com/darwin808)
- LinkedIn: [Darwin Apolinario](https://linkedin.com/in/darwin-apolinario)
