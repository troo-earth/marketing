import { TrendingUp, ShieldCheck, Zap, Globe, Gauge } from "lucide-react";

const MarketOpportunity = () => {
  const userBenefits = [
    {
      label: "Operational Efficiency",
      value: "Zero Friction", 
      description: "Direct data bridges remove manual procurement complexities and fragmentation.",
      icon: <Gauge className="text-primary" size={24} />,
    },
    {
      label: "Regulatory Readiness",
      value: "Audit-Ready", 
      description: "Full visibility from origin to retirement ensures compliance with ESG and SDG standards.",
      icon: <ShieldCheck className="text-primary" size={24} />,
    },
    {
      label: "Economic Access",
      value: "USD 4.73T", 
      description: "Strategically position your portfolio in a market scaling to $4.73T by 2030.",
      icon: <TrendingUp className="text-primary" size={24} />,
    }
  ];

  return (
    <section id="market-dynamics" className="w-full h-auto  relative flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24 ">
      
      {/* --- BRANDED COLOUR POPS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-accent/15 rounded-full blur-[90px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- BACKGROUND ACCENT SHAPE --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--background-image-main-gradient)] opacity-30 skew-x-12 translate-x-32" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: User-Centric Value Prop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 w-fit">
            <Zap className="text-primary" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">User Opportunity</span>
          </div>
          
          <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight tracking-tighter">
            Capitalize on the <br />
            <span className="text-primary-gradient italic">Future of Integrity.</span>
          </h2>
          
          <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-lg">
            Move beyond fragmented markets. troo.earth provides the governance and technology architecture required for large organisations to demonstrate measurable climate impact.
          </p>
          
          <div className="mt-4 p-6 border-l-4 border-accent bg-accent/5 rounded-r-2xl max-w-md lg:max-w-lg">
            <p className="text-secondary font-bold text-sm leading-relaxed">
              "We help organisations adopt a transparent, reliable approach to carbon credit management that stands up to scrutiny."
            </p>
          </div>
        </div>

        {/* RIGHT: User Value Stats */}
        <div className="space-y-4 md:space-y-6">
          {userBenefits.map((stat, idx) => (
            <div 
              key={idx}
              className="group p-6 md:p-8 rounded-[2rem] bg-white border border-secondary/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(23,62,53,0.1)] hover:-translate-y-1 flex items-center gap-6 md:gap-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 " />
              
              <div className="relative z-10 shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center transition-all duration-500 text-primary ">
                {stat.icon}
              </div>
              
              <div className="relative z-10 flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-1">
                  {stat.label}
                </span>
                <span className="text-3xl md:text-4xl font-black text-secondary tracking-tighter mb-1">
                  {stat.value}
                </span>
                <p className="text-gray-400 text-[10px] md:text-xs font-medium leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;