import { ChevronDown, Zap } from 'lucide-react';

const FAQ = () => {
  const categories = [
    {
      header: "Getting Started",
      items: [
        { q: "Who can use troo.earth?", a: "Our platform is designed for enterprises and organizations seeking to purchase, transfer, or retire verified carbon credits for corporate climate commitments." },
        { q: "How do I create an account?", a: "Contact our partnerships team to set up an enterprise account with customized access levels for your sustainability team." },
        { q: "What registries do you integrate with?", a: "We maintain direct data bridges with Verra, Gold Standard, Climate Action Reserve, and other leading global carbon registries." }
      ]
    },
    {
      header: "Platform & Transactions",
      items: [
        { q: "How long does credit transfer take?", a: "Transfers are processed in real-time through our registry integrations, with full documentation available immediately." },
        { q: "Can I track my retired credits?", a: "Yes. Every retirement generates a permanent, auditable record with registry confirmation and retirement certificates." },
        { q: "What payment methods do you accept?", a: "We support enterprise invoicing, wire transfers, and ACH payments for verified business accounts." }
      ]
    },
    {
      header: "Pricing & Billing",
      items: [
        { q: "What are your fees?", a: "Our transparent fee structure includes a small transaction fee and platform access subscription. Contact us for enterprise pricing." },
        { q: "Are there minimum purchase requirements?", a: "Minimum order quantities vary by project type. We recommend starting consultations at 100 tonnes CO2e." }
      ]
    },
    {
      header: "Carbon Credits & Integrity",
      items: [
        { q: "Which standards do you follow?", a: "We integrate with Verra, Gold Standard, and other global registries to ensure all credits are authenticated." },
        { q: "How is greenwashing prevented?", a: "Through full visibility from origin to retirement, eliminating double-counting risks." }
      ]
    },
    {
      header: "Security & Compliance",
      items: [
        { q: "Is the platform audit-ready?", a: "Yes. Every transaction generates an immutable audit trail for internal and external ESG reporting." }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      
     

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* --- CENTRAL HEADING --- */}
        <div className="text-center mb-16 max-w-3xl">
          
          <h1 className="text-secondary font-black text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Market <br />
            <span className="text-primary-gradient italic tracking-normal">Clarity.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            Restoring confidence in corporate climate action through verified data and straightforward answers.
          </p>
        </div>

        {/* --- FAQ CATEGORIES --- */}
        <div className="max-w-4xl w-full">
          {categories.map((cat, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                <div className="w-8 h-px bg-primary/20" />
                {cat.header}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item, idx) => (
                  <details 
                    key={idx} 
                    className="group border border-white/60 rounded-[2rem] bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-primary/5"
                  >
                    <summary className="p-8 cursor-pointer list-none flex justify-between items-center group-open:pb-4 transition-all">
                      <span className="text-secondary font-black text-xl tracking-tight pr-6">
                        {item.q}
                      </span>
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-open:bg-primary group-open:text-white transition-all">
                        <ChevronDown className="group-open:rotate-180 transition-transform" size={20} />
                      </div>
                    </summary>
                    <div className="px-8 pb-8 text-gray-500 font-medium text-lg leading-relaxed">
                      <div className="w-full h-px bg-secondary/5 mb-6" />
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- SUPPORT CTA --- */}
        <div className="w-full max-w-4xl mt-12 p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden text-center">
          <div className="relative z-10">
            <h3 className=" font-black text-xs uppercase tracking-[0.4em] mb-4">Direct Connect</h3>
            <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Was your question not addressed?</p>
            <p className="text-white/70 mb-8 max-w-lg mx-auto font-medium">
              Our infrastructure specialists are committed to providing the clarity needed for multinational climate action.
            </p>
            <a 
              href="mailto:support@troo.earth" 
              className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-white hover:text-secondary transition-all active:scale-95"
            >
              Contact Support
              <Zap size={16} className="text-accent group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;