import { TimeLineItem } from "@/types";
import { FaLaptopCode, FaReact, FaCode, FaRegHandshake } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbMapStar } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";

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
      "Me capacité en desarrollo web con foco en JavaScript, React y tecnologías frontend.",
    year: "2022",
  },
  {
    side: "left",
    icon: <BsPersonWorkspace className="h-7 w-7 text-primary" />,
    title: "Primera experiencia profesional IT",
    description:
      "Me uní a Eldar como frontend developer, participando en el desarrollo de múltiples plataformas de gestión interna que continúan en producción, y posteriormente en proyectos estratégicos para clientes.",
    year: "2022",
  },
  {
    side: "right",
    icon: <MdGroups2 className="h-7 w-7 text-primary" />,
    title: "Liderazgo técnico",
    description:
      "Lideré el equipo frontend impulsando calidad, buenas prácticas y crecimiento profesional.",
    year: "2024",
  },
  {
    side: "left",
    icon: <FaRegHandshake className="h-7 w-7 text-primary" />,
    title: "Gestión y soporte a cliente",
    description:
      "Colaboré con PMs en la coordinación de proyectos estratégicos y soporte técnico a clientes.",
    year: "2024-2025",
  },
  {
    side: "right",
    icon: <FaCode className="h-7 w-7 text-primary" />,
    title: "Desarrollo de soluciones",
    description:
      "Implementé soluciones para plataformas en producción y optimicé procesos con templates y utilidades reutilizables.",
    year: "2024–2025",
  },
  {
    side: "left",
    icon: <IoSparklesSharp className="h-7 w-7 text-primary" />,
    title: "Desarrollo + IA",
    description:
      "Me sumé a un proyecto fintech donde diseñé workflows con IA para frontend, luego adoptados por otros equipos.",
    year: "2026 - Actualidad",
  },
  {
    side: "right",
    icon: <GiBrain className="h-7 w-7 text-primary" />,
    title: "Diplomatura en IA Generativa",
    description:
      "Especialización en IA Generativa en UTN, enfocada en modelos modernos y aplicaciones prácticas.",
    year: "2026",
  },
  {
    side: "left",
    icon: <TbMapStar className="h-7 w-7 text-primary" />,
    title: "Curso de Diseño UX",
    description:
      "Formación en UX con foco en investigación, prototipado y diseño centrado en usuarios.",
    year: "2026",
  },
  {
    side: "right",
    icon: <LuBrainCircuit className="h-7 w-7 text-primary" />,
    title: "Presente y futuro",
    description:
      "En capacitación constante, escalando proyectos de alto impacto y combinando mi saber con IA para impulsar soluciones cada vez más innovadoras.",
    year: "Actualidad",
  },
];
