import { render, screen } from "@testing-library/react";
import ButtonLink from "@/components/ui/ButtonLink";

describe("ButtonLink Component", () => {
  // ✅ Principio AAA: Arrange, Act, Assert
  it("renders primary button with correct text and link", () => {
    // 🟦 ARRANGE: Preparar datos y estado
    const props = {
      variant: "primary" as const,
      url: "/projects",
      text: "Ver Proyectos",
    };

    // 🟨 ACT: Ejecutar la acción
    render(<ButtonLink {...props} />);

    // 🟩 ASSERT: Verificar el resultado
    const button = screen.getByRole("link", { name: /ver proyectos/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/projects");
    expect(button).toHaveClass("bg-primary"); // Clase de Tailwind
  });

  // ✅ Test de variantes
  it("renders secondary variant with correct styling", () => {
    render(<ButtonLink variant="secondary" url="/contact" text="Contactar" />);

    const button = screen.getByRole("link", { name: /contactar/i });
    expect(button).toHaveClass("bg-secondary"); // Secondary styling
  });

  // ✅ Test de accesibilidad
  it("has proper accessibility attributes", () => {
    render(<ButtonLink url="/about" text="Sobre mí" />);

    const button = screen.getByRole("link");
    expect(button).toBeVisible();
    expect(button).toHaveAccessibleName("Sobre mí");
  });
});
