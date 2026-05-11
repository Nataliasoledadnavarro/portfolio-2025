# 🏗️ Component Templates & Boilerplates

**Purpose**: Copy-paste ready templates for rapid development. Each template includes component code, types, and tests based on real project examples.

---

## 📌 Template Usage

1. Copy the entire template for your component type
2. Replace `ComponentName` with actual component name
3. Adjust props and logic to your needs
4. Ensure tests are included and passing
5. Follow FEATURE_CHECKLIST.md before merge

**All templates use**:

- TypeScript strict mode
- Tailwind CSS for styling
- `@/` path aliases
- Components in correct folders
- Tests in `__tests__/` folder

---

## 1️⃣ UI Component (Atomic) - Variant-Based

**Use for**: Reusable UI elements with multiple visual states (buttons, tags, cards).

**Real Example**: `ButtonLink`, `Chip`, `IconButton`

### Component File

**Location**: `src/components/ui/YourComponent.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import type { YourComponentProps } from "@/types/index";

const YourComponent = ({
  variant = "primary",
  size = "md",
  label,
  onClick
}: YourComponentProps) => {
  // Define variant styles
  const variantClasses = {
    primary: "bg-primary text-secondary hover:bg-primary/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/90",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      className={`rounded-lg transition-colors ${variantClasses[variant]} ${sizeClasses[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default YourComponent;
```

### Type Definition

**Location**: `src/types/index.ts` (add to file)

```typescript
export interface YourComponentProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}
```

### Test File

**Location**: `src/__tests__/components/ui/YourComponent.test.tsx`

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YourComponent from "@/components/ui/YourComponent";

describe("YourComponent", () => {
  describe("Rendering", () => {
    it("renders with default variant (primary)", () => {
      render(<YourComponent label="Click me" />);
      const button = screen.getByRole("button", { name: "Click me" });
      expect(button).toHaveClass("bg-primary");
    });

    it("renders secondary variant when specified", () => {
      render(<YourComponent variant="secondary" label="Click me" />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-secondary");
    });

    it("renders different sizes correctly", () => {
      const { rerender } = render(<YourComponent size="sm" label="Small" />);
      expect(screen.getByRole("button")).toHaveClass("text-sm");

      rerender(<YourComponent size="lg" label="Large" />);
      expect(screen.getByRole("button")).toHaveClass("text-lg");
    });
  });

  describe("Interaction", () => {
    it("calls onClick handler when clicked", async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<YourComponent label="Click me" onClick={handleClick} />);

      await user.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("has semantic button role and accessible text", () => {
      render(<YourComponent label="Accessible Button" />);
      expect(screen.getByRole("button", { name: "Accessible Button" }))
        .toBeInTheDocument();
    });
  });
});
```

---

## 2️⃣ Section Component - Data-Driven

**Use for**: Full page sections that consume static data (`src/contents/`).

**Real Example**: `Projects`, `About`, `Skills`

### Content/Data File

**Location**: `src/contents/yourItems.ts`

```typescript
export interface YourItemType {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export const yourItems: YourItemType[] = [
  {
    id: 1,
    title: "Item 1",
    description: "Description of item 1",
    image: "/img/item1.png",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description of item 2",
    image: "/img/item2.png",
  },
  // Add more items...
];
```

### Section Component

**Location**: `src/components/sections/YourSection.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { yourItems } from "@/contents/yourItems";
import YourItemCard from "@/components/shared/cards/YourItemCard";
import Titles from "@/components/shared/Titles";

export default function YourSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <Titles text="Section Title" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {yourItems.map((item) => (
          <motion.div key={item.id} {...fadeInUp}>
            <YourItemCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

### Item Card Component

**Location**: `src/components/shared/cards/YourItemCard.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { YourItemType } from "@/contents/yourItems";

const YourItemCard = ({ title, description, image }: YourItemType) => {
  return (
    <motion.div
      className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      {image && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default YourItemCard;
```

### Test File

**Location**: `src/__tests__/components/sections/YourSection.test.tsx`

```typescript
import { render, screen } from "@testing-library/react";
import YourSection from "@/components/sections/YourSection";
import * as yourItemsModule from "@/contents/yourItems";

// Mock the data
jest.mock("@/contents/yourItems", () => ({
  yourItems: [
    {
      id: 1,
      title: "Test Item 1",
      description: "Test description 1",
      image: "/img/test1.png",
    },
    {
      id: 2,
      title: "Test Item 2",
      description: "Test description 2",
      image: "/img/test2.png",
    },
  ],
}));

describe("YourSection", () => {
  it("renders section title", () => {
    render(<YourSection />);
    expect(screen.getByText("Section Title")).toBeInTheDocument();
  });

  it("renders all items from data", () => {
    render(<YourSection />);
    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("displays correct number of cards", () => {
    const { container } = render(<YourSection />);
    // Motion div wraps each card
    const motionDivs = container.querySelectorAll("div[class*='motion']");
    expect(motionDivs.length).toBeGreaterThan(0);
  });
});
```

---

## 3️⃣ Context Provider - Global State

**Use for**: Global state like theme, user preferences, app config.

**Real Example**: `ThemeContext`

### Context File

**Location**: `src/context/YourContext.tsx`

```typescript
"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type YourState = "option1" | "option2";

interface YourContextType {
  state: YourState;
  setState: (newState: YourState) => void;
}

const YourContext = createContext<YourContextType | undefined>(undefined);

export function YourProvider({ children }: { children: React.ReactNode }) {
  const [state, setStateLocal] = useState<YourState>("option1");
  const [mounted, setMounted] = useState(false);

  const setState = (newState: YourState) => {
    setStateLocal(newState);
    localStorage.setItem("yourState", newState);
  };

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("yourState") as YourState | null;
    if (saved) setStateLocal(saved);
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <YourContext.Provider value={{ state, setState }}>
      {children}
    </YourContext.Provider>
  );
}

// Custom hook for consuming context
export const useYourContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error("useYourContext must be used within YourProvider");
  }
  return context;
};
```

### Provider Setup in Layout

**Location**: `src/app/ClientLayout.tsx` (add provider)

```typescript
import { YourProvider } from "@/context/YourContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <YourProvider>
      {/* Other providers */}
      {children}
    </YourProvider>
  );
}
```

### Test File

**Location**: `src/__tests__/context/YourContext.test.tsx`

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { YourProvider, useYourContext } from "@/context/YourContext";

// Test consumer component
const YourConsumer = () => {
  const { state, setState } = useYourContext();
  return (
    <div>
      <span data-testid="state-display">{state}</span>
      <button onClick={() => setState("option2")}>Change State</button>
    </div>
  );
};

describe("YourContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides initial state", () => {
    render(
      <YourProvider>
        <YourConsumer />
      </YourProvider>
    );
    expect(screen.getByTestId("state-display")).toHaveTextContent("option1");
  });

  it("updates state when setState is called", async () => {
    const user = userEvent.setup();
    render(
      <YourProvider>
        <YourConsumer />
      </YourProvider>
    );

    await user.click(screen.getByRole("button"));
    expect(screen.getByTestId("state-display")).toHaveTextContent("option2");
  });

  it("persists state to localStorage", async () => {
    const user = userEvent.setup();
    render(
      <YourProvider>
        <YourConsumer />
      </YourProvider>
    );

    await user.click(screen.getByRole("button"));
    expect(localStorage.getItem("yourState")).toBe("option2");
  });

  it("throws error when hook used outside provider", () => {
    jest.spyOn(console, "error").mockImplementation();

    expect(() => {
      render(<YourConsumer />);
    }).toThrow("useYourContext must be used within YourProvider");

    console.error.mockRestore();
  });
});
```

---

## 4️⃣ Custom Hook

**Use for**: Reusable logic extracted from components.

**Real Example**: `useTheme` pattern

### Hook File

**Location**: `src/hooks/useYourHook.ts`

```typescript
import { useCallback, useEffect, useState } from "react";

export const useYourHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Async operation
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      const result = await Promise.resolve(initialValue);
      setValue(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  }, [initialValue]);

  // Sync effect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { value, loading, error, setValue };
};
```

### Test File

**Location**: `src/__tests__/hooks/useYourHook.test.ts`

```typescript
import { renderHook, act } from "@testing-library/react";
import { useYourHook } from "@/hooks/useYourHook";

describe("useYourHook", () => {
  it("initializes with provided value", () => {
    const { result } = renderHook(() => useYourHook("test"));
    expect(result.current.value).toBe("test");
  });

  it("starts with loading state", () => {
    const { result } = renderHook(() => useYourHook("test"));
    expect(result.current.loading).toBe(true);
  });

  it("updates value after loading", async () => {
    const { result } = renderHook(() => useYourHook("test"));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.value).toBe("test");
  });

  it("handles setValue updates", async () => {
    const { result } = renderHook(() => useYourHook("initial"));

    await act(async () => {
      result.current.setValue("updated");
    });

    expect(result.current.value).toBe("updated");
  });
});
```

---

## 5️⃣ Utility Function

**Use for**: Pure functions, formatters, validators.

**Real Example**: `formatDate`, `slugify`, `validateEmail`

### Utility File

**Location**: `src/utils/yourUtils.ts`

```typescript
/**
 * Transforms input according to your business logic
 * @param input - Raw input value
 * @returns Transformed output
 * @throws Error if input is invalid
 */
export const yourTransformFunction = (input: string): string => {
  if (!input || input.trim() === "") {
    throw new Error("Input cannot be empty");
  }

  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

/**
 * Validates input against criteria
 * @param value - Value to validate
 * @returns true if valid, false otherwise
 */
export const yourValidationFunction = (value: string): boolean => {
  const pattern = /^[a-z0-9]+$/;
  return pattern.test(value) && value.length > 0;
};

/**
 * Formats data for display
 * @param data - Raw data
 * @returns Formatted string
 */
export const yourFormatFunction = (data: unknown): string => {
  if (typeof data !== "string") {
    return "";
  }
  return `Formatted: ${data}`;
};
```

### Test File

**Location**: `src/__tests__/utils/yourUtils.test.ts`

```typescript
import {
  yourTransformFunction,
  yourValidationFunction,
  yourFormatFunction,
} from "@/utils/yourUtils";

describe("Utility Functions", () => {
  describe("yourTransformFunction", () => {
    it("transforms input to lowercase with hyphens", () => {
      expect(yourTransformFunction("Hello World")).toBe("hello-world");
    });

    it("removes special characters", () => {
      expect(yourTransformFunction("Hello!@# World")).toBe("hello-world");
    });

    it("throws error for empty input", () => {
      expect(() => yourTransformFunction("")).toThrow("Input cannot be empty");
      expect(() => yourTransformFunction("   ")).toThrow(
        "Input cannot be empty",
      );
    });

    it("trims whitespace", () => {
      expect(yourTransformFunction("  test  ")).toBe("test");
    });
  });

  describe("yourValidationFunction", () => {
    it("returns true for valid input", () => {
      expect(yourValidationFunction("abc123")).toBe(true);
    });

    it("returns false for invalid input", () => {
      expect(yourValidationFunction("abc-123")).toBe(false);
      expect(yourValidationFunction("")).toBe(false);
    });
  });

  describe("yourFormatFunction", () => {
    it("formats valid string", () => {
      expect(yourFormatFunction("test")).toBe("Formatted: test");
    });

    it("returns empty string for non-string input", () => {
      expect(yourFormatFunction(123)).toBe("");
      expect(yourFormatFunction(null)).toBe("");
      expect(yourFormatFunction(undefined)).toBe("");
    });
  });
});
```

---

## 6️⃣ Type Definitions

**Use for**: Shared interfaces and type definitions.

**Location**: `src/types/index.ts`

```typescript
// Components Props
export interface YourComponentProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}

// Data Interfaces
export interface YourDataItem {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

// Context Types
export interface YourContextType {
  state: string;
  setState: (newState: string) => void;
}

// Utility Return Types
export type TransformResult = {
  success: boolean;
  data?: string;
  error?: string;
};

// Union Types
export type YourStatus = "loading" | "success" | "error" | "idle";

// Generic Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

---

## 📋 Quick Checklist When Using Templates

Before committing:

- [ ] Replaced all `Your` placeholders with actual names
- [ ] Type definitions added to `src/types/index.ts`
- [ ] Tests included and passing (`npm test`)
- [ ] Component in correct folder (`ui/`, `sections/`, `shared/`, `layout/`)
- [ ] Tests in `src/__tests__/` mirroring source
- [ ] Used `@/` path aliases in imports
- [ ] No `any` types
- [ ] Tailwind CSS used for styling
- [ ] Dark mode considered (if UI component)
- [ ] Semantic HTML used
- [ ] Accessibility considered (ARIA labels, roles)
- [ ] Run `npm run lint` with 0 errors
- [ ] Bundle size check: `npm run analyze`

---

## 🚀 Template Workflow

1. **Choose your template type** above
2. **Copy the code** into your new file
3. **Find & Replace**:
   - `Your` → YourActualName
   - `yourItems` → actualDataName
   - `YourSection` → ActualSectionName
4. **Adjust props/interface** to your needs
5. **Run tests**: `npm test`
6. **Run lint**: `npm run lint`
7. **Use FEATURE_CHECKLIST.md** before merge

---

**Last Updated**: 2025  
**Template Maintenance**: Update templates when patterns change  
**For Questions**: See ARCHITECTURE_GUIDELINES.md
