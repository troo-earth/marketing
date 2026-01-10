import { ChevronDown, Zap } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "How does Troo.earth ensure credit authenticity?",
      a: "We connect with recognized registries and market infrastructure providers using direct data bridges. Every action is recorded with full visibility from project origin to retirement to preserve integrity."
    },
    {
      q: "What types of projects are available?",
      a: "Our portfolio includes reforestation, renewable energy, soil carbon, and community-based initiatives, all verified by globally recognized bodies."
    },
    {
      q: "Is the platform audit-ready?",
      a: "Yes. We provide transparent documentation and evidence that stand up to audits, supporting fast onboarding for enterprise compliance."
    },
    {
      q: "How does Troo.earth protect against greenwashing?",
      a: "By providing complete visibility and documenting the journey of every credit from issuance to retirement, we eliminate ambiguity and protect organizations from risk."
    }
  ];

  return (
    /* Standardized padding and background to match the ecosystem style */
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

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* --- CENTRAL HEADING --- */}
        <div className="text-center mb-20 max-w-3xl">
          
          <h1 className="text-secondary font-black text-[38px] md:text-[50px] xl:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Market <br />
            <span className="text-primary-gradient italic tracking-normal">Clarity.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            Common questions about our corporate-ready platform. 
            Restoring confidence in climate action through verified data and straightforward answers.
          </p>
        </div>

        {/* FAQ Accordion - Balanced Center Layout */}
        <div className="max-w-4xl w-full space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group border border-white/60 rounded-[2rem] bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-primary/5"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <span className="text-secondary font-black text-xl tracking-tight pr-4">
                  {faq.q}
                </span>
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-open:bg-primary group-open:text-white">
                  <ChevronDown className="transition-transform duration-300 group-open:rotate-180" size={20} />
                </div>
              </summary>
              <div className="px-8 pb-8 text-gray-500 font-medium text-lg leading-relaxed">
                <div className="w-full h-px bg-secondary/5 mb-6" />
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Support CTA - Centralized */}
        <div className="w-full max-w-4xl mt-20 p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden text-center">
          <div className="relative z-10">
            <h3 className=" font-black text-xs uppercase tracking-[0.4em] mb-4">Support Access</h3>
            <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Still have questions?</p>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Our team is dedicated to providing the clarity sustainability teams need to make confident decisions.
            </p>
            <a 
              href="mailto:partnerships@troo.earth" 
              className="group inline-flex items-center gap-4 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-white hover:text-secondary transition-all active:scale-95"
            >
              Contact Partnerships 
              <Zap size={16} className="text-accent group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;