import Section from "@/components/Section";
import React from "react";

const PartnerLogo = ({ imgSrc, altText, size }) => {
  const sizes = {
    large: "h-[79px] tablet:h-[165px] desktop:h-[256px]",
    small: "h-[43px] tablet:h-[90px] desktop:h-[140px] w-full",
  };

  //  const imgSizes = {
  //    large: "w-[50px] tablet:w-[100px] desktop:w-[150px]", // Responsive width for large logos
  //    small: "w-[30px] tablet:w-[60px] desktop:w-[90px]", // Responsive width for small logos
  //  };

  return (
    <div
      className={`flex flex-grow justify-center items-center ${sizes[size]} border border-[#F0F0C9] rounded-[10px] tablet:rounded-[20px] desktop:rounded-[20px]`}
    >
      <img
        //className={`${imgSizes[size]}`} // Apply the responsive width classes
        src={imgSrc}
        alt={altText}
      />
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div className="h-[282px] tablet:h-[475px] desktop:h-[700px] bg-[#070B36] pt-[67px] pb-[72px]">
      <Section>
        <h2 className="text-[30px] leading-[35px] tracking-[-0.02em] text-center text-white mb-[30px]">
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
          />
          <PartnerLogo
            imgSrc="/assets/partners/decani.svg"
            altText="Decani"
            size="small"
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
    </div>
  );
};

export default PartnersSection;
