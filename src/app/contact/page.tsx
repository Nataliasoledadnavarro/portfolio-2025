"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { fadeInUp, fadeIn, slideInLeft } from "@/utils/animations";
import { ContactItem } from "@/types/index";

const contactItems: ContactItem[] = [
  {
    icon: <FaEnvelope className="h-6 w-6 text-primary" />,
    title: "Email",
    content: (
      <a
        href="mailto:nataliasoledadnavarro@gmail.com"
        className="text-secondary hover:text-primary"
      >
        nataliasoledadnavarro@gmail.com
      </a>
    ),
  },
  {
    icon: <FaPhone className="h-6 w-6 text-primary" />,
    title: "Teléfono",
    content: (
      <a href="tel:+1161737665" className="text-secondary hover:text-primary">
        11 6173 7665
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="h-6 w-6 text-primary" />,
    title: "Ubicación",
    content: (
      <p className="text-secondary">San Martín, Buenos Aires, Argentina</p>
    ),
  },
];
export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInUp}>
        Contactame
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">¿Charlamos?</h2>
            <p className="text-secondary">
              Siempre es un buen momento para crear algo nuevo y formar parte de
              redes que impulsan proyectos.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col justify-center items-center min-h-[400px] space-y-4">
          <motion.a
            href="https://wa.me/5491161737665"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaWhatsapp className="text-green-500 text-[160px]" />
          </motion.a>
          <p className="text-lg text-green-500 font-medium">
            Contactame por WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
