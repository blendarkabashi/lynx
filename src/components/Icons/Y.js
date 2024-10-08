export default function Y({ bodyColor, className }) {
  return (
    <svg
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[17px] h-[29px] tablet:w-[19px] tablet:h-[34px] desktop:w-[30px] desktop:h-[53px] ${
        className ?? ""
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 53" // Adjust this based on the original SVG dimensions
      preserveAspectRatio="xMidYMid meet" // Ensure proper scaling
    >
      <path
        d="M26.743 6.45856L30.2769 0H28.3066L24.8107 6.45856H26.743Z"
        fill="#F2BB05"
      />
      <path
        d="M23.16 9.50744L15.5576 23.5486L8.03222 9.50744H5.94593L14.6735 25.2509L14.6789 52.3633H16.5761V25.2509L25.0749 9.50744H23.16Z"
        fill={bodyColor ?? "#070B36"}
      />
      <path
        d="M6.39773 6.45856L2.93649 0H0.765625L4.28433 6.45856H6.39773Z"
        fill="#F2BB05"
      />
    </svg>
  );
}
