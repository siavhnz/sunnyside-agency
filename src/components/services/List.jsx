import { services } from "../../store/services";
import ServiceItem from "./Item";

const ServicesList = () => {
  const colors = ["bg-soft-yellow", "bg-soft-red"];
  return (
    <div className="md:pt-14 lg:pt-0 3xl:mr-auto 3xl:ml-auto max-w-screen-3xl">
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
