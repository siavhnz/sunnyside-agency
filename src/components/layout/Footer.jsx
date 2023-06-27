import FooterMenu from "../menu/FooterMenu";
import Logo from "./Logo";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";

const Footer = () => {
  return (
    <footer className="py-16 bg-dark-moderate-cyan flex flex-col items-center 3xl:mr-auto 3xl:ml-auto max-w-screen-3xl">
      <Logo style="text-dark-desaturated-cyan w-[10.5rem] pr-2 lg:pt-2 lg:w-[11rem]" />
      <FooterMenu />
      <div className="flex pt-20 lg:mt-2 gap-x-7">
        <a
          href="#"
          aria-label="go to our facebook"
          className="text-dark-desaturated-cyan hover:text-white transition-all duration-700"
        >
          <Facebook aria-hidden={true} focusable={false} />
        </a>
        <a
          href="#"
          aria-label="go to our instagram"
          className="text-dark-desaturated-cyan hover:text-white transition-all duration-700"
        >
          <Instagram aria-hidden={true} focusable={false} />
        </a>
        <a
          href="#"
          aria-label="go to our twitter"
          className="text-dark-desaturated-cyan hover:text-white transition-all duration-700"
        >
          <Twitter aria-hidden={true} focusable={false} />
        </a>
        <a
          href="#"
          aria-label="go to our pinterest"
          className="text-dark-desaturated-cyan hover:text-white transition-all duration-700"
        >
          <Pinterest aria-hidden={true} focusable={false} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
