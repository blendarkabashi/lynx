"use client";
import Section from "@/components/Section";
import CustomSlider from "@/components/Slider";

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
  return (
    <div className="bg-[#070B36] pt-[67px] pb-[72px]">
      <Section className="!pr-0">
        <CustomSlider className="flex space-x-8 overflow-y-">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="max-w-[175px] tablet:max-w-[193px] desktop:max-w-[290px] h-[200px] tablet:h-[220px] desktop:h-[330px] relative bg-cover bg-center"
            >
              <div
                className="absolute left-0 top-0 right-0 bottom-0 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url(${offer.image})`,
                }}
              ></div>
              {/* Text on top of the image */}
              <div className="uppercase absolute top-6 left-6 text-white text-[15px] tablet:text-[20px] desktop:text-[25px] font-semibold">
                {offer.title}
              </div>

              <div className="absolute bottom-6 left-6 text-white text-lg tablet:text-[20px] desktop:text-[25px] font-semibold">
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
