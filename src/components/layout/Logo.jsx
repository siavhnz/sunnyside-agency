import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

const Logo = ({ style }) => {
  return (
    <div className={style}>
      <LogoIcon />
    </div>
  );
};

export default Logo;
