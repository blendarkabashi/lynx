import Section from "@/components/Section";
import React from "react";
import Y from "@/components/Icons/Y"; // Import the Y icon

const PartnerLogo = ({ imgSrc, altText, size, className }) => {
  return (
    <div
      className={`partners ${size} ${className ?? ""}`}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
      aria-label={altText}
    ></div>
  );
};

const PartnersSection = () => {
  return (
    <div className="bg-[#070B36] pt-[67px] pb-[70px] tablet:pb-[100px] relative">
      {/* Add relative positioning here */}
      <Section>
        <h2 className="text-[25px] leading-[20px] tablet:text-[30px] tablet:leading-[35px] desktop:text-[45px] desktop:leading-[54px] tracking-[-0.02em] text-center text-white mb-[30px] font-[900]">
          OUR PARTNERS
        </h2>

        {/* First row with different gap sizes for mobile, tablet, and desktop */}
        <div className="flex flex-row justify-between w-full gap-[8px] tablet:gap-[18px] desktop:gap-[40px]">
          <PartnerLogo
            imgSrc="/assets/partners/volcom.svg"
            altText="Volcom"
            size="large"
          />
          <PartnerLogo
            imgSrc="/assets/partners/nitro.svg"
            altText="Nitro"
            size="large"
          />
        </div>

        {/* Second row with different gap sizes for mobile, tablet, and desktop */}
        <div className="flex flex-row justify-between w-full gap-[10px] tablet:gap-[22px] desktop:gap-[33px] mt-[39px]">
          <PartnerLogo
            imgSrc="/assets/partners/dakine.svg"
            altText="Dakine"
            size="small"
          />
          <PartnerLogo
            imgSrc="/assets/partners/juniku.svg"
            altText="Juniku"
            size="small"
            className="smaller"
          />
          <PartnerLogo
            imgSrc="/assets/partners/decani.svg"
            altText="Decani"
            size="small"
            className="smaller"
          />
          <PartnerLogo
            imgSrc="/assets/partners/better-travel.svg"
            altText="Better Travel"
            size="small"
          />
          <PartnerLogo
            imgSrc="/assets/partners/grand-gjeravica.svg"
            altText="Grand Gjeravica"
            size="small"
          />
        </div>
      </Section>
      {/* Add the Y icon at the center bottom */}
      <Y bodyColor={"white"} />
    </div>
  );
};

export default PartnersSection;
