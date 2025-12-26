import React from "react";
import { 
  Globe2, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  LineChart,
  Sparkles
} from "lucide-react";

const Solutions: React.FC = () => {
  const categories = [
    {
      tag: "Intelligence",
      title: "Carbon Analytics",
      description: "Automate Scope 1-3 reporting with high-fidelity data. We turn raw emissions into audit-ready strategic assets.",
      icon: <LineChart size={24} />
    },
    {
      tag: "Supply Chain",
      title: "Value Chain Trace",
      description: "Map your entire footprint. Identify climate risks and sustainability opportunities deep within your supply base.",
      icon: <Globe2 size={24} />
    },
    {
      tag: "Energy",
      title: "Transition Mix",
      description: "Science-based pathways to transition infrastructure to renewable sources without losing operational efficiency.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <main className=" relative min-h-screen bg-main-gradient">
      {/* --- BRANDED BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* The Hero Gradient used as a soft top-header wash */}
        <div className="absolute top-0 left-0 w-full h-[800px] opacity-40 bg-[var(--background-image-hero-gradient)]" />
        
        {/* Main Gradient used as a sweeping "light beam" from the side */}
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[1000px] opacity-30 bg-[var(--background-image-main-gradient)] rotate-12 blur-3xl rounded-full" />
        
        {/* Subtle texture to make the gradients look premium */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        {/* 1. Hero Section: Standardized Padding (px-6 md:px-12 lg:px-24) */}
        <section className="pt-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 backdrop-blur-md border border-primary/10 shadow-sm">
              <Sparkles className="text-primary" size={16} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">Advanced Platform</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-secondary leading-[0.9] tracking-tighter">
              The Architecture <br /> 
              <span className="text-primary-gradient">of Action.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium">
              Enterprise-grade tools built to measure, manage, and mitigate environmental impact across every vertical.
            </p>
          </div>
        </section>

        {/* 2. Solutions Grid: Card layout with Glassmorphism */}
        <section className="pt-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-[3rem] bg-white/40 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(23,62,53,0.15)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon uses Primary Gradient */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary-gradient text-white mb-8 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                  {cat.icon}
                </div>
                
                <h3 className="text-2xl font-black text-secondary mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium text-sm md:text-base">
                  {cat.description}
                </p>
                
                <div className="space-y-4 mb-10 border-t border-primary/5 pt-8">
                  {["Audit-Ready Data", "Real-time Monitoring"].map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-bold text-secondary/70">
                      <CheckCircle2 size={16} className="text-accent" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 font-black text-primary text-sm group-hover:gap-4 transition-all">
                  View Detail <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CTA Section: The immersive Primary Gradient Vertical */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
          <div className="relative rounded-[4rem] bg-primary-gradient-vertical overflow-hidden p-12 md:p-18 shadow-2xl">
            {/* Subtle light pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
                  Ready to move <br /> the planet <span className="text-accent">Troo-ly?</span>
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                  Join 200+ global enterprises using our data engine to drive their decarbonization strategy and move the planet forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">
                <button className="px-8 py-5 bg-white text-secondary font-black rounded-2xl hover:bg-accent transition-all shadow-xl active:scale-95 text-lg">
                  Start Now
                </button>
                <button className="px-12 py-5 bg-secondary text-white border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-all active:scale-95 text-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Solutions;