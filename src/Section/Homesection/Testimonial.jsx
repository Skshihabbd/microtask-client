import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   console.log(index.length);
    //   const totalBullets = this.slides.length; // Get the total number of slides
    //   console.log(totalBullets);
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  return (
    <div>
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper my-16"
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row gap-16 lg:h-72">
              <img
                src="https://media.istockphoto.com/id/1503019927/photo/young-man-holding-invisible-dental-aligners.webp?b=1&s=170667a&w=0&k=20&c=A2IJJyUzLWgawvGi327uLkNX95anaWKX1Ah09TXKckE="
                alt=""
              />
              <div className="lg:space-y-20">
                <h1 className="lg:text-5xl">jhon samuel</h1>
                <p className="text-2xl">
                  review: best experience from this site
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row gap-16 lg:h-72">
              <img
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
              <div className="lg:space-y-20">
                <h1 className="lg:text-5xl">jhon samuel</h1>
                <p className="text-2xl">
                  {" "}
                  review: best experience from this site
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row gap-16 lg:h-72">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
              <div className="lg:space-y-20">
                <h1 className="lg:text-5xl">jhon samuel</h1>
                <p className="text-2xl">
                  review: best experience from this site
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
