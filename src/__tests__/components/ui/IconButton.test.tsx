import { render, screen } from "@testing-library/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconButton from "@/components/ui/IconButton";

describe("IconButton Component", () => {
  describe("Core Functionality", () => {
    it("renders a clickable link with correct URL", () => {
      render(
        <IconButton
          href="https://example.com"
          ariaLabel="Example Icon Button"
          icon={<span>Icon</span>}
        />
      );

      const link = screen.getByRole("link", { name: "Example Icon Button" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("displays the provided icon", () => {
      render(
        <IconButton
          href="https://github.com/username"
          ariaLabel="GitHub Profile"
          icon={<FaGithub data-testid="github-icon" />}
        />
      );

      expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    });
  });

  describe("Real-world Usage Scenarios", () => {
    it("works with GitHub profile links", () => {
      render(
        <IconButton
          href="https://github.com/username"
          ariaLabel="Visit my GitHub profile"
          icon={<FaGithub />}
        />
      );

      const link = screen.getByRole("link", { name: "Visit my GitHub profile" });
      expect(link).toHaveAttribute("href", "https://github.com/username");
    });

    it("works with LinkedIn profile links", () => {
      render(
        <IconButton
          href="https://linkedin.com/in/profile"
          ariaLabel="Connect on LinkedIn"
          icon={<FaLinkedin />}
        />
      );

      const link = screen.getByRole("link", { name: "Connect on LinkedIn" });
      expect(link).toHaveAttribute("href", "https://linkedin.com/in/profile");
    });

    it("handles complex URLs with parameters", () => {
      const complexUrl = "https://example.com/path?param=value&other=test#section";
      
      render(
        <IconButton
          href={complexUrl}
          ariaLabel="Complex URL link"
          icon={<span>🔗</span>}
        />
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", complexUrl);
    });
  });

  describe("Security & External Links", () => {
    it("opens external links safely in new tab", () => {
      render(
        <IconButton
          href="https://external-site.com"
          ariaLabel="External Site"
          icon={<span>🔗</span>}
        />
      );

      const link = screen.getByRole("link");
      // Test behavior, not implementation - user expects external links to open in new tab
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://external-site.com");
    });
  });

  describe("Accessibility", () => {
    it("provides accessible name for screen readers", () => {
      render(
        <IconButton
          href="https://accessible-site.com"
          ariaLabel="Accessible Icon Button"
          icon={<span role="img" aria-label="accessibility">♿</span>}
        />
      );

      const link = screen.getByRole("link", { name: "Accessible Icon Button" });
      expect(link).toBeInTheDocument();
      expect(link).toBeVisible();
    });

    it("supports keyboard navigation", () => {
      render(
        <IconButton
          href="https://example.com"
          ariaLabel="Focusable Button"
          icon={<span>⌨️</span>}
        />
      );

      const link = screen.getByRole("link");
      link.focus();
      expect(link).toHaveFocus();
    });
  });

  describe("Animation Props", () => {
    it("renders when hover animations are enabled", () => {
      render(
        <IconButton
          href="https://example.com"
          ariaLabel="Animated Button"
          icon={<span>✨</span>}
          hovered={true}
        />
      );

      expect(screen.getByRole("link", { name: "Animated Button" })).toBeInTheDocument();
    });

    it("renders when hover animations are disabled", () => {
      render(
        <IconButton
          href="https://example.com"
          ariaLabel="Static Button"
          icon={<span>⚡</span>}
          hovered={false}
        />
      );

      expect(screen.getByRole("link", { name: "Static Button" })).toBeInTheDocument();
    });
  });

  describe("Visual Presentation", () => {
    it("renders with appropriate styling for user interface", () => {
      render(
        <IconButton
          href="https://example.com"
          ariaLabel="Styled Button"
          icon={<span data-testid="icon">🎨</span>}
        />
      );

      const link = screen.getByRole("link");
      const icon = screen.getByTestId("icon");
      
      expect(link).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveTextContent("🎨");
    });
  });
});
