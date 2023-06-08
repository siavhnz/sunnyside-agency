import DesktopHeaderImg from "../assets/images/desktop/image-header.jpg";
import MobileHeaderImg from "../assets/images/mobile/image-header.jpg";
import { ReactComponent as ArrowDown } from "../assets/images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="-mt-[5.6rem] grid grid-cols-1 grid-rows-1 md:-mt-[7.75rem]  2xl:mr-auto 2xl:ml-auto max-w-screen-2xl">
      <picture className="col-span-full row-span-full mr-auto ml-auto">
        <source srcSet={MobileHeaderImg} media="(max-width: 750px)" />
        <source srcSet={DesktopHeaderImg} media="(min-width: 751px)" />
        <img alt="we are creative" src={MobileHeaderImg} />
      </picture>
      <div className="col-span-full row-span-full place-self-center flex flex-col gap-y-12 items-center xl:-mt-32 xl:gap-y-24">
        <h1 className="uppercase text-white font-Fraunces text-[2.5rem] leading-[3rem] pt-2 text-center tracking-[0.5rem] xl:text-6xl xl:pt-0">
          we are creatives
        </h1>
        <ArrowDown aria-hidden={true} focusable={false} />
      </div>
    </div>
  );
};

export default Hero;
