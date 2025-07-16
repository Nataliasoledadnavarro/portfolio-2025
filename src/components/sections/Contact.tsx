"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { fadeInUp, fadeIn } from "@/utils/animations";
import Titles from "@/utils/Titles";

const contactItems = [
  {
    icon: <FaEnvelope className="dark:text-primary w-5 h-5" />,
    title: "Email",
    content: (
      <a
        href="mailto:nataliasoledadnavarro@gmail.com"
        className="text-gray-800 dark:text-secondary"
      >
        nataliasoledadnavarro@gmail.com
      </a>
    ),
  },
  {
    icon: <FaPhone className="dark:text-primary w-5 h-5" />,
    title: "Teléfono",
    content: (
      <a href="tel:+1161737665" className="text-gray-800 dark:text-secondary">
        11 6173 7665
      </a>
    ),
  },
  {
    icon: <FaWhatsapp className="text-green-500 w-5 h-5" />,
    title: "WhatsApp",
    content: (
      <a
        href="https://wa.me/5491161737665"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-secondary hover:text-green-500"
      >
        Enviar mensaje
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="dark:text-primary w-5 h-5" />,
    title: "Ubicación",
    content: (
      <p className="text-gray-800 dark:text-secondary">
        San Martín, Buenos Aires
      </p>
    ),
  },
];

export default function Contact() {
  return (
    <section className="container max-w-4xl mx-auto min-h-[80vh] pt-28">
      <Titles text={"Contactame"} />
      <motion.div
        className="space-y-8"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <motion.p
          className="text-center dark:text-secondary max-w-xl mx-auto"
          variants={fadeInUp}
        >
          Siempre es un buen momento para crear algo nuevo y formar parte de
          redes que impulsan proyectos. Si tenés una idea o una propuesta,
          ¡charlamos!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
              <div>
                <h3 className="font-semibold dark:text-white">{item.title}</h3>
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
