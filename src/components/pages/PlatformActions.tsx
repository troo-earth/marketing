import { ShoppingCart, Repeat, Tag, Award, ArrowUpRight, Zap } from "lucide-react";

const PlatformActionsSection = () => {
  const actions = [
    {
      title: "BUY",
      description: "Access premium, verified credits—fast, transparent, reliable.",
      icon: <ShoppingCart size={24} />,
      tag: "Acquisition"
    },
    {
      title: "TRANSFER",
      description: "Move credits instantly with full traceability and control.",
      icon: <Repeat size={24} />,
      tag: "Logistics"
    },
    {
      title: "SELL",
      description: "List and monetize credits in a liquid, trusted marketplace.",
      icon: <Tag size={24} />,
      tag: "Liquidity"
    },
    {
      title: "RETIRE",
      description: "Retire credits with certainty—fully documented and compliant.",
      icon: <Award size={24} />,
      tag: "Compliance"
    }
  ];

  return (
    <section id="platform-actions" className="w-full h-auto relative flex items-center justify-center bg-[var(--background-image-main-gradient)] overflow-hidden py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24 font-nunito">
      
      {/* --- ATMOSPHERIC ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* NEW POPS OF COLOUR */}
        <div className="absolute w-64 h-64 bg-accent/15 blur-[100px] -bottom-20 left-10 rounded-full" />
        <div className="absolute w-80 h-80 bg-primary/20 blur-[110px] top-[40%] right-[10%] rounded-full" />
        
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT: Same layout as WhatWeDo */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
              <Zap className="text-primary" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Capabilities</span>
            </div>
            
            <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight tracking-tighter mb-8">
              <span className="text-primary-gradient italic text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px]">Unified Infrastructure</span> <br />
              for Modern Businesses.
            </h2>
            
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Empowering enterprises with a single hub to manage, trade, and verify environmental assets with total operational clarity.
            </p>
          </div>

          {/* RIGHT CONTENT: Same Card Design as WhatWeDo */}
          <div className="w-full lg:w-1/2 space-y-4">
            {actions.map((item, idx) => (
              <div 
                key={idx}
                className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(23,62,53,0.1)] hover:-translate-x-2"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary-gradient group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                
                <div className="flex flex-col text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">{item.tag}</span>
                    <ArrowUpRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-black text-secondary mb-2 tracking-tight">
                    {item.title} <span className="font-light text-gray-400">CREDITS</span>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformActionsSection;