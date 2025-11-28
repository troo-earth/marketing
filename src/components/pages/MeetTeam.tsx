import TreePlant from "../../../public/assets/treeplant.svg";

const MeetTheTeam = () => {
  return (
    <section className="w-full h-auto xl:h-screen bg-[#EAF5F3] py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-6">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start gap-8 sm:gap-12 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full xl:w-[50%] xl:px-12">
          {/* Heading */}
          <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight mb-4 sm:mb-6">
            Meet The Team
            <br />
            Behind <span className="text-primary-gradient">Troo</span>
          </h2>

          {/* Founders */}
          <div className="flex items-center justify-center py-6 sm:py-8 md:py-10 gap-8 sm:gap-10 md:gap-12">
            {/* Person 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-6 border-[#007473] overflow-hidden mb-3 bg-gray-300">
                {/* Placeholder Image */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-secondary font-black text-[16px] sm:text-[18px]">
                Cliff Chuah
              </p>
              <p className="text-primary text-[16px] sm:text-[18px] font-semibold">
                Chairman
              </p>
            </div>

            {/* Person 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-6 border-[#007473] overflow-hidden mb-3 bg-gray-300">
                {/* Placeholder Image */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-secondary font-black text-[16px] sm:text-[18px]">
                Basil Rari
              </p>
              <p className="text-primary text-[16px] sm:text-[18px] font-semibold">
                CEO
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="leading-relaxed text-secondary text-[16px] sm:text-[18px] text-medium leading-[20px] sm:leading-[22px] text-justify">
            We're a climate-tech company built to bring trust, transparency, and
            efficiency to the carbon market. Our platform empowers enterprises
            to manage their entire carbon portfolio with confidence. Born from a
            deep passion for climate action, we've built technology that removes
            friction, solves real industry pain points, and makes it effortless
            to manage end-to-end carbon portfolios with clarity, trust, and
            confidence.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full xl:w-[50%] flex justify-center">
          <div className="relative w-full flex flex-col items-center xl:items-start">
            <img
              src={TreePlant}
              alt="Team Activity"
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[563px] h-auto md:h-[465px] rounded-2xl object-cover shadow-lg"
            />

            {/* Brand Text Overlay */}
            <p className="mt-4 text-[48px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-bold text-primary-gradient-vertical text-center xl:mx-auto">
              troo.<span className="font-normal">earth</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
