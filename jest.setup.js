/* eslint-disable */
import "@testing-library/jest-dom";

// Mock IntersectionObserver (para componentes con lazy loading)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver (para componentes responsive)
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock matchMedia (para tests de responsive design)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} alt={props.alt || "test-image"} />;
  },
}));

// Mock Next.js Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

// Mock componentes problemáticos para tests
jest.mock("@/components/ui/IconButton", () => ({
  __esModule: true,
  default: ({ href, ariaLabel, icon, children }) => (
    <a href={href} aria-label={ariaLabel}>
      {icon}
      {children}
    </a>
  ),
}));

jest.mock("@/components/ui/SkillsCarousel", () => ({
  __esModule: true,
  default: () => <div data-testid="skills-carousel">Skills Carousel</div>,
}));

jest.mock("@/components/ui/ButtonDownload", () => ({
  __esModule: true,
  default: ({ file, label, download, icon }) => (
    <a href={file} download={download} aria-label={label}>
      {icon}
      {label}
    </a>
  ),
}));

// Mock framer-motion para tests más estables
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <div {...domProps}>{children}</div>;
    },
    section: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <section {...domProps}>{children}</section>;
    },
    button: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <button {...domProps}>{children}</button>;
    },
    h1: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <h1 {...domProps}>{children}</h1>;
    },
    p: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <p {...domProps}>{children}</p>;
    },
    span: ({ children, ...props }) => {
      const {
        whileHover,
        whileTap,
        initial,
        animate,
        transition,
        ...domProps
      } = props;
      return <span {...domProps}>{children}</span>;
    },
  },
  AnimatePresence: ({ children }) => children,
  LazyMotion: ({ children }) => children,
  domAnimation: {},
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
