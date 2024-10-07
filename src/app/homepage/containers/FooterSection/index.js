import Section from "@/components/Section";

const Footer = () => {
  return (
    <footer className="bg-[#070B36] py-[130px]">
      <div className="flex flex-col tablet:flex-row text-white px-[48px] tablet:px-[70px] desktop:px-[157px] justify-between">
        {/* Logo Section - 30% width */}
        <div className="w-full tablet:w-[30%] flex flex-col items-center tablet:items-start mb-[30px] tablet:mb-0">
          <img
            src="/assets/logo-text.svg"
            alt="Lynx Freeride Logo"
            className="mb-4"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links - 70% width */}
        <div className="w-full tablet:w-[70%] flex flex-col justify-center text-center tablet:text-left">
          <div className="flex flex-wrap justify-between mb-[35px]">
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              CatSkiing
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Ski Touring
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Summer
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Book a Trip
            </a>
          </div>
          <div className="flex flex-wrap justify-between">
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Safety & Guiding
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Travel Info
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              FAQ & Policies
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              About Us
            </a>
            <a href="#" className="hover:underline mb-2 tablet:mb-0">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
