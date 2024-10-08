"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";

export default function CustomSlider({
  nextSlideTriggered,
  setNextSlideTriggered,
  children,
  className,
  customSettings,
}) {
  // Use useRef to get access to the Slider component instance
  const sliderRef = useRef(null);

  useEffect(() => {
    if (nextSlideTriggered) {
      // Call slickNext to go to the next slide
      sliderRef.current.slickNext();
      setNextSlideTriggered(false); // Reset trigger
    }
  }, [nextSlideTriggered, setNextSlideTriggered]);

  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 2.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (customSettings) settings = customSettings;

  return (
    // Pass the ref to the Slider component to get access to its methods
    <Slider {...settings} className={className ?? ""} ref={sliderRef}>
      {children}
    </Slider>
  );
}
