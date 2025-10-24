import { render, screen } from "@testing-library/react";
import Chip from "@/components/ui/Chip";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    span: ({
      children,
      className,
      ...restProps
    }: {
      children: React.ReactNode;
      className: string;
      [key: string]: unknown;
    }) => {
      // Filter out Framer Motion specific props
      const domProps = Object.fromEntries(
        Object.entries(restProps).filter(
          ([key]) =>
            !["whileHover", "whileTap", "animate", "initial", "exit"].includes(
              key
            )
        )
      );
      return (
        <span className={className} {...domProps}>
          {children}
        </span>
      );
    },
  },
}));

describe("Chip Component", () => {
  describe("Rendering", () => {
    test("renders with default props", () => {
      render(<Chip label="Test Chip" />);

      const chip = screen.getByText("Test Chip");
      expect(chip).toBeInTheDocument();
      expect(chip).toHaveClass("rounded-full");
      expect(chip).toHaveClass("font-medium");
    });

    test("renders with custom label", () => {
      const customLabel = "React Developer";
      render(<Chip label={customLabel} />);

      expect(screen.getByText(customLabel)).toBeInTheDocument();
    });

    test("renders with custom className", () => {
      render(<Chip label="Test" className="custom-class" />);

      const chip = screen.getByText("Test");
      expect(chip).toHaveClass("custom-class");
    });
  });

  describe("Variants", () => {
    test("applies primary variant styles (default)", () => {
      render(<Chip label="Primary" />);

      const chip = screen.getByText("Primary");
      expect(chip).toHaveClass("bg-primary/40");
      expect(chip).toHaveClass("text-secondary");
    });

    test("applies secondary variant styles", () => {
      render(<Chip label="Secondary" variant="secondary" />);

      const chip = screen.getByText("Secondary");
      expect(chip).toHaveClass("bg-secondary/40");
      expect(chip).toHaveClass("text-secondary");
    });

    test("applies success variant styles", () => {
      render(<Chip label="Success" variant="success" />);

      const chip = screen.getByText("Success");
      expect(chip).toHaveClass("bg-green-100");
      expect(chip).toHaveClass("text-green-700");
    });

    test("applies warning variant styles", () => {
      render(<Chip label="Warning" variant="warning" />);

      const chip = screen.getByText("Warning");
      expect(chip).toHaveClass("bg-yellow-100");
      expect(chip).toHaveClass("text-yellow-700");
    });

    test("applies danger variant styles", () => {
      render(<Chip label="Danger" variant="danger" />);

      const chip = screen.getByText("Danger");
      expect(chip).toHaveClass("bg-red-100");
      expect(chip).toHaveClass("text-red-700");
    });
  });

  describe("Sizes", () => {
    test("applies medium size styles (default)", () => {
      render(<Chip label="Medium" />);

      const chip = screen.getByText("Medium");
      expect(chip).toHaveClass("text-sm");
      expect(chip).toHaveClass("px-3");
      expect(chip).toHaveClass("py-1");
    });

    test("applies small size styles", () => {
      render(<Chip label="Small" size="sm" />);

      const chip = screen.getByText("Small");
      expect(chip).toHaveClass("text-xs");
      expect(chip).toHaveClass("px-2");
      expect(chip).toHaveClass("py-0.5");
    });
  });

  describe("Accessibility", () => {
    test("is accessible to screen readers", () => {
      render(<Chip label="Accessible Chip" />);

      const chip = screen.getByText("Accessible Chip");
      expect(chip).toBeInTheDocument();
      expect(chip.textContent).toBe("Accessible Chip");
    });

    test("maintains semantic meaning as span element", () => {
      render(<Chip label="Semantic Test" />);

      const chip = screen.getByText("Semantic Test");
      expect(chip.tagName).toBe("SPAN");
    });
  });

  describe("Combination of Props", () => {
    test("combines variant, size, and custom className correctly", () => {
      render(
        <Chip
          label="Combined Test"
          variant="success"
          size="sm"
          className="custom-spacing"
        />
      );

      const chip = screen.getByText("Combined Test");
      expect(chip).toHaveClass("rounded-full");
      expect(chip).toHaveClass("font-medium");
      expect(chip).toHaveClass("bg-green-100");
      expect(chip).toHaveClass("text-green-700");
      expect(chip).toHaveClass("text-xs");
      expect(chip).toHaveClass("px-2");
      expect(chip).toHaveClass("py-0.5");
      expect(chip).toHaveClass("custom-spacing");
    });
  });

  describe("Edge Cases", () => {
    test("handles empty label gracefully", () => {
      const { container } = render(<Chip label="" />);

      // Find the span element with the chip classes
      const chip = container.querySelector("span.rounded-full");
      expect(chip).toBeInTheDocument();
      expect(chip).toHaveClass("rounded-full");
      expect(chip).toHaveClass("font-medium");
    });

    test("handles very long labels", () => {
      const longLabel =
        "This is a very long label that might break the design if not handled properly";
      render(<Chip label={longLabel} />);

      const chip = screen.getByText(longLabel);
      expect(chip).toBeInTheDocument();
      expect(chip.textContent).toBe(longLabel);
    });

    test("handles special characters in label", () => {
      const specialLabel = "React & TypeScript 🚀";
      render(<Chip label={specialLabel} />);

      expect(screen.getByText(specialLabel)).toBeInTheDocument();
    });
  });
});
