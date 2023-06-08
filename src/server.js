import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      testimonial: Model,
    },

    seeds(server) {
      server.create("testimonial", {
        name: "Emily R.",
        img: "/images/image-emily.jpg",
        role: "Marketing Director",
        text: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      });
      server.create("testimonial", {
        name: "Thomas S.",
        img: "/images/image-thomas.jpg",
        role: "Chief Operating Officer",
        text: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      });
      server.create("testimonial", {
        name: "Jennie F.",
        img: "/images/image-jennie.jpg",
        role: "Business Owner",
        text: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/testimonials", (schema) => {
        return schema.testimonials.all();
      });
    },
  });

  return server;
}
