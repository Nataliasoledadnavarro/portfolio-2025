import { render, screen } from "@testing-library/react";
import ButtonLink from "@/components/ui/ButtonLink";

describe("ButtonLink Component - Basic Tests", () => {
  it("renders with correct text and href", () => {
    render(<ButtonLink url="/test" text="Test Button" />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveTextContent("Test Button");
  });

  it("applies correct classes for primary variant", () => {
    render(<ButtonLink variant="primary" url="/test" text="Primary" />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("bg-primary");
  });

  it("applies correct classes for secondary variant", () => {
    render(<ButtonLink variant="secondary" url="/test" text="Secondary" />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("bg-secondary");
  });
});
