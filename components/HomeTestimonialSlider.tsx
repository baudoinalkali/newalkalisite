import React, {useEffect} from "react";
import Slider from "react-slick";

const HomeTestimonialSlider = ({data, title}) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 60000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="mb-6">
        <Slider {...settings} className="gap-x-20">
        <div className="shadow-2xl rounded-md">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10" style={{backgroundColor: "#07433f"}}>
              <div>
                <img src="/images/clients/bobtail/logo.svg"/>
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10" style={{backgroundColor: "#07433f"}}>
              <div>
                <img src="/images/clients/bobtail/logo.svg"/>
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="bg-pink-300 flex px-10 py-7 items-center gap-x-10" style={{backgroundColor: "#F9A8D4"}}>
              <div>
                <img src="/images/clients/carro/logo.svg"/>
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="bg-pink-300 flex px-10 py-7 items-center gap-x-10">
              <div>
                <img src="/images/clients/bobtail/logo.svg"/>
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
        </Slider>
    </div>
  );
}

export default HomeTestimonialSlider;