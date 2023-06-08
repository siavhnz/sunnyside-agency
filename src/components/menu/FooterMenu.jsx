import FooterMenuItem from "./FooterMenuItem";

const FooterMenu = () => {
  return (
    <ul className="flex gap-x-14 pt-11 lg:pt-10 px-2">
      <FooterMenuItem item="about" />
      <FooterMenuItem item="services" />
      <FooterMenuItem item="projects" />
    </ul>
  );
};

export default FooterMenu;
