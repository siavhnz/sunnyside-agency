import { motion } from "framer-motion";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="hidden md:block"
    >
      <ul className="flex items-center md:gap-x-12 md:pt-1">
        <DesktopMenuItem item="about" />
        <DesktopMenuItem item="services" />
        <DesktopMenuItem item="projects" />
        <li className="self-center">
          <a
            href="#"
            className="uppercase font-Fraunces flex justify-center items-center px-8 py-4 bg-soft-yellow rounded-[3rem] md:bg-white md:px-7 md:hover:bg-light-blue md:hover:text-white transition-all duration-700"
          >
            contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default DesktopMenu;
