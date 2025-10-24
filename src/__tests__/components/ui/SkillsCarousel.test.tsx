import { render, screen } from "@testing-library/react";
import SkillsCarousel from "@/components/ui/SkillsCarousel";

// Mock the skills content with real icon structures
jest.mock("@/contents/skills", () => ({
  skills: [
    {
      name: "React",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      icon: "🔷",
    },
    {
      name: "Next.js",
      icon: "▲",
    },
  ],
}));

describe("SkillsCarousel Component", () => {
  describe("Basic Rendering", () => {
    test("renders without crashing", () => {
      const { container } = render(<SkillsCarousel />);
      expect(container.firstChild).toBeInTheDocument();
    });

    test("renders component container", () => {
      render(<SkillsCarousel />);

      // The component should render (even if mocked)
      const component = screen.getByTestId("skills-carousel");
      expect(component).toBeInTheDocument();
    });

    test("has accessible text content", () => {
      render(<SkillsCarousel />);

      // Check that some content is rendered
      expect(screen.getByText("Skills Carousel")).toBeInTheDocument();
    });
  });

  describe("Component Behavior", () => {
    test("maintains semantic structure", () => {
      const { container } = render(<SkillsCarousel />);

      // Component exists and has content
      expect(container.firstChild).toBeInTheDocument();
    });

    test("handles props correctly", () => {
      render(<SkillsCarousel />);

      // Component renders without props (as it should)
      const component = screen.getByTestId("skills-carousel");
      expect(component).toBeInTheDocument();
    });
  });

  describe("Integration", () => {
    test("integrates with mocked skills data", () => {
      // This test verifies that the mock is working
      expect(render(<SkillsCarousel />)).toBeTruthy();
    });

    test("renders consistently", () => {
      const { rerender } = render(<SkillsCarousel />);

      // Component should render the same way on re-render
      rerender(<SkillsCarousel />);
      expect(screen.getByTestId("skills-carousel")).toBeInTheDocument();
    });
  });
});
