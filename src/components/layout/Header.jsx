import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header className="bg-sky-400 flex justify-between pt-8 px-6">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
