import { informs } from "../../store/informs";
import InformItem from "./Item";

const InformsList = () => {
  const colors = ["text-dark-desaturated-cyan", "text-dark-blue"];
  return (
    <div className="md:grid md:grid-cols-2  2xl:mr-auto 2xl:ml-auto max-w-screen-2xl">
      {informs.map((inform, index) => {
        return (
          <InformItem
            color={colors[index]}
            key={index}
            direction={index % 2 === 1 ? "left" : "right"}
            mobileImg={inform.mobileImg}
            desktopImg={inform.desktopImg}
            title={inform.title}
            desc={inform.description}
          />
        );
      })}
    </div>
  );
};

export default InformsList;
