import Button from "@/components/Button";
import Section from "@/components/Section";

const ActivityInfo = ({ firstImage, secondImage, title, richtext, color, mobileImage }) => {
  return (
    <div className={`${color} pt-[35px] pb-[50px] tablet:py-[45px] desktop:py-[70px]`}>
      <Section className="flex flex-col tablet:flex-row relative">
        <img className="hidden tablet:block tablet:w-[260px] desktop:w-[395px]" src={firstImage} />
        <div className="tablet:px-[30px] tablet:mt-[34px]">
          <h1 className="mb-3 text-[25px] leading-[45px] tablet:text-[30px] desktop:leading-[55px] font-black uppercase text-[#070B36] desktop:text-[45px]">
            {title}
          </h1>
          {richtext}
        </div>
        <img className="hidden tablet:block tablet:w-[260px] desktop:w-[395px] w-full" src={secondImage} />
        <img className="block tablet:hidden w-full mt-5" src={mobileImage} />
        <Button className="absolute right-[70px] bottom-[20px]" label="Learn More" />
      </Section>
    </div>
  );
};

export default ActivityInfo;
