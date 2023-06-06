import MobileMenuItem from "./MobileMenuItem";
import { motion } from "framer-motion";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        exit={{ opacity: 0 }}
        onClick={handleCloseMenu}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black"
      />
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="absolute py-10 right-6 top-[6.65rem] w-[calc(100%_-_3rem)] text-center bg-white px-8 before:content-[''] before:absolute before:-top-[1.45rem] before:right-0 before:border-white before:border-r-[1.5rem] before:border-t-[1.5rem] before:border-t-transparent"
      >
        <ul className="flex flex-col gap-y-7">
          <MobileMenuItem item="about" />
          <MobileMenuItem item="services" />
          <MobileMenuItem item="projects" />
          <li className="self-center">
            <a
              href="#"
              className="uppercase font-Fraunces flex justify-center items-center px-8 py-4 bg-soft-yellow rounded-[3rem]"
            >
              contact
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default MobileMenu;
