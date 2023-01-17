 import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";
import { data }  from './partAData'

function Carousel1() {
  //  const responsive = {
  //    superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //      breakpoint: { max: 4000, min: 3000 },
  //      items: 6,
  //    },
  //    desktop: {
  //      breakpoint: { max: 3000, min: 1024 },
  //      items: 4,
  //    },
  //    tablet: {
  //      breakpoint: { max: 1024, min: 464 },
  //      items: 3,
  //    },
  //    mobile: {
  //      breakpoint: { max: 464, min: 0 },
  //      items: 1,
  //      partialVisibilityGutter: 110,
  //    },
  //  };

  return (
    <div>
      <div className="">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          autoplay
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.map((items) => (
            <div key={items.id} className="grid justify-center items-center place-items-center w-[500px]">
              <img src={items.img} alt="images" className="w-[200px] h-[100px] object-fit"/>
              <p className="w-[300px]">{items.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carousel1;