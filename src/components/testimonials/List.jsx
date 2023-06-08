import Testimonail from "./Item";
import { testimonials } from "../../store/testimonials";

const Testimonials = () => {
  return (
    <div>
      <h2 className="py-16 text-center font-Fraunces text-grayish-blue tracking-[0.275rem] uppercase">client testimonials</h2>
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
  );
};

export default Testimonials;
