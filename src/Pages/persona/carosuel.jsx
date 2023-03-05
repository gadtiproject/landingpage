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
    <div className="mx-auto h-[50%] relative">
      <Carousel responsive={responsive}>
        {data.map(({ id, img, desc, para, desc1 }) => {
          return (
            <div
              className="place-items-center justify-center items-center"
              key={id}
            >
              <div className="grid items-center justify-center">
                <div className="w-[300px] h-44 overflow-hidden flex justify-center items-center mb-2">
                  <img src={img} alt={para} className="h-full w-auto" />
                </div>
                <p className="dark:text-gray-300 text-gray-500 text-base leading-8 text-justify lg:w-full w-[300px]">
                  {desc1}
                </p>
              </div>
              <div className="mx-[30px] p-5">
                <p className="text-gray-500 text-base leading-8 text-justify">
                  {desc}
                </p>
                <p className="text-gray-500 text-base leading-8 text-justify">
                  {para}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousel1;
