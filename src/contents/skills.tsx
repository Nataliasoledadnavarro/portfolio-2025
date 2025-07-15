import { Skills } from "@/types/index";
//Icons
import { SiSonarqube, SiBulma, SiMui, SiIonic, SiJira } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaAngular,
  FaGitAlt,
  FaGitlab,
  FaGithub,
  FaJenkins,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const skills: Skills[] = [
  {
    name: "HTML",
    icon: <FaHtml5 className="h-7 w-7" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="h-7 w-7" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="h-7 w-7" />,
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
    name: "Sass",
    icon: <FaSass className="h-7 w-7" />,
  },
  {
    name: "Bulma",
    icon: <SiBulma className="h-7 w-7" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="h-7 w-7" />,
  },
  {
    name: "Material UI",
    icon: <SiMui className="h-7 w-7" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="h-7 w-7" />,
  },
  {
    name: "Ionic",
    icon: <SiIonic className="h-7 w-7" />,
  },
  {
    name: "Angular",
    icon: <FaAngular className="h-7 w-7" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-7 w-7" />,
  },
  {
    name: "GitLab",
    icon: <FaGitlab className="h-7 w-7" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-7 w-7" />,
  },
  {
    name: "SonarQube",
    icon: <SiSonarqube className="h-7 w-7" />,
  },
  {
    name: "Jenkins",
    icon: <FaJenkins className="h-7 w-7" />,
  },
  {
    name: "Jira",
    icon: <SiJira className="h-7 w-7" />,
  },
];
