import {
  ShieldCheck,
  FileText,
  FileSearch,
  Fingerprint,
  CreditCard,
  RefreshCcw,
  Ban,
  UserMinus,
  ShieldAlert,
  Shield,
  CloudLightning,
  Edit3,
  Zap,
  AlertCircle,
  Gavel,
} from "lucide-react";

const TermsAndConditions = () => {
  const legalPoints = [
    {
      title: "1. Acceptance of Terms",
      icon: <FileText size={20} />,
      text: "By accessing troo.earth, you agree to these Terms and Conditions. If you do not agree, you should discontinue use of the platform.",
    },
    {
      title: "2. Platform Description",
      icon: <Zap size={20} />,
      text: "troo.earth is an early-stage digital platform exploring tools and workflows related to environmental impact and sustainability. Platform features are under active development and may change or be discontinued at any time.",
    },
    {
      title: "3. Definitions",
      icon: <FileSearch size={20} />,
      text: "Certain terms used on the platform may be defined or refined over time as features evolve. Definitions provided are indicative and not exhaustive.",
    },
    {
      title: "4. User Responsibilities",
      icon: <ShieldCheck size={20} />,
      text: "Users agree to provide accurate information to the best of their knowledge and to use the platform in a lawful and responsible manner.",
    },
    {
      title: "5. Intellectual Property",
      icon: <Fingerprint size={20} />,
      text: "All content, software, designs, and functionality available on troo.earth are owned by the company unless otherwise stated. Unauthorized use is prohibited.",
    },
    {
      title: "6. Limitation of Liability",
      icon: <AlertCircle size={20} />,
      text: "The platform is provided on an experimental and 'as is' basis. We are not responsible for decisions, outcomes, or losses resulting from use of the platform.",
    },
    {
      title: "7. Payments & Pricing",
      icon: <CreditCard size={20} />,
      text: "Any pricing, payment mechanisms, or commercial terms displayed on the platform are indicative only and may change as the product evolves.",
    },
    {
      title: "8. Refunds",
      icon: <RefreshCcw size={20} />,
      text: "Refund eligibility, if applicable, will be evaluated on a case-by-case basis. No guarantees are made at this stage of product development.",
    },
    {
      title: "9. Prohibited Use",
      icon: <Ban size={20} />,
      text: "Users must not misuse the platform, attempt to disrupt functionality, provide misleading information, or engage in unlawful or harmful activities.",
    },
    {
      title: "10. Account Suspension or Termination",
      icon: <UserMinus size={20} />,
      text: "We may suspend or terminate access to the platform at our discretion, particularly in cases of misuse, security concerns, or violation of these Terms.",
    },
    {
      title: "11. Disclaimer",
      icon: <ShieldAlert size={20} />,
      text: "We make no guarantees regarding availability, accuracy, reliability, or future continuity of the platform or its features.",
    },
    {
      title: "12. Indemnification",
      icon: <Shield size={20} />,
      text: "Users agree to hold troo.earth harmless from claims arising out of misuse of the platform or violation of these Terms.",
    },
    {
      title: "13. Dispute Resolution",
      icon: <Gavel size={20} />,
      text: "In the event of a dispute, parties agree to attempt resolution through informal discussion before pursuing other remedies.",
    },
    {
      title: "14. Force Majeure",
      icon: <CloudLightning size={20} />,
      text: "We are not liable for delays or failures caused by circumstances beyond our reasonable control, including technical outages or external disruptions.",
    },
    {
      title: "15. Changes to Terms",
      icon: <Edit3 size={20} />,
      text: "These Terms may be updated from time to time as the platform develops. Continued use indicates acceptance of the latest version.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center">
        {/* --- CENTRAL HEADING --- */}
        <div className="text-center mb-20 max-w-3xl">
          <h1 className="text-secondary font-black text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Terms & <br />
            <span className="text-primary-gradient italic tracking-normal">
              Conditions.
            </span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            The legal infrastructure supporting verified climate impact. These
            terms establish the framework for high-integrity environmental asset
            management.
          </p>
        </div>

        {/* --- LEGAL SECTIONS --- */}
        <div className="max-w-4xl w-full space-y-8">
          {legalPoints.map((point, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {point.icon}
                </div>
                <h2 className="text-secondary font-black text-xl tracking-tight">
                  {point.title}
                </h2>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed pl-14">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* --- METADATA FOOTER --- */}
        <div className="w-full max-w-4xl mt-20 p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <p className=" font-black text-xs uppercase tracking-[0.4em] mb-4">
                Official Notice
              </p>
              <p className="text-2xl font-black tracking-tighter leading-tight mb-2">
                Singapore Jurisdiction
              </p>
              <p className="text-white/60 text-sm font-medium">
                Governed by the laws of Singapore for global enterprise
                transparency.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest ">
                Key Dates
              </p>
              <p className="text-sm font-medium">
                <strong>Effective:</strong> January 16, 2026
              </p>
              <p className="text-sm font-medium">
                <strong>Last Updated:</strong> January 16, 2026
              </p>
              <p className="text-sm font-medium pt-2 border-t border-white/10">
                <strong>Support:</strong>{" "}
                <a href="mailto:legal@troo.earth" className=" hover:underline">
                  support@troo.earth
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
