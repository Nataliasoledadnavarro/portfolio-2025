"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ButtonLinkProps } from "@/types/index";

const ButtonLink = ({ variant = "primary", url, text }: ButtonLinkProps) => {
  const buttonClasses =
    variant === "secondary"
      ? "bg-secondary text-primary  hover:bg-secondary/90"
      : "bg-primary text-secondary font-semibold hover:bg-primary/90";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={url}
        className={`inline-block w-full md:w-auto px-8 py-3 rounded-lg transition-colors ${buttonClasses}`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default ButtonLink;
