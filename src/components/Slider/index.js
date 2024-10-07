"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CustomSlider({ children, className }) {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={className ?? ""}>
      {children}
    </Slider>
  );
}
