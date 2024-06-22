import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div className="">
        <img src="https://picoworkers.net/assets/images/frontend/blog/6651ba11b766d1716632081.jpg" />
        <p className="absolute top-11 left-10 text-white text-6xl">
          Earn More 
        </p>

      </div>
      <div>
        <img
          className=""
          src="https://picoworkers.net/assets/images/frontend/blog/666781e622abd1718059494.jpg"
        />
        <p className="absolute top-11 left-10 text-green-500 text-7xl">
          earn coin
        </p>
      </div>
      <div className="relative">
        <img src="https://picoworkers.net/assets/images/frontend/blog/665f67492d4361717528393.jpg" />
        <p className="absolute top-11 left-10 text-white text-6xl">
          invest your time
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;
