import Header from "@/components/Header";
import HeroSection from "./containers/HeroSection";
import PartnersSection from "./containers/PartnersSection";
import Footer from "./containers/FooterSection";
import OffersSection from "./containers/OffersSection";
import ReviewsSection from "./containers/ReviewsSection";

const Homepage = () => {
  return (
    <div className="h-[200vh] bg-black">
      <Header />
      <HeroSection />
      <OffersSection />
      <ReviewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Homepage;
