# 📋 Project Context: Portfolio 2025

## General Overview

**Project Type**: Personal Portfolio & Tech Showcase  
**Language**: TypeScript + React + Next.js 15  
**Purpose**: Showcase professional work, technical skills, and projects as Frontend Developer & Tech Lead  
**Deployment**: Vercel (auto-deploy on main branch)  
**Live URL**: https://natalia-navarro.vercel.app

## Tech Stack

| Layer            | Technology                   | Version       |
| ---------------- | ---------------------------- | ------------- |
| **Runtime**      | Node.js 18+                  | -             |
| **Framework**    | Next.js (App Router)         | 15.3.5        |
| **View Library** | React                        | 19.0.0        |
| **Language**     | TypeScript                   | 5+            |
| **Styling**      | Tailwind CSS                 | 4.1.11        |
| **Animations**   | Framer Motion                | 12.23.0       |
| **Icons**        | React Icons + Heroicons      | 5.5.0 / 2.2.0 |
| **Testing**      | Jest + React Testing Library | 30+ / 16+     |
| **Linting**      | ESLint                       | 9+            |

## Key Features

✅ **SEO Optimization**: Metadata, sitemap.ts, robots.ts, structured data  
✅ **Performance**: Image optimization (WebP/AVIF), lazy loading, bundle analysis  
✅ **Responsive Design**: Mobile-first approach with Tailwind breakpoints  
✅ **Dark/Light Theme**: Context API + localStorage persistence  
✅ **Smooth Animations**: Framer Motion with LazyMotion optimization  
✅ **Reusable Components**: UI system with variants and type safety  
✅ **Type Safety**: Full TypeScript strict mode enabled  
✅ **Testing**: Unit tests with >80% coverage target  
✅ **Accessibility**: WCAG 2.1 AA compliance

## Project Philosophy

- **Component-Driven Development**: Composable, single-responsibility components
- **Type-First Approach**: Leverage TypeScript for self-documenting code
- **Performance-Conscious**: Optimize bundles, use Code Splitting, lazy load non-critical content
- **Testability**: Components designed for easy unit testing
- **Scalability**: Structure supports rapid feature addition without refactoring
- **Convention Over Configuration**: Follow established patterns for consistency

## Content Structure

The portfolio contains:

- **Hero Section**: Intro with CTA buttons
- **About Section**: Professional summary and timeline
- **Projects Section**: Showcase of completed work (project cards)
- **Skills Section**: Interactive carousel of technical skills
- **Resources Section**: Blog-like content structure
- **Contact Section**: Contact information and form
- **Navigation**: Responsive navbar with dark mode toggle

## Code Conventions

### Naming

- **Components**: PascalCase (e.g., `ButtonLink.tsx`, `SkillsCarousel.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme`)
- **Utils/Functions**: camelCase (e.g., `formatDate`, `validateEmail`)
- **Types**: PascalCase with suffix (e.g., `ProjectCardProps`, `ThemeContextType`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_TIMEOUT`)

### File Organization

- Exports are default for components, named for utilities
- Index files are minimal re-export files
- Styles are co-located or in `utils/styles/`
- Tests live in `__tests__/` mirroring src structure

### TypeScript Standards

- `strict: true` enabled
- No implicit `any`
- Use union types over boolean props when 3+ states exist
- Export interfaces publicly from `src/types/index.ts`

## Internationalization

- Primary language: **Spanish** (es)
- UI text: Bilingual where applicable
- Date formatting: Spanish locale (es-ES)
- Slug generation: Handles accents correctly via normalization

## Performance Targets

- Lighthouse: 90+ (all categories)
- Core Web Vitals: All green
- Bundle size: Keep JS <200KB (gzipped)
- Time to Interactive: <2.5s

## Development Workflow

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run analyze      # Bundle analysis (outputs to analyze/nodejs.html)
npm run lint         # ESLint check
npm test             # Jest unit tests
npm run test:watch   # Watch mode
npm run test:ci      # CI environment testing
```

## Critical Files & Their Purpose

| File                           | Purpose                         |
| ------------------------------ | ------------------------------- |
| `src/app/layout.tsx`           | Root layout with metadata/SEO   |
| `src/app/ClientLayout.tsx`     | Client providers (Theme, Fonts) |
| `src/context/ThemeContext.tsx` | Global theme state management   |
| `src/types/index.ts`           | Central type definitions        |
| `src/lib/routes.ts`            | Route constants                 |
| `tailwind.config.ts`           | Design tokens, spacing, colors  |
| `jest.config.js`               | Test configuration              |

## Testing Strategy

### Test Framework & Tools

- **Test Runner**: Jest 30+
- **Component Testing**: React Testing Library 16+
- **Test Environment**: jsdom (browser simulation)
- **Coverage Tool**: V8 provider (built-in Jest)

### Global Test Setup

All tests have access to pre-configured mocks (`jest.setup.js`):

- `IntersectionObserver` - Lazy loading testing
- `ResizeObserver` - Responsive component testing
- `matchMedia()` - Dark mode / responsive design queries
- `next/image` - Mocked as standard `<img>` tag
- `next/link` - Mocked as standard `<a>` tag

**No additional mock setup needed** when writing tests—these are automatically available.

### Testing Coverage Goals

| Metric            | Target              |
| ----------------- | ------------------- |
| Line Coverage     | >80% per file       |
| Branch Coverage   | >80% per file       |
| Function Coverage | >80% per file       |
| Overall Coverage  | >90% critical paths |

Coverage thresholds are **enforced in CI/CD**—tests that drop below thresholds fail the build.

### Test Execution

```bash
npm test              # Single run, watch mode
npm run test:watch   # Re-run on file changes
npm run test:ci      # CI mode (coverage report, no watch)
npm run test:coverage # Generate HTML coverage report
```

### What Gets Tested

✅ **Must Test**:

- Component rendering with different props/variants
- User interactions (clicks, form input)
- Conditional rendering logic
- Accessibility (ARIA labels, semantic roles)
- State changes and side effects
- Error handling and edge cases

❌ **Don't Test**:

- Framer Motion animation specifics (library-tested)
- Next.js Image optimization (framework-tested)
- External library internals
- CSS class names directly (test behavior instead)

### Test File Structure

Tests mirror source code structure in `src/__tests__/`:

```
src/__tests__/
├── components/           # UI and section components
│   ├── Hero.simple.test.tsx         # Smoke/snapshot tests
│   ├── IconButton.test.tsx          # Full unit tests
│   └── ui/
│       └── ButtonLink.test.tsx
├── utils/
│   └── helpers.test.ts              # Utility function tests
├── context/
│   └── ThemeContext.test.tsx        # Context provider tests
└── setup.d.ts                        # Test type definitions
```

**File Naming**:

- `.simple.test.tsx` = Quick snapshot/smoke tests
- `.test.tsx` = Comprehensive unit tests
- Always place in `__tests__/` folder, not alongside source

## Environment & Configuration

- **Node Version**: 18+ required
- **Package Manager**: npm (npm install, npm run...)
- **Build Output**: Next.js standard `.next/` folder
- **Public Assets**: `/public` folder
- **Env Variables**: None required for basic functionality
- **Test Environment**: jsdom (browser-like environment)
- **Coverage Reports**: Generated in `coverage/` folder after `npm run test:ci`

---

**Last Updated**: 2025  
**Maintained By**: Natalia Navarro (@Nataliasoledadnavarro)
