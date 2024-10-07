"use client";
import Section from "@/components/Section";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const offers = [
  {
    image: "/assets/offers/4-day-gjergjevica.png",
    title: (
      <>
        7 day <br />
        CAT-SKIING
        <br />
        GJERAVICA
      </>
    ),
    subtitle: "2800€",
  },
  {
    image: "/assets/offers/4-day-hut.png",
    title: (
      <>
        4 day <br />
        CAT-SKIING
        <br />
        GJERAVICA
      </>
    ),
    subtitle: "1500€",
  },
  {
    image: "/assets/offers/7-day-gjergjevica.png",
    title: (
      <>
        7 day <br />
        HUT TO HUT
        <br />
        SKI TOURING
      </>
    ),
    subtitle: "2000€",
  },
  {
    image: "/assets/offers/7-day-hut.png",
    title: (
      <>
        4 day <br />
        HUT TO HUT
        <br />
        SKI TOURING
      </>
    ),
    subtitle: "1200€",
  },
];

const OffersSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#070B36] pt-[67px] pb-[72px]">
      <Section>
        {/* <div className="flex space-x-8 overflow-y-"> */}
        <Slider {...settings} className="flex space-x-8 overflow-y-">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center
                w-[174px] h-[200px]        // Default for phone
                tablet:w-[194px] tablet:h-[222px]   // Tablet size
                desktop:w-[289px] desktop:h-[330px] // Desktop size"
              style={{
                backgroundImage: `url(${offer.image})`,
              }}
            >
              {/* Text on top of the image */}
              <div className="absolute top-6 left-6 text-white text-lg font-semibold">{offer.title}</div>

              <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">{offer.subtitle}</div>

              {/* Icon at the bottom-right */}
              <div className="absolute bottom-2 right-3">
                <img src="/assets/arrow-right.svg" alt="Arrow Icon" />
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </Section>
    </div>
  );
};

export default OffersSection;
