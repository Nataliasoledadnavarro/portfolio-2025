import Image from "next/image";
// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
//Styles
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/styles/animations";
//Components
import Chip from "@/components/ui/Chip";
import { ProjectCardProps } from "@/types/index";

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  return (
    <motion.article
      key={project.title}
      className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-4 md:p-6 w-full"
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 md:h-64 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <motion.h3
        className="text-lg md:text-xl font-semibold mb-2 dark:text-white"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {project.title}
      </motion.h3>
      <motion.p
        className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-4 md:line-clamp-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.description}
      </motion.p>
      <motion.div
        className="flex justify-between items-center flex-wrap gap-2 md:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} variant="secondary" />
          ))}
        </div>
        <div className="flex gap-3 md:gap-4">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 dark:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-5 w-5" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 dark:text-primary transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="h-5 w-5" />
            <span>Ver sitio</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.article>
  );
}
