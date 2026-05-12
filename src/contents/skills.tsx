import { Skills } from "@/types/index";
//Icons
import {
  SiSonarqube,
  SiMui,
  SiJira,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";

import { FaHtml5, FaReact, FaSass, FaGitAlt } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { DiScrum } from "react-icons/di";

import { TbMapStar } from "react-icons/tb";

import { MdAccessibility } from "react-icons/md";

import { GiBrain } from "react-icons/gi";

import { IoSparklesSharp } from "react-icons/io5";

export const skills: Skills[] = [
  {
    name: "HTML",
    icon: <FaHtml5 className="h-7 w-7" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="h-7 w-7" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-7 w-7" />,
  },
  {
    name: "React",
    icon: <FaReact className="h-7 w-7" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="h-7 w-7" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="h-7 w-7" />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui className="h-7 w-7" />,
  },
  {
    name: "Sass",
    icon: <FaSass className="h-7 w-7" />,
  },
  {
    name: "Material UI",
    icon: <SiMui className="h-7 w-7" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-7 w-7" />,
  },
  {
    name: "SonarQube",
    icon: <SiSonarqube className="h-7 w-7" />,
  },
  {
    name: "Jira",
    icon: <SiJira className="h-7 w-7" />,
  },
  {
    name: "Scrum",
    icon: <DiScrum className="h-7 w-7" />,
  },
  {
    name: "UX/UI",
    icon: <TbMapStar className="h-7 w-7" />,
  },
  {
    name: "Accesibilidad Web",
    icon: <MdAccessibility className="h-7 w-7" />,
  },
  {
    name: "IA Generativa",
    icon: <GiBrain className="h-7 w-7" />,
  },
  {
    name: "AI Workflows",
    icon: <IoSparklesSharp className="h-7 w-7" />,
  },
];
