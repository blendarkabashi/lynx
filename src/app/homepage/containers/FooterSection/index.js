import Section from "@/components/Section";

const Footer = () => {
  return (
    <footer className="bg-[#070B36] py-[130px]">
      <div className="flex flex-row justify-between items-center text-white px-[48px] tablet:px-[70px] desktop:px-[157px]">
        <img src="/assets/logo-text.svg" />
        <a>CatSkiing</a>
        <a>Ski Touring</a>
        <a>Summer</a>
        <a>Book a Trip</a>
      </div>
    </footer>
  );
};

export default Footer;
