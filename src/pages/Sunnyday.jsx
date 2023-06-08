import Hero from "../components/Hero";
import Gallery from "../components/gallery/Gallery";
import InformsList from "../components/inform/List";
import Layout from "../components/layout/Layout";
import ServicesList from "../components/services/List";
import Testimonials from "../components/testimonials/List";

const Sunnyday = () => {
  return (
    <Layout>
      <Hero />
      <ServicesList />
      <InformsList />
      <Testimonials />
      <Gallery />
    </Layout>
  );
};

export default Sunnyday;
