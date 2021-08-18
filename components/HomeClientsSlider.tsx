import React, { useEffect } from "react";
import Slider from "react-slick";
import HomepageSlide from "../content/testimonials";
import ClientCard from "./Clients/ClientCard";
import ClientMainPage from "../content/clientPages/clientMainPage";
import { useState } from "react";
import { useRef } from "react";

const HomeClientsSlider = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 20000,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {ClientMainPage.map((clientMainPage, idx) => (
          <div key={idx} className="px-4 pb-20 duration-500">
            <div className="w-96">
              <ClientCard
                name={clientMainPage.name}
                backgroundColor={clientMainPage.backgroundColor}
                backgroundImage={clientMainPage.backgroundImage}
                slug={clientMainPage.slug}
                industry={clientMainPage.industry}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeClientsSlider;
