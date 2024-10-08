import Section from "@/components/Section";
import CustomSlider from "@/components/Slider";
import React from "react";

// ReviewCard component with avatar, name, title on the same row
const ReviewCard = ({ avatarSrc, name, title, review }) => {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-md flex flex-col space-y-[11px] desktop:space-y-5">
      {/* Avatar, Name, and Title in the same row */}
      <div className="flex items-center space-x-4">
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="w-[43px] tablet:w-[50px] desktop:w-[65px] h-[43px] tablet:h-[50px] desktop:h-[65px] rounded-full object-cover"
        />
        <div>
          <h3 className="text-[15px] desktop:text-[20px] font-bold text-[#070B36]">{name}</h3>
          <p className="text-[8px] tablet:text-[10px] desktop:text-[15px] text-[#070B36]">{title}</p>
        </div>
      </div>
      {/* Review text */}
      <p className="text-[8px] tablet:text-[10px] desktop:text-[15px] text-gray-600 leading-tight">"{review}"</p>
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
      review: "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person2.jpeg",
      name: "Torah Bright",
      title: "Professional Snowboarder",
      review: "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Travis Rice",
      title: "Professional Snowboarder",
      review: "Lorem ipsum dolor sit amet, lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
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

  return (
    <div
      className="h-[472px] desktop:h-[732px] bg-cover bg-center pt-[40px] tablet:pt-[46px] desktop:pt-[72px] pb-[60px] desktop:pb-[94px]"
      style={{
        backgroundImage: `url(/assets/reviews/reviews-bg.png)`,
      }}
    >
      <Section className="flex flex-col h-full justify-between pr-0">
        <h2 className="text-[30px] leading-[35px] text-white mb-[30px] font-[900] ">
          WHAT THEY SAY
          <br />
          ABOUT <span className="text-[#004FFF]">LYNX.</span>
        </h2>

        {/* Show slider only on mobile */}
        <CustomSlider customSettings={settings} className="flex space-x-8">
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
    </div>
  );
};

export default ReviewsSection;
