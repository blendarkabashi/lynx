import Heading from "@/components/Heading";
import Section from "@/components/Section";
import React from "react";

const InformationSection = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/assets/information-bg.svg')] py-[55px] desktop:py-[100px]">
      <Section>
        <div className="flex">
          <div>
            <Heading
              className="text-white mb-[30px]"
              title={"The Accursed Mountains"}
              subtitle={"untamed wilderness"}
            />
            <p className="text-white text-[10px] tablet:text-[15px] font-light">
              A range so rugged that legend says it was created by the devil himself, the Accursed Mountains straddle
              the border between Kosovo and Albania. Home to bears, wolves, and lynx, they’re wild, empty, and caked by
              consistent snowfalls rolling in from the nearby Adriatic Sea.
            </p>
          </div>
          <img className="w-full tablet:w-[470px] desktop:w-[800px] ml-[30px]" src="/assets/information-img-1.svg" />
        </div>
        <div className="flex -mt-2">
          <img className="w-full tablet:w-[470px] desktop:w-[800px] mr-[30px]" src="/assets/information-img-2.svg" />
          <div className="desktop:mt-12">
            <Heading
              className="text-white mb-[30px]"
              title={"Deep, light & fluffy"}
              subtitle={"Unparalleled snowfall"}
            />
            <p className="text-white text-[10px] tablet:text-[15px] font-light">
              The unique geographical position of the Accursed Mountains, with 2,500m-plus peaks less than 100km from
              the coast, means we benefit from a maritime snowpack which delivers consistent dumps. It’s not uncommon to
              get 12+ metres in a season here - enough to rival Japan.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default InformationSection;
