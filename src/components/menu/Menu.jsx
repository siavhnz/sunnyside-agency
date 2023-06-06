import { useState } from "react";
import { ReactComponent as Hambur } from "../../assets/images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button aria-label="open menu" onClick={handleOpenMenu}>
        <Hambur focusable={false} aria-hidden={true} />
      </button>

      <AnimatePresence>
        {isOpen && <MobileMenu handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
