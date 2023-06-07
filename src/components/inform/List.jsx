import { informs } from "../../store/informs";
import InformItem from "./Item";

const InformsList = () => {
  const colors = ["text-dark-desaturated-cyan", "text-dark-blue"];
  return (
    <div>
      {informs.map((inform, index) => {
        return (
          <InformItem
            color={colors[index]}
            key={index}
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
