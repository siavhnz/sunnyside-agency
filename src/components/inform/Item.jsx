const InfromItem = ({ mobileImg, desktopImg, title, desc, color }) => {
  return (
    <article className="grid grid-cols-1 grid-rows-1">
      <picture className="col-span-full row-span-full">
        <source media="(max-width:599px)" srcSet={mobileImg} />
        <source media="(min-width:6000px)" srcSet={desktopImg} />
        <img src={mobileImg} alt={title} />
      </picture>
      <div className="col-span-full row-span-full place-self-end pb-14 px-4">
        <h2 className={`text-center text-[1.8rem] font-Fraunces pb-5 capitalize ${color}`}>{title}</h2>
        <p className={`text-center font-Barlow leading-7 ${color}`}>{desc}</p>
      </div>
    </article>
  );
};

export default InfromItem;
