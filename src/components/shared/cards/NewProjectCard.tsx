"use client";

import Image from "next/image";
// styles
import {motion} from "framer-motion";
// icons
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
// types
import type {NewProjectProps} from "@/types/index";
// components
import Chip from "@/components/ui/Chip";

interface Props {
  project: NewProjectProps;
}

const NewProjectCard = ({project}: Props) => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-md shadow-primary dark:shadow-secondary p-3 max-w-xs md:max-w-3xl mx-auto  bg-white dark:bg-dark/40"
      whileHover={{scale: 1.02}}
      transition={{type: "spring", stiffness: 300}}>
      {/* Img */}
      <div className="w-full md:w-1/3 bg-white dark:bg-dark/30 grid place-items-center rounded-xl overflow-hidden">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
        <div className="flex justify-between items-start">
          {project.tag && (
            <Chip label={project.tag} variant="primary" size="md" />
          )}
          <div className="flex items-center gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-white hover:text-primary">
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-white hover:text-primary">
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-black text-gray-800 dark:text-white md:text-2xl text-xl">
          {project.title}
        </h3>

        <p className=" text-sm text-gray-600 dark:text-gray-300 line-clamp-5">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default NewProjectCard;
