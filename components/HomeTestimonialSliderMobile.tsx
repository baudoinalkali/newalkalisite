import React from "react";
import Slider from "react-slick";
import Testimonials from "../content/testimonials";

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

const HomeTestimonialSliderMobile = (props) => {
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
                    {Testimonials.homepage.map((props, idx) => (
                        <div key={idx} className="duration-500">
                            <div
                                className="group rounded-md"
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
                                    <div className="text-lg h-60">{props.quote}</div>
                                </div>
                                <div className="h-24 flex justify-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="delayed-group-hover-hidden">
                                            <img width="90" src={props.logo} alt={props.altText} />
                                        </div>
                                        <div className="pt-4 text-white text-center delayed-group-hover-hidden">
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
        </div>
    );
}

export default HomeTestimonialSliderMobile;