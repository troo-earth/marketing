import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const VisionMission = () => {
  return (
    /* Matches TeamAndOpportunity bg and padding (px-6 md:px-12 lg:px-20 xl:px-24) */
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      
      {/* --- SHARED BACKGROUND CANVAS (Identical to TeamAndOpportunity) --- */}
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
        
        {/* Header Block - Aligned with the "Architects of Trust" style */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-5xl">
          <div className="shrink-0">
            <h1 className="text-secondary font-black text-[38px] md:text-[50px] xl:text-[72px] leading-[1.05] tracking-tighter">
              Evolving for <br />
              <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                Enterprise Scale.
              </span>
            </h1>
          </div>

          <div className="hidden lg:block w-px h-24 bg-secondary/10 self-end mb-2" />

          <div className="max-w-md self-end lg:mb-2">
            <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed lg:border-l-0 border-l-2 border-primary/20 lg:pl-0 pl-4">
              Meaningful climate impact begins with clarity and confidence. We build carefully, deliberately, and transparently.
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
              Helping companies take responsible steps toward net zero with confidence and measurable results. 
            </p>
            <div className="space-y-4 text-white/80 text-lg font-medium">
              <p>We simplify access to verified carbon credits, making sourcing and management straightforward and traceable.</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-10 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl relative overflow-hidden group">
            <Eye className="absolute -right-4 -bottom-4 text-secondary/5 w-48 h-48 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <h2 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
               <div className="w-4 h-px bg-primary"/> Our Vision 
            </h2>
            <p className="text-3xl md:text-4xl font-black text-secondary tracking-tighter leading-tight mb-8">
              Building the future of climate integrity through transparency and accountability. 
            </p>
            <div className="space-y-4 text-gray-500 text-lg font-medium leading-relaxed">
              <p>Restoring clarity to a complex market through secure technology and direct data bridges.</p>
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="border-t border-secondary/10 pt-16">
          <h3 className="text-secondary font-black text-3xl tracking-tighter mb-12">The Principles that Guide Us </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Transparency", 
                text: "Full visibility from project origin to retirement, eliminating ambiguity.",
                icon: <Zap size={20} />
              },
              { 
                title: "Accountability", 
                text: "Strict principles of data security and verification across every transaction.",
                icon: <ShieldCheck size={20} />
              },
              { 
                title: "Scalability", 
                text: "Providing the governance and security expected by multinational enterprises.",
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