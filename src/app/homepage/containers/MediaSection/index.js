import Section from "@/components/Section";
import React from "react";

const MediaSection = () => {
  return (
    <div className="bg-[#070B36] pt-[93px] pb-[97px]">
      <Section className="flex flex-col h-full justify-between">
        <div className="flex flex-row justify-between ">
          {/* Left section (70%) with text on top of the image */}
          <div className="relative flex-1 basis-[70%]">
            {/* Image */}
            <img
              src="/assets/media/snow-magazine.png"
              alt="Snow Magazine Logo"
              className="w-full h-auto"
            />
            {/* Text on top of the image in the top left */}
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-[30px] leading-[35px] text-white font-[900]">
                LYNX IN MEDIA
              </h2>
            </div>
          </div>

          {/* Right section (30%) */}
          <div className="flex-1 basis-[30%] text-white">
            <p className="font-bold">Snow Magazine</p>
            <h2 className="text-lg font-semibold mb-2">
              The Wild Wild East: Cat-Skiing on the Edge of Europe
            </h2>
            <p>
              The Accursed Mountains aren't on many skiers' radar. That could be
              about to change, thanks to a new backcountry skiing operation
              that's just opened in Kosovo.
            </p>
          </div>
        </div>
        {/* Media Cards Section */}
        <div className="grid grid-cols-3  w-full">
          {/* Card 1 */}
          <div className="text-white">
            <img
              src="/assets/media/financial-times.png"
              alt="Financial Times"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="font-bold">Financial Times</p>
            <h5 className="text-lg font-semibold">
              A cat-skiing <br /> adventure in Kosovo
            </h5>
          </div>

          {/* Card 2 */}
          <div className="text-white">
            <img
              src="/assets/media/backdrop-journal.png"
              alt="Backdrop Journal"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="font-bold">Backdrop Journal</p>
            <h5 className="text-lg font-semibold">
              FFS Pod with the Lynx <br /> Freeride Crew
            </h5>
          </div>

          {/* Card 3 */}
          <div className="text-white">
            <img
              src="/assets/media/financial-times.png"
              alt="Condé Nast Traveller"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="font-bold">Condé Nast Traveller</p>
            <h5 className="text-lg font-semibold">
              The best ski <br /> resorts in Europe
            </h5>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MediaSection;
