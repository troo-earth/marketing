import { 
  ShieldCheck, Layers, FileSearch, ArrowUpRight, Zap, 
  ShoppingCart, Repeat, Tag, Award 
} from "lucide-react";

const UnifiedCapabilities = () => {
  const capabilities = [
    {
      title: "Direct Registry Integration",
      description: "Secure technology and direct data bridges with global registries and exchanges to ensure every credit is authenticated and traceable.",
      icon: <Layers size={24} />,
      tag: "Technology"
    },
    {
      title: "Audit-Ready Accountability",
      description: "Transparent documentation and evidence designed to stand up to audits, providing clarity for sustainability teams.",
      icon: <FileSearch size={24} />,
      tag: "Governance"
    },
    {
      title: "High-Integrity Verification",
      description: "Our framework eliminates double counting and prevents fraud, preserving the integrity of every credit from origin to retirement.",
      icon: <ShieldCheck size={24} />,
      tag: "Trust"
    }
  ];

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
    <div className="relative w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden">
      
      {/* --- SHARED BACKGROUND CANVAS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Transition smoothing blurs */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />
        <div className="absolute top-[50%] right-[10%] w-80 h-80 bg-accent/10 blur-[110px] animate-pulse" />
        
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-accent/20 blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- SECTION 1: WHAT WE DO --- */}
      <section id="what-we-do" className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
                <Zap className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">What We Do</span>
              </div>
              
              {/* Fix for text clipping 'e' */}
              <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[60px] leading-[1.1] tracking-tighter mb-8 overflow-visible">
                Turning Corporate <br />
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">Climate Goals </span> 
                into Verified Impact.
              </h2>
              
              <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                troo.earth is a digital marketplace purpose-built for corporate climate action. We connect organisations to impactful projects through an ecosystem of trust.
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              {capabilities.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-6 md:p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(23,62,53,0.1)] hover:-translate-x-2">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary-gradient transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">{item.tag}</span>
                      <ArrowUpRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-secondary mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PLATFORM ACTIONS --- */}
      <section id="platform-actions" className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
                <Zap className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Capabilities</span>
              </div>
              
              <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[60px] leading-[1.1] tracking-tighter mb-8 overflow-visible">
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">Unified Infrastructure</span> <br />
                for Modern Businesses.
              </h2>
              
              <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Empowering enterprises with a single hub to manage, trade, and verify environmental assets with total operational clarity.
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              {actions.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-6 md:p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(23,62,53,0.1)] hover:-translate-x-2">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary-gradient transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">{item.tag}</span>
                      <ArrowUpRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-secondary mb-2 tracking-tight">
                      {item.title} <span className="font-light text-gray-400">CREDITS</span>
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnifiedCapabilities;