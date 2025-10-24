import { TimeLineItem } from "@/types";
import { FaLaptopCode, FaReact, FaTools, FaRegHandshake } from "react-icons/fa";
import { FaSpaceAwesome } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";

export const timelineData: TimeLineItem[] = [
  {
    side: "left",
    icon: <FaLaptopCode className="h-7 w-7 text-primary" />,
    title: "Inicio en el desarrollo",
    description:
      "Comencé a formarme de manera autodidacta en programación mientras trabajaba en otras áreas.",
    year: "2021",
  },
  {
    side: "right",
    icon: <FaReact className="h-7 w-7 text-primary" />,
    title: "Formación intensiva",
    description:
      "Me capacité formalmente en desarrollo web con cursos de JavaScript, React y otras tecnologías.",
    year: "2022",
  },
  {
    side: "left",
    icon: <BsPersonWorkspace className="h-7 w-7 text-primary" />,
    title: "Primer experiencia profesional",
    description:
      "Ingresé al equipo de Eldar como desarrolladora frontend, participando desde cero en la creación de una plataforma web robusta y escalable, con foco en la experiencia del usuario.",
    year: "2022",
  },
  {
    side: "right",
    icon: <MdGroups2 className="h-7 w-7 text-primary" />,
    title: "Liderazgo técnico",
    description:
      "Formé y lideré un equipo de frontend con foco en calidad, buenas prácticas y crecimiento constante.",
    year: "2024",
  },
  {
    side: "left",
    icon: <FaRegHandshake className="h-7 w-7 text-primary" />,
    title: "Gestión de proyectos y soporte a cliente",
    description:
      "Colaboré activamente con Project Managers en la coordinación de tres proyectos estratégicos para cliente, participando en reuniones de seguimiento y brindando soporte técnico directo.",
    year: "2024-2025",
  },
  {
    side: "right",
    icon: <FaTools className="h-7 w-7 text-primary" />,
    title: "Desarrollo de soluciones",
    description:
      "Diseñé e implementé soluciones clave para plataformas digitales en producción. Además, impulsé estrategias de optimización como la creación de templates base y una librería de utilidades, con foco en la eficiencia del desarrollo y el fortalecimiento del equipo.",
    year: "2024–2025",
  },
  {
    side: "left",
    icon: <FaSpaceAwesome className="h-7 w-7 text-primary" />,
    title: "Presente y futuro",
    description:
      "Continúo expandiendo mi stack técnico en un curso de Java, mientras participo activamente en nuevos proyectos React. Siempre en evolución, buscando aportar lo mejor de mí en cada desafío y fortaleciendo mis habilidades de liderazgo.",
    year: "Actualidad",
  },
];
