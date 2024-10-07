import Header from "@/components/Header";
import HeroSection from "./containers/HeroSection";
import PartnersSection from "./containers/PartnersSection";
import Footer from "./containers/FooterSection";
import OffersSection from "./containers/OffersSection";
import ReviewsSection from "./containers/ReviewsSection";
import InformationSection from "./containers/InformationSection";
import MediaSection from "./containers/MediaSection";

const Homepage = () => {
  return (
    <div className="h-[200vh] bg-black">
      <Header />
      <HeroSection />
      <InformationSection />
      <OffersSection />
      <MediaSection />
      <ReviewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Homepage;
