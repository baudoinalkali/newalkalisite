import React, { useEffect } from "react";
import Slider from "react-slick";
import HomepageSlide from '../content/testimonials'

const HomeTestimonialSlider = () => {
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
    <div className="">
      <Slider {...settings}>
        {HomepageSlide.homepage.map((props) => (
          <div className="px-4 pb-20 duration-500">
            <div className="group shadow-2xl rounded-md" style={{backgroundColor: `${props.brandColor}`}}>
              <div className="p-10 py-7 bg-white group-hover:bg-opacity-0 duration-500">
              <svg width="45" height="36" className="mb-5 fill-current text-opacity-50" style={{color: `${props.brandColor}`, opacity:".4"}}>
                <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                </path>
              </svg>
                <div className="flex group-hover:hidden">{props.quote}</div>
                <div className="justify-center p-4 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden group-hover:flex" style={{marginTop:"1.8rem", marginBottom:"1.8rem"}}>View Project</div>
              </div>
              <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md h-20">
                <div>
                  <img width="90" src={props.logo} />
                </div>
                <div className="text-white">
                  {props.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeTestimonialSlider;