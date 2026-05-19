"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { fadeInUp, fadeIn } from "@/utils/styles/animations";
import Titles from "@/components/shared/Titles";

const contactItems = [
  {
    icon: <FaEnvelope className="dark:text-primary w-5 h-5" />,
    title: "Email",
    content: (
      <a
        href="mailto:nataliasoledadnavarro@gmail.com"
        className="text-gray-800 dark:text-primary hover:underline"
      >
        nataliasoledadnavarro@gmail.com
      </a>
    ),
  },
  {
    icon: <FaPhone className="dark:text-primary w-5 h-5" />,
    title: "Teléfono",
    content: (
      <a
        href="tel:+1161737665"
        className="text-gray-800 dark:text-primary hover:underline"
      >
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
        className="text-gray-800 dark:text-primary hover:text-green-500 transition-colors"
      >
        Enviar mensaje
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="dark:text-primary w-5 h-5" />,
    title: "Ubicación",
    content: (
      <p className="text-gray-800 dark:text-primary">
        San Martín, Buenos Aires
      </p>
    ),
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá más tarde.",
      );
    }
  };

  const isLoading = status === "loading";

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
          className="text-center dark:text-primary max-w-xl mx-auto"
          variants={fadeInUp}
        >
          Siempre es un buen momento para crear algo nuevo y formar parte de
          redes que impulsan proyectos. Si tenés una idea o una propuesta,
          ¡charlamos!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Canales de comunicación */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-lg font-semibold dark:text-white">
              Otros canales
            </h3>
            <div className="space-y-6">
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
                    <h4 className="font-semibold dark:text-white text-sm">
                      {item.title}
                    </h4>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold dark:text-white mb-6">
              Enviame un mensaje
            </h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <FiCheck className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <p className="dark:text-white font-semibold">
                    ¡Mensaje enviado!
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Te voy a responder a la brevedad.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm dark:text-primary underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium dark:text-white mb-1.5"
                  >
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-100 dark:bg-white/8 dark:text-white border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium dark:text-white mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-100 dark:bg-white/8 dark:text-white border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium dark:text-white mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Contame de qué se trata..."
                    required
                    rows={4}
                    disabled={isLoading}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-gray-100 dark:bg-white/8 dark:text-white border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <FiAlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={
                    isLoading || !form.name || !form.email || !form.message
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-dark font-semibold py-3 px-6 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
