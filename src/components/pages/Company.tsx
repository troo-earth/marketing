import React from "react";
import { 
  Users, 
  Target, 
  History, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  Orbit,
  Globe
} from "lucide-react";

const Company: React.FC = () => {
  const milestones = [
    {
      title: "Our Origin",
      description: "Founded on the belief that transparency is the only currency that matters in the climate fight. We started with a single algorithm to map supply chain carbon.",
      icon: <History className="text-accent" />,
      tag: "Since 2021"
    },
    {
      title: "Our Impact",
      description: "Today, we track over 2.4M tons of CO2e for global enterprises, providing the data integrity needed to move the planet forward.",
      icon: <Target className="text-accent" />,
      tag: "Scale"
    },
    {
      title: "Our Philosophy",
      description: "We don't just report data; we engineer solutions. Our team of climate scientists and engineers bridge the gap between intent and action.",
      icon: <Orbit className="text-accent" />,
      tag: "Science-First"
    }
  ];

  return (
    <main className=" relative min-h-screen bg-[var(--background-image-main-gradient)] overflow-hidden">
      
      {/* 1. Atmospheric Background Layers */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-hero-gradient opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 2. Centered Hero Section */}
        <section className="pt-24 pb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/5 mb-8">
            <Heart className="text-primary" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">About Troo</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 max-w-4xl">
            We exist to make <br />
            <span className="text-primary-gradient">impact visible.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
            Moving beyond vague promises. We build the data infrastructure that turns environmental responsibility into a competitive advantage.
          </p>
        </section>

        {/* 3. Asymmetrical Stack (Company Story) */}
        <section className="py-12 space-y-4">
          {milestones.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col lg:flex-row items-stretch gap-4 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Info Card */}
              <div className="lg:w-1/2 p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary rounded-xl shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest">{item.tag}</span>
                </div>
                <h3 className="text-3xl font-black text-secondary mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">{item.description}</p>
                
                <div className="flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-secondary">100%</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Accurate</span>
                   </div>
                   <div className="w-px h-8 bg-gray-200" />
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-secondary">Global</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Presence</span>
                   </div>
                </div>
              </div>

              {/* Interaction Card */}
              <div className="lg:w-1/2 p-8 md:p-12 rounded-[2.5rem] bg-secondary flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-[320px]">
                {/* Visual Background Decoration */}
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                  <Globe size={240} className="text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-white/60 text-[10px] font-bold uppercase mb-4">
                    <ShieldCheck size={12} />
                    Verified Data
                  </div>
                  <p className="text-white text-2xl font-black max-w-xs leading-tight">
                    See how our values drive global enterprise change.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <button className="px-8 py-4 bg-accent text-secondary font-black rounded-xl flex items-center gap-2 hover:translate-x-2 transition-all shadow-xl">
                    <span>Our Impact Report</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 4. Global CTA - Centered & Immersive */}
        <section className="py-16">
          <div className="relative rounded-[4rem] bg-primary-gradient-vertical p-12 md:p-12 overflow-hidden shadow-2xl">
            {/* Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <Users size={48} className="text-accent mb-8" />
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Be a part of the <br /> <span className="text-accent italic">Troo</span> Movement.
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
                We are always looking for climate-focused scientists, engineers, and visionaries to join our global team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-12 py-5 bg-white text-secondary font-black rounded-2xl hover:bg-accent transition-all shadow-xl text-lg">
                  View Careers
                </button>
                <button className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all text-lg">
                  Partner with Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer Spacer */}
        <div className="pb-12 flex flex-col items-center gap-4 opacity-20">
           <div className="h-px w-24 bg-secondary" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Truth in Technology.</span>
        </div>
      </div>
    </main>
  );
};

export default Company;