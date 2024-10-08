import Section from "@/components/Section";
import React from "react";

// Component for the desktop/tablet text and image section at the top
const MediaFeature = ({
  imgSrc,
  imgAlt,
  title,
  magazine,
  featureTitle,
  description,
}) => (
  <div className="hidden tablet:grid tablet:grid-cols-3 gap-[30px]">
    <div className="relative col-span-2">
      <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-lg" />
      <div className="absolute top-0 left-0">
        <h2 className="text-[45px] leading-[45px] text-white font-[900]">
          {title}
        </h2>
      </div>
    </div>
    <div className="text-white col-span-1">
      <p className="text-[15px] font-[500]">{magazine}</p>
      <h2 className="text-[25px] font-[900] mb-2">{featureTitle}</h2>
      <p className="text-[15px] font-[300]">{description}</p>
    </div>
  </div>
);

// Component for the mobile version
const MediaFeatureMobile = ({
  imgSrc,
  imgAlt,
  title,
  magazine,
  featureTitle,
  description,
}) => (
  <div className="grid grid-cols-2 tablet:hidden gap-[10px] text-white">
    <div className="relative">
      <h2 className="text-[25px] leading-[25px]  font-[900] mb-4 text-nowrap">
        {title}
      </h2>
      <p className="text-[10px] font-[500]">{magazine}</p>
      <h2 className="text-[15px] font-[900] mb-2">{featureTitle}</h2>
      <p className="text-[8px] font-[300]">{description}</p>
    </div>
    <div>
      <img src={imgSrc} alt={imgAlt} className=" rounded-lg" />
    </div>
  </div>
);

// Component for individual media cards
const MediaCard = ({ imgSrc, imgAlt, magazine, headline }) => (
  <div className="text-white">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-full h-[130px] tablet:h-auto rounded-lg"
    />
    <p className="text-[10px] tablet:text-[15px] font-[500] my-4">{magazine}</p>
    <h5 className="text-[15px] tablet:text-[25px] font-[900]">{headline}</h5>
  </div>
);

const MediaSection = () => {
  return (
    <div className="bg-[#070B36] pt-[93px] pb-[97px]">
      <Section className="flex flex-col h-full justify-between">
        {/* Top Media Feature Section for Desktop/Tablet */}
        <MediaFeature
          imgSrc="/assets/media/snow-magazine.png"
          imgAlt="Snow Magazine Logo"
          title="LYNX IN MEDIA"
          magazine="Snow Magazine"
          featureTitle="The Wild Wild East: Cat-Skiing on the Edge of Europe"
          description="The Accursed Mountains aren't on many skiers' radar. That could be about to change, thanks to a new backcountry skiing operation that's just opened in Kosovo."
        />

        {/* Top Media Feature Section for Mobile */}
        <MediaFeatureMobile
          imgSrc="/assets/media/snow-magazine-phone.png"
          imgAlt="Snow Magazine Logo"
          title="LYNX IN MEDIA"
          magazine="Snow Magazine"
          featureTitle="The Wild Wild East: Cat-Skiing on the Edge of Europe"
          description="The Accursed Mountains aren't on many skiers' radar. That could be about to change, thanks to a new backcountry skiing operation that's just opened in Kosovo."
        />

        {/* Media Cards Section */}
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-[10px] tablet:gap-[30px] w-full mt-8">
          <MediaCard
            imgSrc="/assets/media/financial-times.png"
            imgAlt="Financial Times"
            magazine="Financial Times"
            headline="A cat-skiing adventure in Kosovo"
          />
          <MediaCard
            imgSrc="/assets/media/backdrop-journal.png"
            imgAlt="Backdrop Journal"
            magazine="Backdrop Journal"
            headline="FFS Pod with the Lynx Freeride Crew"
          />
          {/* Third card only visible on tablet and desktop */}
          <div className="hidden tablet:block">
            <MediaCard
              imgSrc="/assets/media/financial-times.png"
              imgAlt="Condé Nast Traveller"
              magazine="Condé Nast Traveller"
              headline="The best ski resorts in Europe"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MediaSection;
