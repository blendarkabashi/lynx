"use client";
import Section from "@/components/Section";
import CustomSlider from "@/components/Slider";
import { useState } from "react";

const offers = [
  {
    image: "/assets/offers/4-day-gjergjevica.png",
    title: (
      <>
        <span className="font-black">7 day</span> <br />
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
        <span className="font-black">4 day</span> <br />
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
        <span className="font-black">7 day</span> <br />
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
        <span className="font-black">4 day</span> <br />
        HUT TO HUT
        <br />
        SKI TOURING
      </>
    ),
    subtitle: "1200€",
  },
  {
    image: "/assets/offers/7-day-hut.png",
    title: (
      <>
        <span className="font-black">4 day</span> <br />
        HUT TO HUT
        <br />
        SKI TOURING
      </>
    ),
    subtitle: "1200€",
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
  const [nextSlideTriggered, setNextSlideTriggered] = useState(false);
  return (
    <div className="bg-[#070B36] pt-[67px] pb-[72px]">
      <Section className="w-full flex justify-end mb-5">
        <svg
          onClick={() => setNextSlideTriggered(true)}
          className="w-[10px] h-[10px] tablet:w-[20px] tablet:h-[20px] cursor-pointer"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3527 13.6617C13.9027 14.2003 14.7837 14.1957 15.3279 13.6514L19.4758 9.50348C20.4521 8.52717 20.4522 6.94426 19.4758 5.96795L15.3279 1.82004C14.7837 1.27577 13.9027 1.27117 13.3527 1.80971C12.7946 2.35628 12.7899 3.25329 13.3423 3.80566L13.8841 4.34748C14.6163 5.0797 14.0978 6.33168 13.0622 6.33168L2.80283 6.33168C2.0274 6.33168 1.39879 6.96029 1.39879 7.73572C1.39879 8.51115 2.0274 9.13975 2.80283 9.13975L13.0622 9.13975C14.0978 9.13975 14.6163 10.3917 13.8841 11.124L13.3423 11.6658C12.7899 12.2181 12.7946 13.1152 13.3527 13.6617Z"
            fill="#F2BB05"
            stroke="#F2BB05"
          />
        </svg>
      </Section>
      <Section className="!pr-0">
        <CustomSlider
          setNextSlideTriggered={setNextSlideTriggered}
          nextSlideTriggered={nextSlideTriggered}
          className="flex space-x-8 overflow-y-"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="max-w-[175px] tablet:max-w-[193px] desktop:max-w-[290px] h-[200px] tablet:h-[220px] desktop:h-[330px] relative bg-cover bg-center"
            >
              <div
                className="absolute left-0 top-0 right-0 bottom-0 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url(${offer.image})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
              {/* Text on top of the image */}
              <div className="uppercase absolute tablet:top-6 tablet:left-6 left-3 top-3 text-white text-[15px] tablet:text-[20px] desktop:text-[25px] font-semibold">
                {offer.title}
              </div>

              <div className="absolute bottom-3 left-3 tablet:bottom-6 tablet:left-6 text-white text-lg tablet:text-[20px] desktop:text-[25px] font-semibold">
                {offer.subtitle}
              </div>

              {/* Icon at the bottom-right */}
              <div className="absolute bottom-1 right-2 tablet:bottom-1 tablet:right-2 desktop:bottom-2 desktop:right-3">
                <img
                  src="/assets/arrow-right.svg"
                  alt="Arrow Icon"
                  className="h-[9.5px] w-[9.5px] tablet:h-[10.5px] tablet:w-[10.5px] desktop:w-auto desktop:h-auto"
                />
              </div>
            </div>
          ))}
        </CustomSlider>
      </Section>
    </div>
  );
};

export default OffersSection;
