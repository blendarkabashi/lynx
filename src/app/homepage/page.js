import Header from "@/components/Header";
import HeroSection from "./containers/HeroSection";
import PartnersSection from "./containers/PartnersSection";

const Homepage = () => {
  return (
    <div className="h-[200vh] bg-black">
      <Header />
      <HeroSection />
      <div className="px-[20px] tablet:px-[30px] desktop:px-[60px]">
        <PartnersSection />
      </div>
    </div>
  );
};

export default Homepage;
