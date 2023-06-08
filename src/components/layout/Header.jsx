import Menu from "../menu/Menu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-8 pb-8 px-6 relative md:pl-10 md:pr-12 2xl:mr-auto 2xl:ml-auto max-w-screen-2xl">
      <Logo style="text-white w-32 md:w-44" />
      <Menu />
    </header>
  );
};

export default Header;
