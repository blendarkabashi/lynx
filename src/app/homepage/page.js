import Header from "@/components/Header";
import HeroSection from "./containers/HeroSection";
import PartnersSection from "./containers/PartnersSection";
import Footer from "./containers/FooterSection";

const Homepage = () => {
  return (
    <div className="h-[200vh] bg-black">
      <Header />
      <HeroSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Homepage;
