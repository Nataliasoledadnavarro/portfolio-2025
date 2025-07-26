"use client";

import { motion } from "framer-motion";
import type { ButtonDownloadProps } from "@/types/index";

const ButtonDownload = ({
  file,
  icon,
  label = "Descargar archivo",
  download = "descarga.pdf",
}: ButtonDownloadProps) => {
  const hoverProps = { scale: 1.2 };
  const tapProps = { scale: 0.9 };

  return (
    <motion.a
      href={file}
      download={download}
      className="text-2xl hover:text-primary dark:text-white  transition-colors"
      whileHover={hoverProps}
      whileTap={tapProps}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

export default ButtonDownload;
