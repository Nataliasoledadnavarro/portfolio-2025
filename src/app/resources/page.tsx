"use client";

import { resources } from "@/contents/resources";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { format, parseISO } from "date-fns";

export default function Resources() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Recursos
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {resources.map((resource, index) => (
          <motion.article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6">
              <motion.h2
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {resource.title}
              </motion.h2>

              <motion.p
                className="text-secondary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {resource.excerpt}
              </motion.p>

              <motion.div
                className="flex items-center gap-4 text-sm text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>{format(parseISO(resource.date), "dd/MM/yyyy")}</span>
                </motion.div>

                <motion.a
                  href={resource.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaExternalLinkAlt className="h-4 w-4" />
                  <span>Ver</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
