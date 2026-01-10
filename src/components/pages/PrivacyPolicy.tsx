import { Lock, ShieldCheck, Eye, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "1. Data Collection and Purpose",
      icon: <Database size={20} />,
      content: "We collect enterprise data necessary to facilitate carbon credit procurement and retirement. This includes organizational details required for direct data bridges with global registries and exchanges to ensure every credit is authenticated and traceable."
    },
    {
      title: "2. Governance and Security",
      icon: <Lock size={20} />,
      content: "Troo.earth operates under strict principles of data security and accountability. We utilize advanced encryption and follow global market standards to protect your information and maintain transparency across every transaction."
    },
    {
      title: "3. Transparency and Disclosure",
      icon: <Eye size={20} />,
      content: "Every action on our platform is recorded with full visibility from project origin to retirement. We share data with recognized registries and market infrastructure providers only to the extent necessary to fulfill compliance and audit-ready requirements."
    },
    {
      title: "4. Data Integrity",
      icon: <ShieldCheck size={20} />,
      content: "Our technology architecture uses secure APIs and registry-connected data systems to maintain data integrity. We ensure accurate credit status at every stage of its lifecycle, protecting organizations from ambiguity and greenwashing."
    }
  ];

  return (
    /* Standardized padding: px-6 md:px-12 lg:px-20 xl:px-24 */
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
           
          <h1 className="text-secondary font-black text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Privacy & <br />
            <span className="text-primary-gradient italic tracking-normal">Data Governance.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            At Troo.earth, trust is central to effective climate action. We manage enterprise data with the rigor expected by multinational organizations.
          </p>
        </div>

        {/* Policy Grid - Balanced Center Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {policies.map((policy, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {policy.icon}
                </div>
                <h2 className="text-secondary font-black text-xl tracking-tight">{policy.title}</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Footer - Centralized */}
        <div className="w-full max-w-4xl mt-20 p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden text-center">
          <div className="relative z-10">
            <h3 className=" font-black text-xs uppercase tracking-[0.4em] mb-4">Data Inquiries</h3>
            <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Questions regarding enterprise data?</p>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Our team is committed to transparency and measurable results for organizations seeking impactful solutions.
            </p>
            <a href="mailto:partnerships@troo.earth" className=" font-bold hover:underline decoration-2 underline-offset-8 transition-all">
              partnerships@troo.earth
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;