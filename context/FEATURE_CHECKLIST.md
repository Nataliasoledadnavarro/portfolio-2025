# ✅ Feature Development Checklist

**Purpose**: Guarantee quality and consistency across all features. Use this checklist before every merge to ensure nothing is overlooked.

---

## 📋 Pre-Development: Planning & Setup

Before writing any code, verify:

- [ ] **Issue/Requirement Clarity**
  - [ ] Feature requirements are clear and well-defined
  - [ ] Acceptance criteria identified
  - [ ] Design/UX mockups reviewed (if applicable)
  - [ ] No conflicting dependencies with existing features

- [ ] **Branch Strategy**
  - [ ] Branch name follows convention: `feature/feature-name` or `fix/bug-name`
  - [ ] Branch created from `main` or appropriate base branch
  - [ ] No uncommitted changes in working directory

- [ ] **Dependency Check**
  - [ ] Required packages already installed (check `package.json`)
  - [ ] New dependencies vetted for size/security
  - [ ] Version compatibility verified with existing packages
  - [ ] No duplicate packages or conflicting versions

---

## 💻 During Development: Code Quality

### Architecture & Structure

- [ ] **Folder Organization**
  - [ ] New components in correct folder (`ui/`, `sections/`, `shared/`, `layout/`)
  - [ ] Tests placed in `src/__tests__/` mirroring source structure
  - [ ] Static data in `src/contents/` if applicable
  - [ ] Types exported from `src/types/index.ts`

- [ ] **TypeScript Compliance**
  - [ ] No `any` types used (use `unknown` + type narrowing instead)
  - [ ] All component props have interfaces in `@/types/index.ts`
  - [ ] Component interfaces end with `Props` or `Type` suffix
  - [ ] `strict: true` compliance (no implicit errors)
  - [ ] Run: `npm run lint` with no errors

- [ ] **Imports & Exports**
  - [ ] All imports use `@/` path alias (never `../../../`)
  - [ ] Component exports are default exports
  - [ ] Utilities are named exports
  - [ ] No circular dependencies

### Component Implementation

- [ ] **React/Next.js Standards**
  - [ ] `"use client"` directive only where necessary (hooks, context, events)
  - [ ] Server components used when possible for performance
  - [ ] `next/image` used for images (not `<img>`)
  - [ ] `next/link` used for internal navigation (not `<a>`)
  - [ ] Semantic HTML used (`<button>`, `<nav>`, `<section>`, etc.)

- [ ] **Styling**
  - [ ] Tailwind CSS used for all styling (no inline styles)
  - [ ] Dark mode considered: `dark:` prefix applied where appropriate
  - [ ] Responsive design implemented (mobile-first)
  - [ ] Classes organized logically (not scattered)
  - [ ] No hardcoded colors—use design tokens from `tailwind.config.ts`

- [ ] **Animations (if applicable)**
  - [ ] Framer Motion used for animations
  - [ ] Animations imported from `@/utils/styles/animations.tsx`
  - [ ] Wrapped in `LazyMotion` + `domAnimation` in component/layout
  - [ ] Performance-conscious (not overdone)

- [ ] **Accessibility (a11y)**
  - [ ] Semantic roles present (`<button>`, `<nav>`, `<section>`, etc.)
  - [ ] ARIA labels where needed (aria-label, aria-describedby)
  - [ ] Keyboard navigation works (Tab, Enter, Escape)
  - [ ] Color contrast ratio ≥4.5:1 (WCAG AA)
  - [ ] Focus indicators visible
  - [ ] Alt text for images
  - [ ] Form labels associated with inputs

- [ ] **Performance**
  - [ ] Components lazy-loaded if below-fold
  - [ ] Images optimized (WebP/AVIF via next/image)
  - [ ] No unnecessary re-renders (proper dependency arrays)
  - [ ] Bundle size checked: `npm run analyze`

### Testing Requirements

**By Component Type**:

#### UI Component (Atomic)

- [ ] Renders with default props
- [ ] All prop variants render correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode classes apply correctly
- [ ] Accessibility: semantic role + ARIA labels
- [ ] Animation props applied (if motion-based)
- [ ] > 80% code coverage

#### Section Component

- [ ] Imports and displays static data correctly
- [ ] Maps data and renders list items
- [ ] Responsive layout on all breakpoints
- [ ] Handles empty/null data gracefully
- [ ] > 80% code coverage

#### Custom Hook

- [ ] Hook returns expected values
- [ ] State updates trigger re-renders
- [ ] Error states handled properly
- [ ] Used only within client components
- [ ] > 80% code coverage

#### Utility Function

- [ ] All code paths tested
- [ ] Edge cases covered (empty strings, null, undefined)
- [ ] Error handling verified
- [ ] Return types match TypeScript interface
- [ ] > 80% code coverage

#### Context Provider

- [ ] Values provided to children
- [ ] Custom hook throws error if used outside provider
- [ ] State persists correctly (localStorage if applicable)
- [ ] > 80% code coverage

**General Testing**:

- [ ] Tests run: `npm test` passes
- [ ] Test file follows naming convention: `.test.tsx` or `.simple.test.tsx`
- [ ] Tests use `userEvent` not `fireEvent`
- [ ] No hardcoded `data-testid` overuse
- [ ] Coverage report reviewed: `npm run test:coverage`

---

## 📊 Pre-Merge: Final Verification

### Build & Lint

- [ ] **No Build Errors**
  - [ ] Run: `npm run build` succeeds
  - [ ] No TypeScript errors
  - [ ] No runtime warnings in console

- [ ] **Code Quality**
  - [ ] Run: `npm run lint` passes with 0 errors
  - [ ] No ESLint warnings (unless documented exception)
  - [ ] Code follows project conventions

### Performance & SEO

- [ ] **Performance Metrics**
  - [ ] Bundle size increase is minimal (<50KB)
  - [ ] Lighthouse score maintained (≥90 in all categories)
  - [ ] Core Web Vitals remain green
  - [ ] No new performance regressions

- [ ] **SEO (if page/route change)**
  - [ ] Meta tags added to `layout.tsx` or page component
  - [ ] `robots.ts` updated if new routes added
  - [ ] `sitemap.ts` updated if new routes added
  - [ ] Open Graph tags included (if applicable)

### Testing & Coverage

- [ ] **All Tests Pass**
  - [ ] Run: `npm test` passes
  - [ ] Run: `npm run test:ci` passes (coverage check)
  - [ ] Coverage meets thresholds:
    - [ ] Line coverage: ≥80%
    - [ ] Branch coverage: ≥80%
    - [ ] Function coverage: ≥80%
    - [ ] Statement coverage: ≥80%

- [ ] **Test Coverage Report Reviewed**
  - [ ] No untested branches
  - [ ] Critical paths fully covered
  - [ ] Edge cases tested

### Documentation & Comments

- [ ] **Code Clarity**
  - [ ] Complex logic has explanatory comments
  - [ ] Component props documented in types
  - [ ] Non-obvious patterns explained
  - [ ] No TODO comments left behind (unless tracked in issue)

- [ ] **Git Hygiene**
  - [ ] Commit messages follow convention (descriptive, imperative mood)
  - [ ] Commits are atomic (one feature per commit)
  - [ ] No debug logs left (`console.log`, `debugger`)
  - [ ] No commented-out code blocks

### Browser & Device Testing

- [ ] **Manual Testing (if UI changes)**
  - [ ] Tested on Chrome/Firefox/Safari/Edge
  - [ ] Mobile view tested (iPhone, Android)
  - [ ] Tablet view tested (iPad)
  - [ ] Dark mode toggle works
  - [ ] Responsive breakpoints correct

- [ ] **No Regressions**
  - [ ] Existing features still work
  - [ ] No broken links or navigation
  - [ ] Form submissions work
  - [ ] Animations smooth on older devices

### Accessibility Final Check

- [ ] **a11y Compliance**
  - [ ] Run axe DevTools browser extension: 0 violations
  - [ ] Keyboard-only navigation works (Tab through entire page)
  - [ ] Screen reader tested (if UI significant)
  - [ ] Color contrast verified (accessibility inspector)
  - [ ] Focus indicators visible on all interactive elements

---

## 🚀 Merge Requirements

**Before creating PR**:

- [ ] All checklist items above completed
- [ ] `npm run build` succeeds
- [ ] `npm run lint` returns 0 errors
- [ ] `npm test` passes
- [ ] Coverage maintained (≥80%)
- [ ] No merge conflicts
- [ ] Branch up-to-date with main

**PR Description Should Include**:

```
## Description
Brief feature description

## Checklist
- [x] Tests added/updated
- [x] Types defined in @/types/index.ts
- [x] Accessibility verified
- [x] Performance checked
- [x] Documentation added

## Breaking Changes
None / (List if any)

## Related Issues
Fixes #123
```

---

## 📝 Common Pre-Merge Issues & Fixes

### Issue: TypeScript errors after build

```
✅ Solution: Run `npm run lint` and fix all type issues before merging
```

### Issue: Test coverage drops below 80%

```
✅ Solution: Add tests to cover untested branches
Alternative: Document why coverage threshold should change (rare)
```

### Issue: Lighthouse score drops below 90

```
✅ Solution: Check bundle size (npm run analyze), optimize imports, lazy-load components
```

### Issue: ESLint warnings on commit

```
✅ Solution: Run `npm run lint` locally and fix before pushing
```

### Issue: Existing tests fail after changes

```
✅ Solution: Either fix the breaking change OR update tests if behavior changed intentionally
```

---

## 🔍 Quick Reference: Test Commands

```bash
# Single run
npm test

# Watch mode (re-run on file changes)
npm run test:watch

# CI mode (coverage report, fails if <80%)
npm run test:ci

# Generate coverage HTML report
npm run test:coverage        # Open: coverage/lcov-report/index.html

# Lint check
npm run lint

# Build check
npm run build

# Bundle analysis
npm run analyze             # Open: analyze/nodejs.html

# Full pre-merge check (run this last)
npm run build && npm run lint && npm run test:ci
```

---

## ✨ Pre-Merge Automation Script

Run this in terminal before creating PR:

```bash
#!/bin/bash
echo "🔍 Running pre-merge checks..."
npm run lint || exit 1
npm run build || exit 1
npm run test:ci || exit 1
npm run analyze
echo "✅ All pre-merge checks passed!"
```

---

**Last Updated**: 2025  
**For Questions**: Refer to ARCHITECTURE_GUIDELINES.md and PROJECT_CONTEXT.md
