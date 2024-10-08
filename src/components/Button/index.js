import React from "react";

const Button = ({ label, className }) => {
  return (
    <button
      className={`${className} px-4 py-[2px] uppercase text-[10px] desktop:text-[15px] text-[#004FFF] font-bold rounded-[12px] border-[3px] border-[#004FFF]`}
    >
      {label}
    </button>
  );
};

export default Button;
