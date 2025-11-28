import CarbonActionCard from "../actionCard";
import Forest from "../../../public/assets/forest.png";

import ShoppingCart from "../../../public/assets/Shopping.svg";
import Repeat from "../../../public/assets/Certificate.svg";
import Tag from "../../../public/assets/Sell.svg";
import Award from "../../../public/assets/Transfer.svg";

const PlatformActionsSection = () => {
  const carbonActions = [
    {
      title: "BUY",
      subtitle: "CARBON CREDITS",
      description:
        "Access premium, verified credits—fast, transparent, reliable.",
      icon: ShoppingCart,
    },
    {
      title: "TRANSFER",
      subtitle: "CARBON CREDITS",
      description: "Move credits instantly with full traceability and control.",
      icon: Repeat,
    },
    {
      title: "SELL",
      subtitle: "CARBON CREDITS",
      description:
        "List and monetize credits in a liquid, trusted marketplace.",
      icon: Tag,
    },
    {
      title: "RETIRE",
      subtitle: "CARBON CREDITS",
      description:
        "Retire credits with certainty—fully documented and compliant.",
      icon: Award,
    },
  ];

  return (
    <section className="w-full relative h-auto h-auto xl:h-screen overflow-hidden">
      {/* Base Two-Column Layout */}
      <div className="w-full h-full flex flex-col xl:flex-row">
        {/* Left Forest */}
        <div className="hidden xl:block xl:w-[38%] relative">
          <img
            src={Forest}
            alt="Forest"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right White Content */}
        <div className="w-full xl:w-[62%] bg-white flex py-12 sm:py-16 md:py-20 justify-center px-6 sm:px-8 md:px-12">
          <h2 className="text-[#173E35] font-black text-[28px] sm:text-[32px] md:text-[38px] xl:text-[42px] leading-[1.2] inline-block">
            <span className="block text-left">
              Unified Carbon Infrastructure
            </span>
            <span className="block xl:text-right">for Modern Businesses</span>
          </h2>
        </div>
      </div>

      {/* Center Overlay (Cards) */}
      <div
        className="
          static xl:absolute 
          xl:inset-0 
          flex 
          items-center 
          justify-center 
          xl:z-20
          px-4 sm:px-6
          pb-12 xl:pb-0
          -mt-8 xl:mt-0
          xl:pt-32
        "
      >
        <div className="max-w-8xl flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center xl:justify-start">
          {carbonActions.map((item, index) => (
            <CarbonActionCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={
                <img src={item.icon} alt={item.title} className="w-8 h-8 sm:w-10 sm:h-10" />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformActionsSection;