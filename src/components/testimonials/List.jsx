import Testimonail from "./Item";
import { testimonials } from "../../store/testimonials";

const Testimonials = () => {
  return (
    <div className="">
      <h2 className="py-16 xl:pt-40 xl:text-xl xl:tracking-[0.35rem] pb-20 text-center font-Fraunces text-grayish-blue tracking-[0.275rem] uppercase">
        client testimonials
      </h2>
      <div className="lg:flex lg:mr-auto lg:ml-auto max-w-[71.25rem]">
        {testimonials.map((item, index) => {
          return (
            <Testimonail
              key={index}
              name={item.name}
              role={item.role}
              text={item.text}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
