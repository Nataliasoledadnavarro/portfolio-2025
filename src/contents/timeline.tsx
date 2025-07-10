import { TimeLineItem } from "@/types";
import { FaLaptopCode, FaReact, FaMobileAlt } from "react-icons/fa";
import { FaSpaceAwesome } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

export const timelineData: TimeLineItem[] = [
  {
    side: "left",
    icon: <FaLaptopCode className="h-6 w-6" />,
    title: "Inicio en el desarrollo",
    description:
      "Comencé a formarme de manera autodidacta en programación mientras trabajaba en otras áreas.",
    year: "2021",
  },
  {
    side: "right",
    icon: <FaReact className="h-6 w-6" />,
    title: "Formación intensiva",
    description:
      "Me capacité formalmente en desarrollo web con cursos de JavaScript, React y otras tecnologías.",
    year: "2022",
  },
  {
    side: "left",
    icon: <BsPersonWorkspace className="h-6 w-6" />,
    title: "Primer experiencia profesional",
    description:
      "Ingresé al equipo de Eldar como desarrolladora frontend, participando en proyectos reales y colaborativos.",
    year: "2022",
  },
  {
    side: "right",
    icon: <MdGroups2 className="h-6 w-6" />,
    title: "Liderazgo técnico",
    description:
      "Formé y lideré un equipo de frontend con foco en calidad, buenas prácticas y crecimiento constante.",
    year: "2023",
  },
  {
    side: "left",
    icon: <FaMobileAlt className="h-6 w-6" />,
    title: "Desarrollo de soluciones",
    description:
      "Diseñé e implementé funcionalidades clave para plataformas web y mobile en producción.",
    year: "2023–2024",
  },
  {
    side: "right",
    icon: <FaSpaceAwesome className="h-6 w-6" />,
    title: "Presente y futuro",
    description:
      "Sigo formándome y desarrollando proyectos que combinen impacto técnico y valor humano.",
    year: "2024–actualidad",
  },
];
