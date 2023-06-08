const Testimonail = ({ name, img, role, text }) => {
  return (
    <article className="flex flex-col justify-center items-center px-1 pb-16 ml-auto mr-auto max-w-md xl:max-w-sm">
      <img src={img} alt={name} className="rounded-[100%] w-[4.5rem]" />
      <p className="font-Barlow pt-8 lg:pt-14 lg:px-2 px-5 text-dark-grayish-blue text-lg leading-8 text-center">
        {text}
      </p>
      <p className="pt-7 lg:pt-16 font-Fraunces text-very-dark-desaturated-blue text-lg">
        {name}
      </p>
      <p className="text-sm font-Barlow text-grayish-blue pt-2">{role}</p>
    </article>
  );
};

export default Testimonail;
