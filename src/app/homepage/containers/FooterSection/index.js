const Footer = () => {
  return (
    <footer className="bg-[#070B36] py-[130px]">
      <div className="flex flex-col tablet:flex-row text-[#F0F0C9] px-[48px] tablet:px-[70px] desktop:px-[157px] justify-between">
        {/* Logo Section - 30% width */}
        <div className="w-full tablet:w-[30%] flex flex-col   tablet:items-start mb-[30px] tablet:mb-0">
          <img
            src="/assets/logo-text.svg"
            alt="Lynx Freeride Logo"
            className="mb-4 w-[134px] tablet:w-[153px] desktop:w-[234px]"
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
        <div className="w-full tablet:w-[70%] flex flex-col justify-center text-center tablet:text-left text-[10px] tablet:text-[12px] desktop:text-[15px]">
          <div className="flex flex-wrap justify-between mb-[35px] font-[400] ">
            <a href="#">CatSkiing</a>
            <a href="#">Ski Touring</a>
            <a href="#">Summer</a>
            <a href="#">Book a Trip</a>
          </div>
          <div className="flex flex-row tablet:hidden desktop:hidden gap-10">
            {/* Left side - Newsletter */}
            <div className="flex-1 mb-4">
              <p className="border border-dashed rounded p-1 mb-2">
                Join our newsletter
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-2 border w-full p-1 border-gray-300 rounded text-[#070B36] "
              />
              <button className="p-2 bg-[#F0F0C9] text-[#070B36] rounded float-start">
                Send
              </button>
            </div>

            {/* Right side - Links */}
            <div className="flex-1 flex flex-wrap justify-between font-[200]">
              <a href="#" className="w-1/2 mb-2">
                Safety & Guiding
              </a>
              <a href="#" className="w-1/2 mb-2">
                Travel Info
              </a>
              <a href="#" className="w-1/2 mb-2">
                FAQ & Policies
              </a>
              <a href="#" className="w-1/2 mb-2">
                About Us
              </a>
              <a href="#" className="w-1/2">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop/Tablet layout - Only shows links */}
          <div className="hidden tablet:flex tablet:flex-wrap desktop:flex desktop:flex-wrap  justify-between font-[200] ">
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
