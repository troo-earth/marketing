import XCarbon from "../../../public/assets/XCarbon.svg";
import Xpansive from "../../../public/assets/XpansivConnect.svg";

const PartnersSection = () => {
  return (
    <section
      className="
      w-full 
      bg-[#EAF5F3]
      max-h-[257px]
      px-4 sm:px-6
    "
    >
      <div
        className="
        max-w-7xl 
        mx-auto 
        flex 
        flex-col md:flex-row 
        items-center 
        md:items-center 
        justify-between
        px-4 sm:px-8 md:px-14
        py-6 md:py-10
      "
      >
        {/* Left Title */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2
            className="
            text-primary-gradient
            bg-clip-text text-transparent 
            font-black 
            text-[50px] leading-[40px] md:leading-[60px]
            
          "
          >
            Meet Our
            <br />
            Partners
          </h2>
        </div>

        {/* Right Logos */}
        <div
          className="
          flex 
          flex-col sm:flex-row 
          items-center 
          gap-8 sm:gap-16 md:gap-24
        "
        >
          {/* X Carbon — 312 × 102 */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={XCarbon}
              alt="X Carbon"
              className="
                h-[64px] sm:h-[82px] lg:h-[102px]
                w-auto 
                object-contain
              "
            />
            <div />
          </div>

          {/* Xpansiv Connect — 429 × 52 */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={Xpansive}
              alt="Xpansiv Connect"
              className="
                h-[28px] sm:h-[34px] lg:h-[42px]
                w-auto 
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
