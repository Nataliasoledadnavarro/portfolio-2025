import {NewProjectProps} from "@/types";

export const newProjects: NewProjectProps[] = [
  {
    id: 1,
    title: "React 19 Auth + Dashboard Starter",
    description:
      "Starter basado en mi template React 19 + Vite, con login simulado, rutas protegidas y estructura lista para escalar hacia un dashboard.",
    image: "/img/analytics.svg",
    tag: {id: 'IN_PROGRESS', name: "En progreso"},
    githubLink:
      "https://github.com/Nataliasoledadnavarro/react19-auth-dashboard",
    demoLink: "",
  },
  {
    id: 2,
    title: "Template React 19 + Vite",
    description:
      "Template base para proyectos con React 19, TypeScript, Tailwind CSS y Vite. Ideal para empezar rápido con las nuevas features.",
    image: "/img/template.svg",
    tag: {id: 'NEW', name: "Nuevo"},
    githubLink: "https://github.com/Nataliasoledadnavarro/template_react_19",
    demoLink: "",
  },
];
