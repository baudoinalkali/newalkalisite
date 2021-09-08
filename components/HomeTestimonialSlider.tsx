import React from "react";
import Slider from "react-slick";
import HomepageSlide from "../content/testimonials";

const HomeTestimonialSlider = () => {
  const settings = {
    infinite: true,
    className: "testimonial-slider-container",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 60000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 980,
        settings: {
          speed: 40000,
          infinite: true,
        },
      },
    ],
  };

  const delayShowing = () => {
    setTimeout(() => {
      const hiddenItems = document.querySelectorAll(
        `.delayed-group-hover-hidden`
      );
      const shownItems = document.querySelectorAll(`.delayed-group-hover-flex`);
      hiddenItems.forEach((item) => item.classList.add("group-hover:hidden"));
      shownItems.forEach((item) => item.classList.add("group-hover:flex"));
    }, 500);
  };
  const delayHiding = () => {
    const hiddenItems = document.querySelectorAll(
      `.delayed-group-hover-hidden`
    );
    const shownItems = document.querySelectorAll(`.delayed-group-hover-flex`);
    hiddenItems.forEach((item) => item.classList.remove("group-hover:hidden"));
    shownItems.forEach((item) => item.classList.remove("group-hover:flex"));
  };

  return (
    <div className="bg-alkaligrey-300 z-0">
      <Slider {...settings}>
        {HomepageSlide.homepage.map((props, idx) => (
          <div key={idx} className="duration-500">
            <div
              className="group rounded-md"
              onMouseEnter={delayShowing}
              onMouseLeave={delayHiding}
              style={{
                backgroundColor: `${props.brandColor}`,
                borderTopLeftRadius: ".575rem",
                borderTopRightRadius: ".575rem",
              }}
            >
              <div className="p-10 py-7 bg-white duration-500 rounded-t-md">
                <svg
                  width="45"
                  height="36"
                  className="mb-5 fill-current text-opacity-50"
                  style={{ color: `${props.brandColor}`, opacity: ".4" }}
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <div className="text-lg h-48">{props.quote}</div>
              </div>
              <div className="h-20 flex justify-center">
                <div className="flex justify-center gap-x-10 items-center px-10">
                  <div className="delayed-group-hover-hidden">
                    <img width="90" src={props.logo} alt={props.altText} />
                  </div>
                  <div className="text-white delayed-group-hover-hidden">
                    {props.name}
                  </div>
                  <a href={`/clients/${props.slug}`}>
                    <div className="justify-center py-3 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden delayed-group-hover-flex delay-500">
                      View Project
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeTestimonialSlider;

