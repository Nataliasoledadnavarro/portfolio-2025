"use client";

import { newProjects } from "@/contents/newProjects";
import NewProjectCard from "@/components/shared/cards/NewProjectCard";
import { staggerContainer } from "@/utils/styles/animations";
import { motion } from "framer-motion";
import Titles from "@/components/shared/Titles";

export default function NewProjects() {
  return (
    <section className="pt-28">
      <div className="container max-w-7xl mx-auto px-4">
        <Titles text="Proyectos recientes" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {newProjects.map((project) => (
            <NewProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
