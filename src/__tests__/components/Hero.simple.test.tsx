import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";
import { ThemeProvider } from "@/context/ThemeContext";

// Wrapper para providers necesarios
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Hero Section - Essential Tests", () => {
  it("renders main heading with name", () => {
    renderWithProviders(<Hero />);

    // Verificar elementos esenciales que sabemos que existen
    expect(screen.getByText(/natalia navarro/i)).toBeInTheDocument();
  });

  it("renders professional title", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText(/frontend developer/i)).toBeInTheDocument();
  });

  it("renders greeting text", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText(/hola, soy/i)).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    renderWithProviders(<Hero />);

    // Buscar los botones de navegación por texto
    expect(screen.getByText(/mis proyectos/i)).toBeInTheDocument();
    expect(screen.getByText(/contactame/i)).toBeInTheDocument();
  });

  it("renders CV download option", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText(/descargar cv/i)).toBeInTheDocument();
  });

  it("renders skills carousel", () => {
    renderWithProviders(<Hero />);

    // Verificar que el mock del SkillsCarousel está presente
    expect(screen.getByTestId("skills-carousel")).toBeInTheDocument();
  });

  it("renders profile image", () => {
    renderWithProviders(<Hero />);

    // Buscar la imagen por alt text
    const profileImage = screen.getByAltText(/profile/i);
    expect(profileImage).toBeInTheDocument();
  });
});
