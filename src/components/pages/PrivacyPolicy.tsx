import { Database, Zap, Lock, Globe, Clock, Share2, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  // Array of policy sections using the Component reference for the icons
  const sections = [
    {
      title: "1. Information We Collect",
      icon: Database,
      content:
        "We may collect basic personal details (such as name, email address, and organization), limited usage information, and technical metadata (such as device and browser information) to support account access and platform functionality."
    },
    {
      title: "2. How We Use Your Information",
      icon: Zap,
      content:
        "Information is used to operate and improve the platform, communicate with users regarding their accounts, and understand how features are being used as the product evolves."
    },
    {
      title: "3. Data Access & User Control",
      icon: Globe,
      content:
        "Users may request access to, correction of, or deletion of their personal information. As the product is in an early stage, data handling practices may evolve over time."
    },
    {
      title: "4. Data Security",
      icon: Lock,
      content:
        "We take reasonable steps to protect user information and reduce the risk of unauthorized access. Security measures and technical architecture are under active development and may change as the platform matures."
    },
    {
      title: "5. Cookies & Tracking",
      icon: Database,
      content:
        "Basic cookies or similar technologies may be used to support essential functionality and understand general usage patterns. Users can manage cookies through their browser settings."
    },
    {
      title: "6. Data Retention",
      icon: Clock,
      content:
        "Information is retained only for as long as necessary to support platform operations or user accounts. Retention practices may be updated as product requirements evolve."
    },
    {
      title: "7. External Tools & Integrations",
      icon: Share2,
      content:
        "The platform may rely on external tools or infrastructure to function effectively. Specific integrations are not finalized and may change as the product develops."
    },
    {
      title: "8. Contact",
      icon: Shield,
      content:
        "For questions, concerns, or requests related to privacy, contact support@troo.earth. As an early-stage product, response timelines and processes may evolve."
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      
     

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* --- CENTRAL HEADING --- */}
        <div className="text-center mb-20 max-w-3xl">
      
          <h1 className="text-secondary font-black text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Privacy & <br />
            <span className="text-primary-gradient italic tracking-normal">Data Governance.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            At troo.earth, trust is central to effective climate action. We manage enterprise data with the rigor and transparency expected by global organizations.
          </p>
          <p className="mt-4 text-gray-400 font-bold text-sm uppercase tracking-widest">
            Last Updated: January 16, 2026
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className=" min-w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-secondary font-black text-xl tracking-tight">{sec.title}</h3>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {sec.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact & Changes Block */}
        <div className="w-full max-w-4xl mt-20 p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <p className=" font-black text-xs uppercase tracking-[0.4em] mb-4">Policy Updates</p>
              <p className="text-2xl font-black tracking-tighter leading-tight mb-4">Material Changes</p>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                We may update this policy periodically. Registered users will receive email notification 30 days prior to material changes taking effect.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-xs font-black uppercase tracking-widest  mb-4">Privacy Office</p>
              <p className="text-white font-medium mb-6">For inquiries regarding your data rights:</p>
              <a href="mailto:support@troo.earth" className=" font-bold text-md underline decoration-2 underline-offset-8 transition-all hover:text-accent">
                support@troo.earth
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;