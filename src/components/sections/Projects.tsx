"use client";

import {projects} from "@/contents/projects";
import {motion} from "framer-motion";
import {staggerContainer} from "@/utils/styles/animations";
import Titles from "@/components/shared/Titles";
import ProjectCard from "@/components/shared/cards/projectCard";

export default function Projects() {
  return (
    <section className="pt-28">
      <div className="container max-w-7xl mx-auto px-4">
        <Titles text={"Proyectos iniciales"} />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
