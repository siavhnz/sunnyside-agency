import Hero from "../components/Hero";
import InformsList from "../components/inform/List";
import Layout from "../components/layout/Layout";
import ServicesList from "../components/services/List";

const Sunnyday = () => {
  return (
    <Layout>
      <Hero />
      <ServicesList />
      <InformsList />
    </Layout>
  );
};

export default Sunnyday;
