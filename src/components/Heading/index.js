import React from "react";

const Heading = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2 className="uppercase text-xs leading-[30px] tablet:text-[15px] tablet:leading-[35px] desktop:text-[25px] desktop:leading-[55px]">
        {subtitle}
      </h2>
      <h1 className="uppercase text-[25px] font-black leading-[30px] text-left tablet:text-[30px] tablet:leading-[35px] desktop:text-[45px] desktop:leading-[55px]">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
