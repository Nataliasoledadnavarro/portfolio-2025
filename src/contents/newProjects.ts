import { NewProjectProps } from "@/types";

export const newProjects: NewProjectProps[] = [
  {
    id: 1,
    title: "Admin Panel - Juegos de Mesa",
    description:
      "Panel para gestionar productos y categorías de juegos de mesa. Next.js + React 19 y backend Java. Dashboard, CRUD, notificaciones y UI moderna.",
    image: "/img/boardgames-admin.svg",
    tag: {variant: 'secondary', name: "Fullstack"},
    githubLink:
      "https://github.com/Nataliasoledadnavarro/boardgames-admin-panel-fe",
    demoLink: "https://boardgames-admin-panel-fe.vercel.app/",
  },
  {
    id: 2,
    title: "Template React 19 + Vite",
    description:
      "Template base para proyectos con React 19, TypeScript, Tailwind CSS y Vite. Ideal para empezar rápido con las nuevas features.",
    image: "/img/template.svg",
    tag: {variant: 'primary', name: "Nuevo"},
    githubLink: "https://github.com/Nataliasoledadnavarro/template_react_19",
    demoLink: "",
  },
];
