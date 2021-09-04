import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
      <button onClick={onClick} className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg hover:bg-alkaligrey-300">
        <svg className="h-full w-full text-alkaligrey-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
        </svg>
      </button>
    </div>
  );
}

const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute inset-y-0 left-0 lg:flex lg:items-center z-10">
      <button onClick={onClick} className="focus:outline-none mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg hover:bg-alkaligrey-300">
        <svg className="h-full w-full text-alkaligrey-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
        </svg>
      </button>
    </div>
  );
}

const DemoSlider = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
  };

  return (
    <div className="px-7">
      <div className="max-w-7xl m-auto shadow-2xl rounded-md bg-white">
        <Slider {...settings}>
          {props.children}
        </Slider>
      </div>
    </div>
  );
}

export default DemoSlider;