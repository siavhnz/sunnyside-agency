import MenuItem from "./MenuItem";

const FooterMenuItem = ({ item }) => {
  return (
    <MenuItem
      item={item}
      style="text-dark-desaturated-cyan capitalize text-lg font-Barlow hover:text-white transition-all duration-700"
    />
  );
};

export default FooterMenuItem;
