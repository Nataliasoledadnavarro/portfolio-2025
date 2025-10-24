"use client"

import { motion } from "framer-motion"
import type { IconButtonProps } from "@/types/index" 

const IconButton = ({ href, ariaLabel, icon, hovered = true }: IconButtonProps) => {
  const hoverProps = hovered ? { scale: 1.2 } : {}
  const tapProps = hovered ? { scale: 0.9 } : {}

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-primary dark:text-white transition-colors"
      whileHover={hoverProps} 
      whileTap={tapProps} 
      aria-label={ariaLabel}
    >
      {icon}
    </motion.a>
  )
}

export default IconButton
