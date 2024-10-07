import Section from "@/components/Section";
import React from "react";

// ReviewCard component with avatar, name, title on the same row
const ReviewCard = ({ avatarSrc, name, title, review }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col space-y-6 flex-1">
      {/* Avatar, Name, and Title in the same row */}
      <div className="flex items-center space-x-4">
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold text-[#070B36]">{name}</h3>
          <p className="text-sm text-[#070B36]">{title}</p>
        </div>
      </div>
      {/* Review text */}
      <p className="text-gray-600 text-sm leading-tight">{review}</p>
    </div>
  );
};

// ReviewsGrid component, all cards in one row on all screens
const ReviewsGrid = () => {
  const reviews = [
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Shaun White",
      title: "Professional Snowboarder.",
      review:
        "Lorem ipsum dolor sit amet,  lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person2.jpeg",
      name: "Torah Bright",
      title: "Professional Snowboarder",
      review:
        "Lorem ipsum dolor sit amet,  lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
    {
      avatarSrc: "/assets/reviews/person1.jpeg",
      name: "Traivs Rice",
      title: "Professional Snowboarder",
      review:
        "Lorem ipsum dolor sit amet,  lobortis adipiscing elit. Maecenas lobortis nisi at est olutpat.",
    },
  ];

  return (
    <div className="flex space-x-6">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          avatarSrc={review.avatarSrc}
          name={review.name}
          title={review.title}
          review={review.review}
        />
      ))}
    </div>
  );
};

// ReviewsSection with the background and review cards
const ReviewsSection = () => {
  return (
    <div
      className="h-[472px] desktop:h-[732px] bg-cover bg-center pt-[40px] tablet:pt-[46px] desktop:pt-[72px] pb-[60px] desktop:pb-[94px]"
      style={{
        backgroundImage: `url(/assets/reviews/reviews-bg.png)`,
      }}
    >
      <Section className="flex flex-col h-full justify-between">
        <h2 className="text-[30px] leading-[35px] text-white mb-[30px] font-[900] ">
          WHAT THEY SAY
          <br />
          ABOUT <span className="text-[#004FFF]">LYNX.</span>
        </h2>

        {/* ReviewsGrid with all cards at the end */}
        <div className="flex justify-between">
          <ReviewsGrid />
        </div>
      </Section>
    </div>
  );
};

export default ReviewsSection;
