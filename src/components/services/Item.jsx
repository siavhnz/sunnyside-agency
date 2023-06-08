const ServiceItem = ({
  mobileImg,
  desktopImg,
  title,
  desc,
  color,
  direction,
}) => {
  return (
    <article className="mb-14 md:grid md:grid-cols-2 lg:mb-0">
      <picture
        className={`md:flex md:items-center md:justify-start ${
          direction === "right" ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <source media="(max-width:750px)" srcSet={mobileImg} />
        <source media="(min-width:751px)" srcSet={desktopImg} />
        <img
          src={mobileImg}
          alt={title}
          className="md:p-4 lg:p-0 sm:w-full md:w-auto"
        />
      </picture>
      <div
        className={`px-7 pt-16 text-center lg:text-left leading-10 lg:gap-y-6 lg:max-w-[28.5rem] lg:leading-[3rem] lg:p-0 lg:flex lg:flex-col lg:justify-center md:justify-self-center ${
          direction === "right"
            ? "md:-order-1 xl:justify-self-end xl:mr-24"
            : "xl:justify-self-start xl:ml-28"
        }`}
      >
        <h2 className=" font-Fraunces text-[2rem] xl:text-[2.6rem] text-very-dark-desaturated-blue">
          {title}
        </h2>
        <p className="font-Barlow pt-5 lg:pt-0 text-[1.1rem] leading-[1.9rem] text-very-dark-grayish-blue">
          {desc}
        </p>
        <div className="pt-6 flex justify-center lg:justify-start lg:pl-1 lg:pt-2">
          <a className="font-Fraunces uppercase tracking-wider text-very-dark-desaturated-blue flex flex-col group hover:cursor-pointer">
            <span className="leading-10">learn more</span>
            <span
              className={`h-2 -ml-2 -mr-2 -mt-2 lg:-mt-4 rounded-lg ${color} opacity-30 -z-10 group-hover:opacity-100 transition-all duration-700`}
            ></span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceItem;
