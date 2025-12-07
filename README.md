# Fahmi Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek UI powered by Radix UI components and smooth animations with Framer Motion.

## Overview

This is a full-stack portfolio application showcasing professional work, skills, and experience with a beautiful, interactive web interface. The project is configured with modern development tooling including Vite for fast builds and hot reloading.

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible component library
- **Framer Motion** - Animations and motion
- **React Hook Form** - Form state management
- **Zod** - TypeScript-first schema validation
- **Wouter** - Lightweight routing
- **Recharts** - Data visualization

### Backend
- **Express.js** - Node.js web framework
- **Axios** - HTTP client

### Developer Tools
- **ESBuild** - Bundler for server
- **Prettier** - Code formatting
- **TypeScript 5.6** - Type checking

## Features

- **Responsive Design** - Mobile-first responsive layout
- **Interactive Components** - Rich UI with Radix components (dialogs, menus, forms, etc.)
- **Smooth Animations** - Framer Motion powered transitions
- **Dark Mode** - Next Themes integration for theme switching
- **Form Handling** - Robust form validation with React Hook Form and Zod
- **Data Visualization** - Charts and graphs with Recharts
- **Accessibility** - Built on accessible component primitives

## Project Structure

```
├── client/                 # Frontend application
│   └── src/               # React source code
├── server/                # Backend server
├── shared/                # Shared types and utilities
├── components.json        # Component configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm 10.15.1

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Preview production build
pnpm run preview
```

### Development Commands

- `pnpm run dev` - Start Vite dev server with hot reload (localhost:3000)
- `pnpm run build` - Build frontend and bundle backend
- `pnpm run start` - Run production server
- `pnpm run check` - Type check with TypeScript
- `pnpm run format` - Format code with Prettier

## Configuration

- **Vite**: Configured in `vite.config.ts` with React and Tailwind CSS plugins
- **Tailwind**: Custom configuration with animate plugin
- **TypeScript**: Strict mode enabled in `tsconfig.json`
- **Aliases**: 
  - `@/` → Client src directory
  - `@shared/` → Shared utilities
  - `@assets/` → Attached assets

## Key Dependencies

### UI & Components
- `@radix-ui/*` - 25+ accessible component primitives
- `lucide-react` - Icon library
- `cmdk` - Command menu component

### Forms & Validation
- `react-hook-form` - Lightweight form management
- `@hookform/resolvers` - Form validation resolvers
- `zod` - Schema validation

### Utilities
- `class-variance-authority` - Component class management
- `clsx` - Conditional CSS classes
- `tailwind-merge` - Merge Tailwind classes
- `nanoid` - Unique ID generation

### Other
- `embla-carousel-react` - Carousel/slider
- `recharts` - Charts
- `sonner` - Toast notifications
- `next-themes` - Theme management
- `streamdown` - Stream utilities

## License

MIT

## Author

Famz88
