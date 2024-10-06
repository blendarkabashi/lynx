const HeroSection = () => {
  return (
    <div className="h-[800px]">
      <video width="100%" height="auto" autoPlay loop muted>
        <source src="/assets/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-full w-full flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center mix-blend-color-burn uppercase max-w-[750px]">
        <h1 className="text-[#070B36] text-[45px] font-medium">
          Breathtaking Adventures in Europe’s <span className="font-black">Last Wild Mountains</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
