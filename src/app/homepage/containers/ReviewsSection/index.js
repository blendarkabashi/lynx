"use client";
import Section from "@/components/Section";
import CustomSlider from "@/components/Slider";
import Y from "@/components/Icons/Y";
import { useState } from "react";

// ReviewCard component with avatar, name, title on the same row
const ReviewCard = ({ avatarSrc, name, title, review }) => {
  return (
    <div className="group bg-white p-6 rounded-[20px] shadow-md flex flex-col space-y-[11px] desktop:space-y-5 hover:bg-[#070B36] transition-all">
      {/* Avatar, Name, and Title in the same row */}
      <div className="flex items-center space-x-4">
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="w-[43px] tablet:w-[50px] desktop:w-[65px] h-[43px] tablet:h-[50px] desktop:h-[65px] rounded-full object-cover"
        />
        <div>
          <h3 className="group-hover:text-white text-[15px] desktop:text-[20px] font-bold text-[#070B36]">
            {name}
          </h3>
          <p className="group-hover:text-white text-[8px] tablet:text-[10px] desktop:text-[15px] text-[#070B36]">
            {title}
          </p>
        </div>
      </div>
      {/* Review text */}
      <p className="group-hover:text-white text-[8px] tablet:text-[10px] desktop:text-[15px] text-gray-600 leading-tight">
        "{review}"
      </p>
    </div>
  );
};

// ReviewsSection with the background and review cards
const ReviewsSection = () => {
  const reviews = [
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Shaun White",
      title: "Professional Snowboarder.",
      review:
        "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person2.jpeg",
      name: "Torah Bright",
      title: "Professional Snowboarder",
      review:
        "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Travis Rice",
      title: "Professional Snowboarder",
      review:
        "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Travis Rice",
      title: "Professional Snowboarder",
      review:
        "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
  ];

  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.2, // Adjust for smaller screens (like tablets)
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [nextSlideTriggered, setNextSlideTriggered] = useState(false);

  return (
    <div
      className="h-[472px] desktop:h-[732px] bg-cover bg-center pt-[40px] tablet:pt-[46px] desktop:pt-[72px] pb-[60px] desktop:pb-[94px] relative" // Add relative positioning here
      style={{
        backgroundImage: `url(/assets/reviews/reviews-bg.png)`,
      }}
    >
      <Section className="flex flex-col h-full justify-between pr-0">
        <div className="flex w-full justify-between">
          <h2 className="text-[25px] tablet:text-[30px] tablet:leading-[35px] desktop:text-[45px] desktop:leading-[50px] leading-[30px] text-white mb-[30px] font-[900] ">
            WHAT THEY SAY
            <br />
            ABOUT <span className="text-[#004FFF]">LYNX.</span>
          </h2>
          <svg
            onClick={() => setNextSlideTriggered(true)}
            className="h-[10px] w-auto tablet:h-[18px] cursor-pointer"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.0932 18.935L23.6167 16.4114C24.2467 15.7815 23.8005 14.7043 22.9096 14.7043H2.66169C1.23219 14.7043 0.0733398 13.5455 0.0733408 12.116C0.0733412 10.6865 1.23219 9.52763 2.66169 9.52763L22.9096 9.52763C23.8005 9.52763 24.2467 8.45048 23.6167 7.82052L21.0932 5.29697C20.0748 4.27867 20.0835 2.62503 21.1124 1.61743C22.1262 0.624622 23.7503 0.633114 24.7537 1.63647L33.1118 9.99466C34.2834 11.1662 34.2834 13.0657 33.1118 14.2373L24.7537 22.5955C23.7503 23.5988 22.1262 23.6073 21.1124 22.6145C20.0835 21.6069 20.0748 19.9533 21.0932 18.935Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Show slider only on mobile */}
        <CustomSlider
          nextSlideTriggered={nextSlideTriggered}
          setNextSlideTriggered={setNextSlideTriggered}
          customSettings={settings}
          className="slick-reviews flex space-x-8"
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              avatarSrc={review.avatarSrc}
              name={review.name}
              title={review.title}
              review={review.review}
            />
          ))}
        </CustomSlider>
      </Section>
      {/* Add the Y icon at the center bottom */}
      <Y />
    </div>
  );
};

export default ReviewsSection;
