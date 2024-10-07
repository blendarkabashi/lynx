const Footer = () => {
  return (
    <footer className="bg-[#070B36] py-[130px]">
      <div className="flex flex-col tablet:flex-row text-[#F0F0C9] px-[48px] tablet:px-[70px] desktop:px-[157px] justify-between">
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
          <div className="flex flex-wrap justify-between mb-[35px] font-[400]">
            <a href="#">CatSkiing</a>
            <a href="#">Ski Touring</a>
            <a href="#">Summer</a>
            <a href="#">Book a Trip</a>
          </div>
          <div className="flex flex-wrap justify-between font-[200]">
            <a href="#">Safety & Guiding</a>
            <a href="#">Travel Info</a>
            <a href="#">FAQ & Policies</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
