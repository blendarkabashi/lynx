import Section from "@/components/Section";

const ActivityInfo = ({ firstImage, secondImage, title, richtext, color, mobileImage }) => {
  return (
    <div className={`${color} pt-[35px] pb-[50px] tablet:py-[45px] desktop:py-[70px]`}>
      <Section className="flex flex-col tablet:flex-row">
        <img className="hidden tablet:block tablet:w-[260px] desktop:w-[395px] -m-[25px]" src={firstImage} />
        <div className="tablet:px-[30px] tablet:mt-[34px]">
          <h1 className="mb-3 text-[25px] leading-[45px] tablet:text-[30px] desktop:leading-[55px] font-black uppercase text-[#070B36] desktop:text-[45px]">
            {title}
          </h1>
          {richtext}
        </div>
        <img
          className="hidden tablet:block tablet:w-[260px] desktop:w-[395px] tablet:-m-[25px] w-full"
          src={secondImage}
        />
        <img className="block tablet:hidden w-full mt-5" src={mobileImage} />
      </Section>
    </div>
  );
};

export default ActivityInfo;
