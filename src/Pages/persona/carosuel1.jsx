import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "./partAData";
import { items } from "./partbData";
import { partcData } from "./partcData";

function Carousel1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mx-auto">
      <Carousel responsive={responsive} className="mb-14  m-10">
        {data.map(({ id, img, desc, para }) => {
          return (
            <div key={id}>
              <div className="max-w-sm rounded-lg shadow-lg h-[500px]  bg-white">
                <div className="w-full h-72 overflow-hidden flex items-center justify-center object-cover">
                  <img className="h-full" src={img} alt={desc} />
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">{desc}</p>
                  <p className="text-gray-700 text-base">{para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      {/* <Carousel responsive={responsive} className="mb-14 bg-[red] m-10">
        {items.map(({ id, image, des, text }) => {
          return (
            <div key={id}>
              <div className="max-w-sm rounded-lg shadow-lg h-[500px]  bg-white">
                <div className="w-full h-72 overflow-hidden flex items-center justify-center object-cover">
                  <img className=" h-full " src={image} alt={des} />
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">{des}</p>
                  <p className="text-gray-700 text-base">{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div>
        {partcData.map(({ id, imgUrl, title }) => {
          return (
            <div key={id}>
              <div className="max-w-sm rounded-lg shadow-lg h-[500px]  bg-white">
                <div className="w-full h-72 overflow-hidden flex items-center justify-center object-cover">
                  <img className=" h-full " src={imgUrl} alt={title} />
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Carousel1;
