import { useState, useEffect } from "react";
import CarbonActionCard from "../ui/actionCard";
import ShoppingCart from "/assets/Shopping.svg";
import Repeat from "/assets/Certificate.svg";
import Tag from "/assets/Sell.svg";
import Award from "/assets/Transfer.svg";

const PlatformActionsSection = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const carbonActions = [
    { title: "BUY", subtitle: "CARBON CREDITS", description: "Access premium, verified credits—fast, transparent, reliable.", icon: ShoppingCart },
    { title: "TRANSFER", subtitle: "CARBON CREDITS", description: "Move credits instantly with full traceability and control.", icon: Repeat },
    { title: "SELL", subtitle: "CARBON CREDITS", description: "List and monetize credits in a liquid, trusted marketplace.", icon: Tag },
    { title: "RETIRE", subtitle: "CARBON CREDITS", description: "Retire credits with certainty—fully documented and compliant.", icon: Award },
  ];

  // Auto-rotate cards on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1280;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % carbonActions.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [carbonActions.length]);

  return (
    <section className="w-full relative h-auto bg-white flex flex-col xl:flex-row items-center overflow-hidden py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24">
      
      {/* --- BRANDED COLOUR POPS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Primary wash behind the hero text */}
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        {/* Accent pop behind the card interaction area */}
        <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-accent/15 rounded-full blur-[100px] animate-pulse" />
        
        {/* Primary teal pop at the bottom right to ground the cards */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[450px] h-[450px] bg-primary/20 rounded-full blur-[110px]" />

        {/* Signature noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* TEXT SIDE */}
      <div className="relative z-10 w-full xl:pl-4 xl:w-1/2 flex flex-col gap-8 text-center xl:text-left xl:mb-0">
        <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight tracking-tighter">
          <span className="max-w-xl text-primary-gradient italic block mb-2">Unified Carbon Infrastructure</span>
          for Modern Businesses
        </h2>
        <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl mx-auto xl:mx-0">
          Empowering enterprises with a single hub to manage, trade, and verify environmental assets with total operational clarity.
        </p>
      </div>

      {/* CARDS SIDE - Auto-rotating "Hand of Cards" Mobile / Clean Grid Desktop */}
      <div className="relative z-20 w-full xl:w-1/2 flex justify-center items-center h-[500px] xl:h-auto mt-16 xl:mt-0">
        {/* Desktop Grid */}
        <div className="hidden xl:grid xl:grid-cols-2 xl:gap-8 w-full max-w-[600px]">
          {carbonActions.map((item, index) => (
            <div 
              key={index}
              className="transition-all duration-300 ease-out hover:-translate-y-2"
            >
              <CarbonActionCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                icon={<img src={item.icon} alt={item.title} className="w-7 h-7 filter brightness-0 invert" />}
              />
            </div>
          ))}
        </div>

        {/* Mobile Stacked Cards with Auto-rotation */}
        <div className="xl:hidden relative w-full max-w-[400px] flex justify-center items-center">
          {carbonActions.map((item, index) => {
            const isActive = activeCard === index;
            const position = (index - activeCard + carbonActions.length) % carbonActions.length;
            
            // Calculate stacking order and transforms
            const getCardStyle = () => {
              if (position === 0) {
                // Active card - on top
                return {
                  zIndex: 40,
                  transform: 'translateY(-20px) scale(1.05) rotate(0deg)',
                  opacity: 1,
                };
              } else if (position === 1) {
                // Next card - slightly visible behind
                return {
                  zIndex: 30,
                  transform: 'translateY(0px) scale(0.95) rotate(3deg)',
                  opacity: 0.8,
                };
              } else if (position === 2) {
                // Third card - more behind
                return {
                  zIndex: 20,
                  transform: 'translateY(10px) scale(0.9) rotate(-3deg)',
                  opacity: 0.6,
                };
              } else {
                // Last card - at the back
                return {
                  zIndex: 10,
                  transform: 'translateY(20px) scale(0.85) rotate(0deg)',
                  opacity: 0.4,
                };
              }
            };

            const cardStyle = getCardStyle();

            return (
              <div 
                key={index}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  zIndex: cardStyle.zIndex,
                  transform: cardStyle.transform,
                  opacity: cardStyle.opacity,
                }}
                onClick={() => setActiveCard(index)}
              >
                <div className="drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.15)] relative">
                  {/* Glow effect for active card */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-2xl animate-pulse" />
                  )}
                  <CarbonActionCard
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    icon={<img src={item.icon} alt={item.title} className="w-7 h-7 filter brightness-0 invert" />}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Progress Indicators */}
        <div className="xl:hidden absolute bottom-0 flex gap-2 justify-center">
          {carbonActions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === index 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformActionsSection;