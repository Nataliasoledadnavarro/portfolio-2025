"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface ChipProps {
  label: string;
  variant?: keyof typeof colorVariants;
}

export const colorVariants = {
  primary:
    "bg-primary/40 text-secondary dark:bg-primary/80 dark:text-secondary dark:font-semibold",
  secondary: "bg-secondary/40 text-secondary dark:text-primary",
  success: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-white",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white",
  danger: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-white",
};

const Chip = ({ label, variant = "primary" }: ChipProps) => {
  return (
    <motion.span
      className={clsx(
        "rounded-full font-medium text-sm px-3 py-1",
        colorVariants[variant]
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  );
};

export default Chip;
