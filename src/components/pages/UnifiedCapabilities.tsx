import {
  ShieldCheck,
  Layers,
  FileSearch,
  ArrowUpRight,
  Zap,
  ShoppingCart,
  Repeat,
  Tag,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const UnifiedCapabilities = () => {
  const capabilities = [
    {
      title: "Direct Registry Integration",
      description:
        "Secure technology and direct data bridges with global registries and exchanges to ensure every credit is authenticated and traceable.",
      icon: <Layers size={24} />,
      tag: "Technology",
    },
    {
      title: "Audit-Ready Accountability",
      description:
        "Transparent documentation and evidence designed to stand up to audits, providing clarity for sustainability teams.",
      icon: <FileSearch size={24} />,
      tag: "Governance",
    },
    {
      title: "High-Integrity Verification",
      description:
        "Our framework eliminates double counting and prevents fraud, preserving the integrity of every credit from origin to retirement.",
      icon: <ShieldCheck size={24} />,
      tag: "Trust",
    },
  ];

  const actions = [
    {
      title: "BUY",
      description:
        "Access premium, verified credits—fast, transparent, reliable.",
      icon: <ShoppingCart size={24} />,
      tag: "Acquisition",
    },
    {
      title: "TRANSFER",
      description: "Move credits instantly with full traceability and control.",
      icon: <Repeat size={24} />,
      tag: "Logistics",
    },
    {
      title: "SELL",
      description:
        "List and monetize credits in a liquid, trusted marketplace.",
      icon: <Tag size={24} />,
      tag: "Liquidity",
    },
    {
      title: "RETIRE",
      description:
        "Retire credits with certainty—fully documented and compliant.",
      icon: <Award size={24} />,
      tag: "Compliance",
    },
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
      <section
        id="what-we-do"
        className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
                <Zap className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  What We Do
                </span>
              </div>

              {/* Fix for text clipping 'e' */}
              <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[60px] leading-[1.1] tracking-tighter mb-8 overflow-visible">
                Turning Corporate <br />
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                  Climate Goals{" "}
                </span>
                into Verified Impact.
              </h2>

              <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                troo.earth is a digital marketplace purpose-built for corporate
                climate action. We connect organisations to impactful projects
                through an ecosystem of trust.
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-6 p-6 md:p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(23,62,53,0.1)] hover:-translate-x-2"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary-gradient transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">
                        {item.tag}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-secondary mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PLATFORM ACTIONS --- */}
      <section
        id="platform-actions"
        className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="w-full lg:w-[40%] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-6">
                <Zap className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Capabilities
                </span>
              </div>

              <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[60px] leading-[1.1] tracking-tighter mb-6 lg:mb-8">
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                  Unified Infrastructure
                </span>{" "}
                <br />
                for Modern Businesses.
              </h2>

              <p className="text-gray-500 font-medium text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Empowering enterprises with a single hub to manage, trade, and
                verify environmental assets with total operational clarity.
              </p>
            </div>

            {/* Right: 2x2 Grid - Mobile Responsive */}
            <div className="w-full lg:w-[60%]">
              {/* Changed 'grid-cols-1' to 'grid-cols-2' for small devices to maintain 2x2 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
                {actions.map((item, idx) => (
                  <Link
                    key={idx}
                    to="/marketplace"
                    className="group relative p-4 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(23,62,53,0.15)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden h-full min-h-[160px] sm:min-h-[300px] cursor-pointer"
                  >
                    {/* Decorative Background Icon (Smaller on Mobile) */}
                    <div className="absolute -right-2 -bottom-2 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                      <div className="[&>svg]:w-[60px] [&>svg]:h-[60px] sm:[&>svg]:w-[120px] sm:[&>svg]:h-[120px]">
                        {item.icon}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3 sm:mb-6">
                        {/* Smaller Icon Container for Mobile */}
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary-gradient transition-all duration-500 [&>svg]:w-[18px] [&>svg]:h-[18px] sm:[&>svg]:w-[24px] sm:[&>svg]:h-[24px]">
                          {item.icon}
                        </div>
                        {/* Tag hidden on very small devices for clarity, shown on sm+ */}
                        <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 bg-white/50 px-3 py-1 rounded-full border border-white/80">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-2xl md:text-3xl font-black text-secondary mb-1 sm:mb-3 tracking-tight">
                        {item.title}{" "}
                        <span className="hidden sm:inline-block font-light text-gray-400">
                          CREDITS
                        </span>
                      </h3>
                    </div>

                    <div className="relative z-10">
                      {/* Description font size reduced for mobile 2x2 */}
                      <p className="text-[10px] sm:text-sm md:text-base text-gray-500 leading-tight sm:leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                        {item.description}
                      </p>
                      {/* Arrow indicator hidden on mobile to save vertical space */}
                      <div className="hidden sm:flex mt-4 w-10 h-10 rounded-full bg-secondary/5 items-center justify-center text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnifiedCapabilities;
