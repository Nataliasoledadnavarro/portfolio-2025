"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface ChipProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  className?: string;
}

const colorVariants = {
  primary: "bg-primary/40 text-secondary dark:bg-primary/80 dark:text-secondary dark:font-semibold",
  secondary: "bg-secondary/40 text-secondary dark:text-primary",
  success: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-white",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-white",
  danger: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-white",
};

const sizeVariants = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
};

export  const Chip = ({
  label,
  variant = "primary",
  size = "md",
  className,
}: ChipProps) => {
  return (
    <motion.span
      className={clsx(
        "rounded-full font-medium",
        colorVariants[variant],
        sizeVariants[size],
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  );
};

export default Chip;