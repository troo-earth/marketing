import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Gauge,
  ArrowRight,
  Fingerprint,
} from "lucide-react";
import { Link } from "react-router-dom";
import Cliff from "../../assets/cliff.webp";
import Basil from "../../assets/Basil.webp";

const TeamAndOpportunity = () => {
  const userBenefits = [
    {
      label: "Operational Efficiency",
      value: "Zero Friction",
      description:
        "Direct data bridges remove manual procurement complexities and fragmentation.",
      icon: <Gauge className="text-primary" size={24} />,
    },
    {
      label: "Regulatory Readiness",
      value: "Audit-Ready",
      description:
        "Full visibility from origin to retirement ensures compliance with ESG and SDG standards.",
      icon: <ShieldCheck className="text-primary" size={24} />,
    },
    {
      label: "Economic Access",
      value: "USD 4.73T",
      description:
        "Strategically position your portfolio in a market scaling to $4.73T by 2030.",
      icon: <TrendingUp className="text-primary" size={24} />,
    },
  ];

  return (
    <div className="relative w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden">
      {/* --- SHARED BACKGROUND CANVAS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- SECTION 1: INDUSTRY OPPORTUNITY --- */}
      <section
        id="market-dynamics"
        className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 w-fit">
              <Zap className="text-primary" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                User Opportunity
              </span>
            </div>

            <h2 className="text-secondary font-black text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[60px] leading-[1.1] tracking-tighter overflow-visible">
              Capitalize on the <br />
              <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                Future of Integrity.
              </span>
            </h2>

            <p className="text-gray-500 font-medium text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              Move beyond fragmented markets. troo.earth provides the governance
              and technology architecture required for large organisations to
              demonstrate measurable climate impact.
            </p>

            <div className="mt-4 p-6 border-l-4 border-accent bg-accent/5 rounded-r-2xl max-w-md lg:max-w-lg">
              <p className="text-secondary font-bold text-sm md:text-base leading-relaxed">
                "We help organisations adopt a transparent, reliable approach to
                carbon credit management that stands up to scrutiny."
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {userBenefits.map((stat, idx) => (
              <div
                key={idx}
                className="group p-6 md:p-8 rounded-[2rem] bg-white border border-secondary/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(23,62,53,0.1)] hover:-translate-y-1 flex items-center gap-6 md:gap-8 relative overflow-hidden"
              >
                <div className="relative z-10 shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-1">
                    {stat.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-black text-secondary tracking-tighter mb-1">
                    {stat.value}
                  </span>
                  <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE LEADERSHIP --- */}
      <section
        id="meet-the-team"
        className="relative z-10 w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-20">
          {/* --- NEW COMPACT HEADER BLOCK --- */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-5xl">
            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-4">
                <Fingerprint className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Core Leadership
                </span>
              </div>
              <h2 className="text-secondary font-black text-[38px] md:text-[50px] xl:text-[64px] leading-[1.05] tracking-tighter">
                The Architects of <br />
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">
                  Verified Trust.
                </span>
              </h2>
            </div>

            {/* Vertical divider visible only on desktop to glue the sections together */}
            <div className="hidden lg:block w-px h-24 bg-secondary/10 self-end mb-2" />

            <div className="max-w-md self-end lg:mb-2">
              <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed lg:border-l-0 border-l-2 border-primary/20 lg:pl-0 pl-4">
                Built by technologists and climate experts dedicated to removing
                friction from the carbon market.
              </p>
            </div>
          </div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT: THE CARDS (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                {
                  name: "Cliff Chuah",
                  role: "Chairman",
                  status: "Strategic Oversight",
                  image: Cliff,
                },
                { 
                  name: "Basil Rari", 
                  role: "CEO", 
                  status: "Operational Lead",
                  image: Basil,
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group relative p-1 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-500 hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-6 p-6 md:p-8">
                    <div className="relative shrink-0">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary/60">
                          {member.status}
                        </span>
                      </div>
                      <h3 className="text-secondary font-black text-2xl tracking-tighter">
                        {member.name}
                      </h3>
                      <p className="text-primary font-bold uppercase tracking-[0.1em] text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: THE NARRATIVE (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4 p-8 rounded-[2rem] bg-white/20 border border-white/40 backdrop-blur-sm">
                  <h4 className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    <div className="w-4 h-px bg-primary" /> Our Identity
                  </h4>
                  <p className="text-gray-500 font-medium leading-relaxed italic text-lg">
                    "Born from a deep passion for climate action, we've built
                    technology that removes friction and solves real industry
                    pain points."
                  </p>
                </div>

                <div className="space-y-4 p-8 rounded-[2rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                  {/* Subtle background icon */}
                  <Zap className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12" />
                  <h4 className=" font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    <div className="w-4 h-px bg-white"/> Our Mission
                  </h4>
                  <p className="text-white/80 font-medium leading-relaxed text-lg relative z-10">
                    A climate-tech engine built to bring trust and efficiency to
                    the carbon market, empowering enterprises to manage
                    portfolios with absolute confidence.
                  </p>
                </div>
              </div>

              {/* Integrated CTA Footer */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-[2.5rem] border border-secondary/5 bg-white/10 mt-auto">
                <div>
                  <p className="text-secondary font-black text-xl tracking-tighter mb-1">
                    Meaningful impact begins with clarity.
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    Explore the values and purpose driving our platform forward.
                  </p>
                </div>
                <Link
                  to="/vision-mission"
                  className="group flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95"
                >
                  Our Vision & Mission
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamAndOpportunity;