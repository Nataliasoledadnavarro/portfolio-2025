import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconButton from "@/components/ui/IconButton";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 mt-28">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold dark:text-primary">
              NataliaDev
            </Link>
            <p className="text-sm dark:text-primary mt-2">
              © {new Date().getFullYear()} NataliaDev. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <IconButton
              href="https://github.com/Nataliasoledadnavarro"
              ariaLabel="Github"
              icon={<FaGithub />}
              hovered={false}
            />
            <IconButton
              href="https://www.linkedin.com/in/nataliasoledadnavarro/"
              ariaLabel="Linkedin"
              icon={<FaLinkedin />}
              hovered={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
