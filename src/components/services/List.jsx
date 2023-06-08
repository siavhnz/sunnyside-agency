import { services } from "../../store/services";
import ServiceItem from "./Item";

const ServicesList = () => {
  const colors = ["bg-soft-yellow", "bg-soft-red"];
  return (
    //className="2xl:mr-auto 2xl:ml-auto max-w-screen-2xl"
    <div className="md:pt-14 lg:pt-0">
      {services.map((service, index) => {
        return (
          <ServiceItem
            key={index}
            direction={index % 2 === 1 ? "left" : "right"}
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
