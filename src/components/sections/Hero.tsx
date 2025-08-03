"use client";

import Image from "next/image";
//Routes
import { PROJECTS_ROUTE, CONTACT_ROUTE } from "@/lib/routes";
//Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/styles/animations";
//Components
import ProfileImg from "@/../public/img/profile.png";
import SkillsCarousel from "../ui/SkillsCarousel";
import ButtonLink from "../ui/ButtonLink";
import IconButton from "../ui/IconButton";
import ButtonDownload from "../ui/ButtonDownload";

export default function Hero() {
  return (
    <section className="pt-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex justify-center items-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={ProfileImg}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 dark:text-white"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hola, soy{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Natalia Navarro
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer | Líder Técnica| Impulsora de soluciones
            digitales
          </motion.p>
          <SkillsCarousel />
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <IconButton
              href="https://github.com/Nataliasoledadnavarro"
              ariaLabel="Github"
              icon={<FaGithub />}
              hovered={true}
            />
            <IconButton
              href="https://www.linkedin.com/in/nataliasoledadnavarro/"
              ariaLabel="Linkedin"
              icon={<FaLinkedin />}
              hovered={true}
            />

            <ButtonDownload
              file="/img/CV-Natalia-Navarro.pdf"
              icon={<FiDownload />}
              label="Descargar CV"
              download="CV-Natalia-Navarro.pdf"
            />
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <ButtonLink
              variant="primary"
              url={PROJECTS_ROUTE}
              text="Mis Proyectos"
            />
            <ButtonLink
              variant="secondary"
              url={CONTACT_ROUTE}
              text="Contactame"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
