import Header from "@/components/Header";
import HeroSection from "./containers/HeroSection";

const Homepage = () => {
  return (
    <div className="h-[200vh] bg-black">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Homepage;
