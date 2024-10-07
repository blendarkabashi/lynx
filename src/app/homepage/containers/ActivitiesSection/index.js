import ActivityInfo from "./ActivityInfo";

const { default: Section } = require("@/components/Section");

const ActivitiesSection = () => {
  let activities = [
    {
      title: "Cat Skiing",
      firstImage: "/assets/activities/cat-skiing-1.png",
      secondImage: "/assets/activities/cat-skiing-2.png",
      mobileImage: "/assets/activities/cat-skiing-mobile.png",
      color: "bg-white",
      richtext: (
        <p className="text-[10px] font-light text-[#070B36] leading-[15px] desktop:leading-[25px] tablet:tracking-normal tracking-tighter desktop:text-[15px]">
          One of the fastest-growing destinations for cat-skiing in the world, Kosovo has a lot to offer. With vast,
          untouched areas of terrain, our guests never encounter another group while skiing. Experience the thrill of
          skiing in Europe's emerging backcountry, where <span className="uppercase font-black">pristine powder</span>{" "}
          and breathtaking landscapes await. The <span className="uppercase font-black">untouched snow</span> and
          stunning vistas create the perfect backdrop for an unforgettable skiing adventure, allowing you to immerse
          yourself fully in this <span className="uppercase font-black">winter wonderland</span>.
        </p>
      ),
    },
    {
      title: "Ski Touring",
      firstImage: "/assets/activities/ski-touring-1.png",
      secondImage: "/assets/activities/ski-touring-2.png",
      mobileImage: "/assets/activities/ski-touring-mobile.png",
      color: "bg-[#F0F0C9]",
      richtext: (
        <p className="text-[10px] font-light text-[#070B36] leading-[15px] desktop:leading-[25px] tablet:tracking-normal tracking-tighter desktop:text-[15px]">
          There is no better way to explore the Accursed Mountains during the winter than to join us on a{" "}
          <span className="uppercase font-black">
            Ski Touring / Splitboarding mission; a hut-to-hut adventure through three countries
          </span>
          —Kosovo, Albania, and Montenegro—offering unreal skiing and breathtaking scenery. Experience the thrill of the
          mountains as you carve through untouched snow, surrounded by stunning landscapes that will leave you in awe.
        </p>
      ),
    },
  ];
  return (
    <>
      {activities.map((activity) => (
        <ActivityInfo
          color={activity.color}
          title={activity.title}
          firstImage={activity.firstImage}
          secondImage={activity.secondImage}
          mobileImage={activity.mobileImage}
          richtext={activity.richtext}
        />
      ))}
    </>
  );
};

export default ActivitiesSection;
