import { services } from "../../store/services";
import ServiceItem from "./Item";

const ServicesList = () => {
  const colors = ["bg-soft-yellow", "bg-soft-red"];
  return (
    <div>
      {services.map((service, index) => {
        return (
          <ServiceItem
            key={index}
            color={colors[index]}
            mobileImg={service.mobileImg}
            desktopImg={service.desktopImg}
            title={service.title}
            desc={service.description}
          />
        );
      })}
    </div>
  );
};

export default ServicesList;
