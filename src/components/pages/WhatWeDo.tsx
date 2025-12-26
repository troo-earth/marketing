import React from "react";
import { ShieldCheck, Layers, FileSearch, ArrowUpRight, Zap } from "lucide-react";

const WhatWeDo = () => {
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

  return (
    <section id="what-we-do" className="w-full h-auto relative flex items-center justify-center bg-[var(--background-image-main-gradient)] overflow-hidden py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24">
      
      {/* --- ATMOSPHERIC ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Existing Blurs */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* --- NEW POPS OF COLOUR --- */}
        {/* Accent pop near the bottom left to balance the header */}
        <div className="absolute w-64 h-64 bg-accent/15 blur-[100px] -bottom-20 left-10 rounded-full animate-pulse" />
        
        {/* Primary teal pop interacting with the card stack */}
        <div className="absolute w-80 h-80 bg-primary/20 blur-[110px] top-[40%] right-[10%] rounded-full" />
        
        {/* Small bright accent "spark" behind the first card */}
        <div className="absolute w-32 h-32 bg-accent/30 blur-[60px] top-[30%] right-[5%] md:right-[20%] rounded-full" />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT: Heading & Mission */}
          <div className="w-full  lg:w-1/2 text-center lg:text-left">
            <div className="  inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
              <Zap className="text-primary" size={14} />
              <span className=" text-[10px] font-black uppercase tracking-[0.3em] text-primary">What We Do</span>
            </div>
            
            <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight tracking-tighter mb-8">
              Turning Corporate <br />
              <span className="text-primary-gradient italic text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px]">Climate Goals </span> 
              into Verified Impact.
            </h2>
            
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              troo.earth is a digital marketplace purpose-built for corporate climate action. We connect organisations to impactful projects through an ecosystem of trust.
            </p>
          </div>

          {/* RIGHT CONTENT: Staggered Capability Cards */}
          <div className="w-full lg:w-1/2 space-y-4">
            {capabilities.map((item, idx) => (
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
                  <h3 className="text-xl font-black text-secondary mb-2 tracking-tight">{item.title}</h3>
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

export default WhatWeDo;