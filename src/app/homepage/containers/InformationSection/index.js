import Heading from "@/components/Heading";
import Section from "@/components/Section";
import React from "react";

const InformationSection = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/assets/information-bg.svg')] py-[55px] desktop:py-[100px]">
      <Section>
        <div className="flex flex-col tablet:flex-row mb-[32px] tablet:mb-0">
          <div>
            <Heading
              className="text-white mb-[13px] tablet:mb-[15px] desktop:mb-[30px]"
              title={"The Accursed Mountains"}
              subtitle={"untamed wilderness"}
            />
            <p className="text-white text-[10px] desktop:text-[15px] font-extralight tracking-tighter desktop:tracking-normal">
              A range so rugged that legend says it was created by the devil himself, the Accursed Mountains straddle
              the border between Kosovo and Albania. Home to bears, wolves, and lynx, they’re wild, empty, and caked by
              consistent snowfalls rolling in from the nearby Adriatic Sea.
            </p>
          </div>
          <img
            className="w-full tablet:w-[470px] desktop:w-[720px] tablet:ml-[20px] desktop:ml-[30px] mt-[22px] tablet:mt-0"
            src="/assets/information/information-img-1.png"
          />
        </div>
        <div className="flex flex-col tablet:flex-row -mt-2">
          <img
            className="order-2 tablet:order-1 w-full tablet:w-[470px] desktop:w-[720px] tablet:mr-[20px] desktop:mr-[30px] mt-[22px] tablet:mt-0"
            src="/assets/information/information-img-2.png"
          />
          <div className="order-1 tablet:order-2 tablet:mt-12">
            <Heading
              className="text-white mb-[13px] tablet:mb-[15px] desktop:mb-[30px]"
              title={"Deep, light & fluffy"}
              subtitle={"Unparalleled snowfall"}
            />
            <p className="text-white text-[10px] desktop:text-[15px] font-extralight tracking-tighter desktop:tracking-normal">
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
