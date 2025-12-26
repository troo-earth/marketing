// src/components/LandingPage.tsx
import { Globe } from '../ui/Globe';

const LandingPage = () => {
    return (
        <div className="h-screen relative bg-[var(--background-image-main-gradient)] overflow-hidden">
            
            {/* --- ADDED COLOUR POPS --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary Teal Pop - Top Left */}
                <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-primary/20 blur-[100px] rounded-full" />
                
                {/* Accent Yellow Pop - Center Right */}
                <div className="absolute top-[30%] right-[0%] w-64 h-64 bg-accent/15 blur-[90px] rounded-full animate-pulse" />
                
                {/* Primary Teal Pop - Deep Bottom behind Globe */}
                <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
                
                {/* Signature Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="text-center relative z-10  px-6">
                {/* Heading - Colors and Sizes synced to other sections */}
                <h1 className="text-secondary font-black text-[40px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight tracking-tighter mb-10">
                    Powering <span className="text-primary-gradient italic">Enterprise-Grade  </span> Climate Impact
                </h1>

                {/* Paragraph - Colors and Sizes synced to other sections */}
                <p className="text-secondary/80 font-medium text-[16px] sm:text-[18px] max-w-5xl mx-auto leading-relaxed">
                    The unified infrastructure for high-integrity carbon credit management, built for total transparency,
                    operational clarity, and effortless integration.
                </p>

                {/* CTA buttons */}
                <div className="flex justify-center space-x-4 mt-8">
                    <a
                        href="/marketplace"
                        className="px-10 py-4 bg-primary-gradient text-white rounded-full font-black text-[16px] hover:shadow-primary/40 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 flex items-center"
                    >
                        Get Started <span className="ml-2 text-2xl">→</span>
                    </a>
                </div>
            </div>

            {/* --- GLOBE SECTION - EXACTLY AS YOU HAD IT --- */}
            <div className="relative mt-20 h-[500px] overflow-hidden cursor-grab">
                <Globe
                    className="
            absolute
            top-[44%]            
            scale-[2]           
            w-[1000px]           
          "
                />
            </div>
        </div>
    );
};

export default LandingPage;