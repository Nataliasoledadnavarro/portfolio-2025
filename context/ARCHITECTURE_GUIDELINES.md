# 🏛️ Architecture Guidelines for AI Implementation

**Purpose**: Guide AI systems in generating code that follows this project's architectural patterns and best practices.

---

## 📁 Folder Structure & Responsibilities

```
src/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, fonts, global styles)
│   ├── ClientLayout.tsx           # Client-side providers wrapper
│   ├── page.tsx                  # Home page
│   ├── ClientPage.tsx            # Home page client component
│   ├── about|contact|projects/   # Route pages (layout.tsx or page.tsx per route)
│   ├── robots.ts                 # SEO: robots.txt generation
│   └── sitemap.ts                # SEO: sitemap.xml generation
│
├── components/
│   ├── layout/                    # Layout components (Navbar, Footer)
│   │   └── [Component].tsx       # Persistent UI elements
│   ├── sections/                  # Page sections (Hero, About, Projects)
│   │   └── [Section].tsx         # Typically client components
│   ├── shared/                    # Shared/reusable across sections
│   │   ├── cards/                # Card components (ProjectCard, etc.)
│   │   └── [Component].tsx
│   └── ui/                        # Atomic UI primitives
│       ├── ButtonLink.tsx         # Styled, reusable button
│       ├── Chip.tsx              # Tag/badge component
│       ├── IconButton.tsx        # Icon-only button
│       └── SkillsCarousel.tsx    # Custom interactive component
│
├── contents/                       # Static data (not components)
│   ├── projects.ts               # Project array data
│   ├── newProjects.ts            # New projects data structure
│   ├── resources.ts              # Resources/blog content
│   ├── skills.tsx                # Skills data
│   └── timeline.tsx              # Timeline data
│
├── context/                        # Global state (React Context)
│   └── ThemeContext.tsx           # Theme provider + consumer hook
│
├── lib/                            # Utilities & configuration
│   ├── routes.ts                 # Route constants
│   └── [config].ts               # App-wide configurations
│
├── types/                          # TypeScript type definitions
│   └── index.ts                  # All exported interfaces/types
│
├── utils/                          # Pure functions & helpers
│   ├── helpers.ts                # formatDate, slugify, validateEmail, etc.
│   └── styles/                   # Animation objects, style utils
│       └── animations.tsx        # Framer Motion presets
│
├── __tests__/                      # Test files (mirror src structure)
│   ├── components/
│   ├── utils/
│   └── setup.d.ts                # Test setup types
│
└── globals.css                     # Global Tailwind + CSS variables
```

**Key Principle**: Files are organized by **feature domain** first, then by **layer type**. This makes finding related code intuitive.

---

## 🔧 Component Architecture

### 1. **UI Component Template** (Atomic/Reusable)

```typescript
// src/components/ui/ComponentName.tsx
"use client";

import { motion } from "framer-motion";
import type { ComponentNameProps } from "@/types/index";

const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  return (
    <motion.div>
      {/* Content */}
    </motion.div>
  );
};

export default ComponentName;
```

**When to use**: Reusable across multiple sections, accepts props for variants/states

### 2. **Section Component Template** (Feature-Scoped)

```typescript
// src/components/sections/SectionName.tsx
"use client";

import data from "@/contents/data";
import SomeCard from "@/components/shared/cards/SomeCard";

export default function SectionName() {
  return (
    <section className="py-16 px-4">
      <h2>Section Title</h2>
      {data.map((item) => (
        <SomeCard key={item.id} {...item} />
      ))}
    </section>
  );
}
```

**When to use**: Page section combining multiple components, consuming static data

### 3. **Layout Component Template** (Persistent)

```typescript
// src/components/layout/LayoutName.tsx
"use client";

import Link from "next/link";
import IconButton from "@/components/ui/IconButton";

export default function LayoutName({ children }) {
  return (
    <header className="sticky top-0 z-50">
      {/* Layout markup */}
      {children}
    </header>
  );
}
```

**When to use**: Wraps pages, persists across routes (Navbar, Footer)

---

## 🎨 Styling Pattern

### Tailwind CSS Architecture

**Design Token System** (via `tailwind.config.ts`):

- Spacing: `8px` base unit (px-4 = 16px, py-8 = 32px)
- Colors: CSS custom properties + Tailwind variants
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Dark Mode: Class-based (`dark:` prefix)

**Class Composition Strategy**:

```typescript
// ❌ AVOID: Inline scattered classes
className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"

// ✅ PREFER: Semantic grouping + variables
const buttonClasses = variant === "primary"
  ? "bg-primary text-secondary hover:bg-primary/90"
  : "bg-secondary text-primary hover:bg-secondary/90";

className={`inline-block px-8 py-3 rounded-lg transition-colors ${buttonClasses}`}
```

### Dark Mode Implementation

Theme is managed via `ThemeContext`:

- Stored in localStorage with key `"theme"`
- Applied to `<html>` element class: `class="dark"` or `class="light"`
- Tailwind responds with `dark:` prefix utilities
- Default theme: `"dark"`

**Always use**:

```typescript
// Theme-aware colors
className = "text-primary dark:text-primary-dark bg-secondary";

// OR through context if dynamic
const { theme } = useTheme(); // ❌ Not exposed - handled via CSS vars
```

---

## 🎯 Type Safety Standards

### Type Definition File (`src/types/index.ts`)

All component props must be defined as interfaces:

```typescript
// ✅ CORRECT
export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

// Components use it
const ProjectCard = (props: ProjectCardProps) => { ... }
```

**Rules**:

- Export all types from `@/types/index.ts`
- Use `interface` for component props (allows extending)
- Use `type` for unions or complex structures
- No `any` type - use `unknown` + type narrowing if needed
- Props interfaces must end with `Props` or `Type` suffix

---

## 🔄 State Management Pattern

### Context API Only (No Redux/Zustand)

```typescript
// src/context/FeatureContext.tsx
"use client";

import { createContext, useContext } from "react";

interface FeatureContextType {
  state: string;
  action: () => void;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export function FeatureProvider({ children }: { children: React.ReactNode }) {
  // state logic here
  return (
    <FeatureContext.Provider value={/* value */}>
      {children}
    </FeatureContext.Provider>
  );
}

// Custom hook for consumption
export const useFeature = () => {
  const context = useContext(FeatureContext);
  if (!context) throw new Error("useFeature must be used within FeatureProvider");
  return context;
};
```

**Provider setup** in `ClientLayout.tsx`:

```typescript
<ThemeProvider>
  <LazyMotion features={domAnimation}>
    {children}
  </LazyMotion>
</ThemeProvider>
```

---

## 🎬 Animation Pattern (Framer Motion)

### Reusable Animation Presets

Store animations in `src/utils/styles/animations.tsx`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
```

**Usage**:

```typescript
import { fadeInUp, scaleOnHover } from "@/utils/styles/animations";

<motion.div {...fadeInUp}>
  <motion.button {...scaleOnHover}>Click me</motion.button>
</motion.div>
```

### Lazy Motion Optimization

Always wrap with `LazyMotion` + `domAnimation` in layout:

```typescript
import { LazyMotion, domAnimation } from "framer-motion";

<LazyMotion features={domAnimation}>
  {/* Components using motion */}
</LazyMotion>
```

---

## 📝 Data Structure Pattern

### Static Data (`src/contents/`)

Separate data from components for easier updates:

```typescript
// src/contents/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  // ...
}

export const projects: Project[] = [{ id: 1, title: "..." /* ... */ }];
```

**Import in components**:

```typescript
import { projects } from "@/contents/projects";

{projects.map(project => <Card key={project.id} {...project} />)}
```

---

## 🧪 Testing Strategy & Standards

### Testing Philosophy

- **Unit Tests**: Individual components and utilities in isolation
- **Behavior-Driven**: Test user interactions, not implementation details
- **Integration Focus**: Test component prop combinations, not internal state
- **Coverage Goals**: >80% per file, >90% overall (critical paths)
- **Framework**: Jest + React Testing Library (avoid enzyme)

### Test Setup & Environment

**Jest Configuration** (`jest.config.js`):

- Test environment: jsdom (simulate browser)
- Module alias mapping: `@/*` → `src/*`
- Coverage collection from `src/**/*.{ts,tsx}` (excluding `.d.ts`, `.stories.tsx`)
- Custom setup file: `jest.setup.js`

**Global Mocks** (in `jest.setup.js`):

```typescript
✅ IntersectionObserver     // For lazy loading components
✅ ResizeObserver            // For responsive behavior testing
✅ matchMedia()              // For dark mode/responsive tests
✅ next/image               // Returns <img> tag
✅ next/link                // Returns <a> tag
```

These mocks are **already configured**—use them transparently in tests.

### Test File Structure

**File Naming Convention**:

```
src/__tests__/
├── components/
│   ├── Hero.simple.test.tsx          # Snapshot test (minimal, fast)
│   ├── IconButton.test.tsx           # Full unit test
│   ├── ui/
│   │   ├── ButtonLink.simple.test.tsx
│   │   └── ButtonLink.test.tsx
│   └── sections/
├── utils/
│   └── helpers.test.ts
└── setup.d.ts                         # Type definitions for test globals
```

**Naming Rules**:

- Mirror source folder structure exactly
- Use `.simple.test.tsx` for snapshot/smoke tests (quick verification)
- Use `.test.tsx` for comprehensive unit tests
- Place in `__tests__/` folder, NOT in component folder

### Testing Patterns by Component Type

#### Pattern 1: UI Component (Atomic)

```typescript
// src/__tests__/components/ui/ButtonLink.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonLink from "@/components/ui/ButtonLink";

describe("ButtonLink Component", () => {
  describe("Rendering", () => {
    it("renders with primary variant by default", () => {
      render(<ButtonLink url="/about" text="About Me" />);
      const link = screen.getByRole("link", { name: "About Me" });
      expect(link).toHaveClass("bg-primary");
    });

    it("renders secondary variant when specified", () => {
      render(<ButtonLink variant="secondary" url="/contact" text="Contact" />);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("bg-secondary");
    });

    it("renders as a Next.js Link internally", () => {
      render(<ButtonLink url="/projects" text="Projects" />);
      expect(screen.getByRole("link")).toHaveAttribute("href", "/projects");
    });
  });

  describe("Accessibility", () => {
    it("has semantic role and accessible text", () => {
      render(<ButtonLink url="#" text="Download Resume" />);
      expect(screen.getByRole("link", { name: "Download Resume" }))
        .toBeInTheDocument();
    });
  });

  describe("Animation", () => {
    it("receives motion props for hover/tap", () => {
      const { container } = render(<ButtonLink url="#" text="Test" />);
      // Framer Motion components render inside motion.div
      const motionDiv = container.querySelector("div");
      expect(motionDiv).toBeInTheDocument();
    });
  });
});
```

#### Pattern 2: Utility Function

```typescript
// src/__tests__/utils/helpers.test.ts
import { formatDate, slugify, validateEmail } from "@/utils/helpers";

describe("Utility Functions", () => {
  describe("formatDate", () => {
    it("formats date in Spanish locale", () => {
      expect(formatDate("2023-12-25")).toBe("25 de diciembre de 2023");
    });

    it("handles edge cases (first day of year)", () => {
      expect(formatDate("2023-01-01")).toBe("1 de enero de 2023");
    });
  });

  describe("slugify", () => {
    it("converts text to URL-friendly format", () => {
      expect(slugify("Hola Mundo")).toBe("hola-mundo");
    });

    it("removes accents correctly", () => {
      expect(slugify("José María")).toBe("jose-maria");
    });

    it("handles special characters", () => {
      expect(slugify("React & Next.js!")).toBe("react-nextjs");
    });
  });

  describe("validateEmail", () => {
    it("validates correct emails", () => {
      expect(validateEmail("test@example.com")).toBe(true);
    });

    it("rejects double dots", () => {
      expect(validateEmail("test..test@domain.com")).toBe(false);
    });
  });
});
```

#### Pattern 3: Context Provider

```typescript
// src/__tests__/context/ThemeContext.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

// Consumer component for testing
const ThemeConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-display">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe("ThemeContext", () => {
  it("provides theme and toggle function", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-display")).toHaveTextContent("dark");
  });

  it("toggles theme on button click", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Toggle" });
    await user.click(button);
    expect(screen.getByTestId("theme-display")).toHaveTextContent("light");
  });

  it("persists theme to localStorage", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByRole("button"));
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("throws error when hook used outside provider", () => {
    // Suppress console.error for this test
    jest.spyOn(console, "error").mockImplementation();

    expect(() => {
      render(<ThemeConsumer />); // No provider
    }).toThrow("useTheme must be used within ThemeProvider");

    console.error.mockRestore();
  });
});
```

### Running Tests

**Commands**:

```bash
npm test              # Run all tests once
npm run test:watch   # Watch mode (re-run on file changes)
npm run test:ci      # CI mode (coverage report, no watch)
npm run test:coverage # Generate coverage report (coverage/ folder)
```

**Coverage Report**:

- Opens in `coverage/lcov-report/index.html` after running
- Identifies untested branches, statements, functions
- Current targets: >80% file coverage, >90% critical paths

### What To Test

**Always Test** ✅:

- Props rendering and variants
- User interactions (clicks, typing)
- Conditional rendering (if/ternary logic)
- Props validation and type safety
- Accessibility (ARIA labels, roles)
- Error states and edge cases
- localStorage/session behavior
- Theme/dark mode switching

**Don't Need to Test** ❌:

- Framer Motion animation values (already tested by library)
- Next.js Image optimization (handled by Next.js)
- Next.js Link navigation (tested in integration/e2e)
- External library functionality (assume it works)
- CSS class application (test behavior, not classes)

### Testing Checklist for New Components

Before committing a component, ensure:

1. **Rendering Tests**
   - [ ] Default props render correctly
   - [ ] All prop variants render correctly
   - [ ] Props are passed to child components

2. **User Interaction Tests**
   - [ ] Click handlers fire correctly
   - [ ] Form inputs update state
   - [ ] Navigation links have correct href

3. **Accessibility Tests**
   - [ ] Semantic roles present (button, link, heading, etc.)
   - [ ] ARIA labels accessible to screen readers
   - [ ] Keyboard navigation works

4. **State & Context Tests**
   - [ ] Context values flow to children
   - [ ] State updates trigger re-renders
   - [ ] localStorage syncs correctly

5. **Edge Cases**
   - [ ] Empty/null props handled gracefully
   - [ ] Long text truncates correctly
   - [ ] Error states display messages

6. **Coverage**
   - [ ] > 80% line coverage
   - [ ] All branches tested
   - [ ] No untested conditionals

### Common Testing Mistakes to Avoid

**❌ Testing Implementation Details**

```typescript
// WRONG: Testing internal component state
it("sets state to true", () => {
  const { getByTestId } = render(<Component />);
  expect(component.state.isOpen).toBe(true); // ❌ Can't access state
});
```

**✅ Test User Behavior**

```typescript
// RIGHT: Test what user sees
it("displays content when opened", async () => {
  render(<Component />);
  expect(screen.getByText("Content")).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByText("Content")).toBeInTheDocument();
});
```

**❌ Over-mocking**

```typescript
// WRONG: Mocking too much defeats testing
jest.mock("@/components/ui/Button"); // Don't mock if testing integration
```

**✅ Mock External Dependencies Only**

```typescript
// RIGHT: Mock API calls, window objects, external services
jest.mock("@/lib/api"); // Mock your API
global.fetch = jest.fn(); // Mock browser APIs
```

**❌ No Async Handling**

```typescript
// WRONG: Not awaiting async operations
it("loads data", () => {
  render(<Component />);
  expect(screen.getByText("Data")).toBeInTheDocument(); // ❌ Data not loaded yet
});
```

**✅ Await User Events & Queries**

```typescript
// RIGHT: Use waitFor and await userEvent
it("loads data", async () => {
  render(<Component />);
  await waitFor(() => {
    expect(screen.getByText("Data")).toBeInTheDocument();
  });
});
```

### Testing Utility: userEvent vs fireEvent

**Always prefer `userEvent` over `fireEvent`**:

```typescript
import userEvent from "@testing-library/user-event";

// ✅ PREFER: userEvent (simulates real user behavior)
await userEvent.click(button);
await userEvent.type(input, "test@example.com");
await userEvent.hover(element);

// ❌ AVOID: fireEvent (too low-level, doesn't simulate real events)
fireEvent.click(button);
fireEvent.change(input, { target: { value: "test" } });
```

### TypeScript in Tests

**Import Types Properly**:

```typescript
import type { ComponentProps } from "react";
import Component from "@/components/Component";

type ComponentProps = ComponentProps<typeof Component>;

const defaultProps: ComponentProps = {
  title: "Test",
  // ...
};

it("renders with props", () => {
  render(<Component {...defaultProps} />);
});
```

### Continuous Integration

**Coverage Thresholds** (enforced):

```json
{
  "global": {
    "branches": 80,
    "functions": 80,
    "lines": 80,
    "statements": 80
  }
}
```

Tests that drop coverage below threshold **will fail CI/CD**. If needed, update thresholds in `jest.config.js`.

### Summary for AI When Writing Tests

1. **Mirror structure**: Test lives in `__tests__/` folder matching source
2. **Name clearly**: Describe WHAT is tested, not HOW
3. **Test behavior**: User interactions and outcomes, not implementation
4. **Use factories**: Create test data functions for DRY tests
5. **Keep isolated**: Each test should be independent
6. **Mock wisely**: Only external dependencies and third-party APIs
7. **Async first**: Use `async/await` and `waitFor()` for async operations
8. **Use userEvent**: Always over fireEvent
9. **Check coverage**: Aim for >80%, aim for critical path coverage
10. **Document why**: Comments for non-obvious test logic

---

## 🚀 Best Practices Checklist

### Do's ✅

- Use `next/link` for internal navigation (no `<a>` tags)
- Use `next/image` for images (automatic optimization)
- Add `"use client"` only when needed (Context, hooks, events)
- Leverage TypeScript strict mode (no implicit any)
- Keep components focused on single responsibility
- Use semantic HTML (`<button>`, `<nav>`, `<section>`, etc.)
- Import from `@/` alias for absolute imports
- Use Tailwind first, add CSS only when necessary
- Implement keyboard navigation for interactive elements
- Add loading states and error boundaries

### Don'ts ❌

- Don't use inline styles or CSS-in-JS (use Tailwind)
- Don't over-nest components (flatten when possible)
- Don't fetch data in components (use loader functions if needed)
- Don't create unnamed anonymous functions (use named exports)
- Don't use `index.tsx` in components folder (only for re-exports)
- Don't hardcode values (use config files, constants, or data)
- Don't skip type definitions (no implicit any)
- Don't mix server and client logic in same component

---

## 🔗 Import Conventions

**Always use path alias**:

```typescript
✅ import { validateEmail } from "@/utils/helpers";
✅ import type { ProjectCardProps } from "@/types/index";
✅ import ProjectCard from "@/components/shared/cards/ProjectCard";

❌ import { validateEmail } from "../../../utils/helpers";
❌ import ProjectCard from "./../../cards/ProjectCard";
```

---

## 🧪 CI/CD & Deployment

- **Build Command**: `npm run build`
- **Test Command**: `npm run test:ci`
- **Lint Command**: `npm run lint`
- **Deployment**: Vercel (automatic on main branch)
- **Analytics**: Bundle analysis available via `npm run analyze`

---

## 📌 Summary for AI Agents

When implementing features or fixing bugs in this codebase:

1. **Check** the project context and existing patterns
2. **Match** folder structure conventions
3. **Apply** TypeScript strictly (interfaces for props)
4. **Use** Tailwind for all styling
5. **Add** tests alongside code (>80% coverage)
6. **Optimize** animations with LazyMotion
7. **Import** using `@/` alias paths
8. **Separate** data from presentation
9. **Export** types from `@/types/index.ts`
10. **Verify** no TypeScript errors before committing

---

**Generated for**: AI-assisted development  
**Accuracy Date**: 2025  
**Maintained By**: Natalia Navarro (Frontend Developer & Tech Lead)
