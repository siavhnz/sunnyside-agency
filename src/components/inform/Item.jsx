const InfromItem = ({
  mobileImg,
  desktopImg,
  title,
  desc,
  color,
  direction,
}) => {
  return (
    <article className="grid grid-cols-1 grid-rows-1">
      <picture
        className={`col-span-full row-span-full sm:w-full md:w-auto ${
          direction === "left" ? "justify-self-start" : "justify-self-end"
        }`}
      >
        <source media="(max-width:750px)" srcSet={mobileImg} />
        <source media="(min-width:751px)" srcSet={desktopImg} />
        <img src={mobileImg} alt={title} className="sm:w-full md:w-auto" />
      </picture>
      <div className="col-span-full row-span-full justify-self-center self-end pb-14 px-4 max-w-sm">
        <h2
          className={`text-center text-[1.8rem] font-Fraunces pb-5 capitalize ${color}`}
        >
          {title}
        </h2>
        <p className={`text-center font-Barlow leading-7 ${color}`}>{desc}</p>
      </div>
    </article>
  );
};

export default InfromItem;
