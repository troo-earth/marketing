import TreePlant from "/assets/treeplant.svg";

const MeetTheTeam = () => {
  return (
    <section id="meet-the-team" className="w-full h-auto  bg-[var(--background-image-main-gradient)] py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24  relative overflow-hidden">
      
      {/* --- ATMOSPHERIC COLOUR POPS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Original top-right blur */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        {/* Accent pop behind the text content */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Primary teal pop interacting with the TreePlant visual */}
        <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] bg-primary/20 rounded-full blur-[130px] animate-pulse" />
        
        {/* Small bright accent spark at the bottom center */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[90px]" />
        
        {/* Signature noise texture for brand consistency */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center gap-12 sm:gap-16 relative z-10">
        
        {/* LEFT CONTENT - Centered on mobile, Left-aligned on desktop */}
        <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start text-center xl:text-left">
          {/* Heading */}
          <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight mb-8 tracking-tighter">
            Meet The Team
            <br />
            Behind <span className="text-primary-gradient">troo.earth</span>
          </h2>

          {/* Founders Grid - Centered Flexbox */}
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-8 sm:gap-12 mb-10">
            {/* Person 1: Cliff */}
            <div className="group flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Cliff Chuah"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-secondary font-black text-[16px] sm:text-[18px]">
                  Cliff Chuah
                </p>
                <p className="text-primary text-[16px] sm:text-[18px] font-semibold">
                  Chairman
                </p>
              </div>
            </div>

            {/* Person 2: Basil */}
            <div className="group flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Basil Rari"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-secondary font-black text-[16px] sm:text-[18px]">
                  Basil Rari
                </p>
                <p className="text-primary text-[16px] sm:text-[18px] font-semibold">
                  CEO
                </p>
              </div>
            </div>
          </div>

          {/* Description Text - Centered on mobile */}
          <div className="max-w-2xl">
            <p className="text-secondary text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[28px] opacity-90">
              We're a climate-tech company built to bring trust, transparency, and
              efficiency to the carbon market. Our platform empowers enterprises
              to manage their entire carbon portfolio with confidence. 
              <br /><br />
              Born from a deep passion for climate action, we've built technology that removes
              friction, solves real industry pain points, and makes it effortless
              to manage end-to-end carbon portfolios with clarity, trust, and
              confidence.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT - Visual Branding */}
        <div className="w-full xl:w-[45%] flex flex-col items-center">
          <div className="relative group">
            <img
              src={TreePlant}
              alt="Team Activity"
              className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] h-auto rounded-[2.5rem] object-cover shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;