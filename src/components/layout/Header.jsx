import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header className="flex justify-between pt-8 pb-8 px-6 relative">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
