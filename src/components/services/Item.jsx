const ServiceItem = ({ mobileImg, desktopImg, title, desc, color }) => {
  return (
    <article className="mb-16">
      <picture>
        <source media="(max-width:599px)" srcSet={mobileImg} />
        <source media="(min-width:600px)" srcSet={desktopImg} />
        <img src={mobileImg} alt={title} />
      </picture>
      <div className="px-7 pt-16 leading-10">
        <h2 className="text-center font-Fraunces text-[2rem] text-very-dark-desaturated-blue">
          {title}
        </h2>
        <p className="text-center font-Barlow pt-5 text-[1.1rem] leading-[1.9rem] text-very-dark-grayish-blue">
          {desc}
        </p>
      </div>
      <div className="pt-8 flex justify-center">
        <a className="text-center font-Fraunces uppercase tracking-wider text-very-dark-desaturated-blue flex flex-col">
          <span>learn more</span>
          <span
            className={`h-2 -ml-2 -mr-2 -mt-2 rounded-lg ${color} opacity-30 -z-10`}
          ></span>
        </a>
      </div>
    </article>
  );
};

export default ServiceItem;
