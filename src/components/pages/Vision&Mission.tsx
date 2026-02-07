// src/pages/VisionMission.tsx
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      
      {/* --- SHARED BACKGROUND CANVAS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:40px_40px]" 
           style={{ backgroundImage: 'linear-gradient(#173E35 1px, transparent 1px), linear-gradient(90deg, #173E35 1px, transparent 1px)' }} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-5xl">
          <div className="shrink-0">
            <h1 className="text-secondary font-black text-[38px] md:text-[50px] xl:text-[72px] leading-[1.05] tracking-tighter">
              Evolving for <br />
              <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                Global Impact.
              </span>
            </h1>
          </div>

          <div className="hidden lg:block w-px h-24 bg-secondary/10 self-end mb-2" />

          <div className="max-w-md xl:self-end lg:mb-2">
            <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed lg:border-l-0 border-l-2 border-primary/20 lg:pl-0 pl-4">
              Meaningful climate impact begins with clarity and institutional trust. We build infrastructure that is careful, deliberate, and scalable.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="p-10 rounded-[3rem] bg-primary text-white shadow-2xl relative overflow-hidden group">
            <Target className="absolute -right-4 -bottom-4 text-white/5 w-48 h-48 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <h2 className="font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                <div className="w-4 h-px bg-white"/> Our Mission 
            </h2>
            <p className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-8">
              Standardizing the integrity of environmental assets for the world’s most ambitious enterprises.
            </p>
            <div className="space-y-4 text-white/80 text-lg font-medium">
              <p>We provide the underlying governance and data bridges necessary to make climate capital deployment straightforward, traceable, and permanent.</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-10 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl relative overflow-hidden group">
            <Eye className="absolute -right-4 -bottom-4 text-secondary/5 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <h2 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                <div className="w-4 h-px bg-primary"/> Our Vision 
            </h2>
            <p className="text-3xl md:text-4xl font-black text-secondary tracking-tighter leading-tight mb-8">
              Becoming the trusted infrastructure for the global regenerative economy.
            </p>
            <div className="space-y-4 text-gray-500 text-lg font-medium leading-relaxed">
              <p>We see a future where environmental assets move as fluidly as capital, underpinned by secure technology and direct registry transparency.</p>
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="border-t border-secondary/10 pt-16">
          <h3 className="text-secondary font-black text-3xl tracking-tighter mb-12">The Principles of the Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Radical Clarity", 
                text: "Removing the layer of ambiguity from the carbon market through direct, unalterable data bridges.",
                icon: <Zap size={20} />
              },
              { 
                title: "Institutional Integrity", 
                text: "Upholding the strict principles of verification required by multinational enterprises and regulators.",
                icon: <ShieldCheck size={20} />
              },
              { 
                title: "Scalable Deployment", 
                text: "Building the engine that allows climate capital to flow at the speed and scale the planet requires.",
                icon: <Target size={20} />
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="text-secondary font-black text-xl mb-3">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;