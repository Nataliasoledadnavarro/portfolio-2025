import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

// Componente helper para testing
const ThemeTestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-theme">
        Toggle Theme
      </button>
    </div>
  );
};

// Mock localStorage antes de cada test
beforeEach(() => {
  // Limpiar todos los mocks
  jest.clearAllMocks();

  // Mock del DOM classList
  document.documentElement.classList.remove = jest.fn();
  document.documentElement.classList.add = jest.fn();
  document.documentElement.classList.contains = jest.fn();

  // Mock localStorage directamente
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
      clear: jest.fn(() => null),
    },
    writable: true,
  });
});
describe("ThemeContext", () => {
  // Test de estado inicial
  it("initializes with dark theme by default", () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
  });

  // Test de toggle functionality
  it("toggles between light and dark themes", () => {
    // Primer render - simular que está en dark mode inicialmente
    (
      document.documentElement.classList.contains as jest.Mock
    ).mockReturnValueOnce(true); // Para el initial setup

    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    // Ahora simular que después del setup, está en dark mode
    (
      document.documentElement.classList.contains as jest.Mock
    ).mockReturnValueOnce(true); // isDark = true, debería cambiar a light

    const toggleButton = screen.getByTestId("toggle-theme");
    fireEvent.click(toggleButton);

    // Verificar que se llamen los métodos del DOM para cambiar a light
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      "light",
      "dark"
    );
    expect(document.documentElement.classList.add).toHaveBeenCalledWith(
      "light"
    );
  });

  // Test de persistencia en localStorage
  it("saves theme preference to localStorage", () => {
    // Simular que inicialmente está en dark mode
    (
      document.documentElement.classList.contains as jest.Mock
    ).mockReturnValueOnce(true); // Para el toggle

    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByTestId("toggle-theme");
    fireEvent.click(toggleButton);

    // Verificar que se guardó el nuevo tema (light) en localStorage
    expect(global.localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });

  // Test de carga desde localStorage
  it("loads theme from localStorage on mount", () => {
    // Mock localStorage con tema guardado
    (global.localStorage.getItem as jest.Mock).mockReturnValue("light");

    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });
});
