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
    className: "client-slider-container",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 60000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className="">
      <Slider {...settings}>
        {ClientMainPage.map((clientMainPage, idx) => (
          <div key={idx} className="px-4 pb-20 duration-500">
            <div className="w-96 px-4">
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
