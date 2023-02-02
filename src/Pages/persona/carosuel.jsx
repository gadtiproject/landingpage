import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "./partAData";

function Carousel1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mx-auto w-[80%] relative">
      <Carousel responsive={responsive} infinite className="lg:p-[50px] px-[20px]">
        {data.map(({ id, img, desc, para }) => {
          return (
            <div className="rounded-lg shadow-lg p-5 bg-white" key={id}>
              <div className="w-80 h-44 overflow-hidden flex justify-center mb-2">
                <img src={img} alt={desc} className="h-full w-auto" />
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-base leading-6 text-justify">{desc}</p>
              <p className="text-gray-500 text-base leading-6 text-justify">{para}</p>
              </div>
              
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousel1;
