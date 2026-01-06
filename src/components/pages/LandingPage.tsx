import { ArrowRight, Globe } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen xl:h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden flex flex-col items-center">
      
      {/* --- BRANDED ATMOSPHERIC LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px]" />
        
        {/* Signature Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl h-screen flex flex-col justify-between px-6 pt-32 pb-24 md:py-16 lg:pb-20 lg:pt-32">
        
        {/* --- HERO CONTENT --- */}
        <section className="flex flex-col items-center justify-center text-center flex-grow">
          
          

          {/* High-Impact Typography */}
          <h1 className="text-secondary font-black text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[95px] leading-[0.9] tracking-tighter mb-8 max-w-5xl">
            Turning Commitments <br />
            <span className="text-primary-gradient italic">into Action.</span>
          </h1>

          {/* Refined Subtext */}
          <p className="text-secondary/70 font-medium text-base md:text-xl max-w-2xl leading-relaxed mb-10">
            Troo.earth is a digital marketplace purpose-built for corporate climate action. 
            Connect to verified projects through an ecosystem of trust and clarity.
          </p>

          {/* Primary CTA Block */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <a 
              href="/marketplace"
              className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-4 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={20} className="relative z-10 text-accent group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center bg-white/20">
                    <Globe className="text-primary animate-spin-slow" size={20} />
                </div>
                <div className="text-left">
                    <p className="text-secondary font-black text-2xl tracking-tighter leading-none">USD 4.73T</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mt-1">Market Scale by 2030</p>
                </div>
            </div>
          </div>
        </section>

        
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;