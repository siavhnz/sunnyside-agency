import { gallery } from "../../store/gallery";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2">
      {gallery.map((item, index) => {
        return (
          <picture key={index}>
            <source media="(max-width:599px)" srcSet={item.mobileImg} />
            <source media="(min-width:600px)" srcSet={item.desktopImg} />
            <img src={item.mobileImg} alt="image for design" />
          </picture>
        );
      })}
    </div>
  );
};

export default Gallery;
