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
      text: "By accessing troo.earth, you agree to these Terms and Conditions. If you disagree with any part, you may not use our services.",
    },
    {
      title: "2. Services Description",
      icon: <Zap size={20} />,
      text: "troo.earth provides a digital marketplace connecting enterprises to verified carbon credits through direct registry integrations. We facilitate buying, selling, transferring, and retiring credits—we do not issue or verify the underlying projects.",
    },
    {
      title: "3. Definitions",
      icon: <FileSearch size={20} />,
      text: "Key terms including 'Registry Integration', 'Credit Retirement', and 'Audit Trail' are defined within our master service agreement.",
    },
    {
      title: "4. User Obligations",
      icon: <ShieldCheck size={20} />,
      text: "Users must provide accurate organizational data and comply with local environmental regulations.",
    },
    {
      title: "5. Intellectual Property",
      icon: <Fingerprint size={20} />,
      text: "The troo.earth platform, its direct data bridges, and proprietary verification algorithms remain the sole property of the company.",
    },
    {
      title: "6. Limitation of Liability",
      icon: <AlertCircle size={20} />,
      text: "Services are provided 'as is'. We are not liable for market volatility or changes in third-party registry standards (e.g., Verra, Gold Standard).",
    },
    {
      title: "7. Payment & Pricing",
      icon: <CreditCard size={20} />,
      text: "All prices are quoted in USD unless otherwise specified. Payment terms are Net 30 for enterprise accounts. Late payments may incur a 1.5% monthly interest charge.",
    },
    {
      title: "8. Refund Policy",
      icon: <RefreshCcw size={20} />,
      text: "Due to the nature of carbon credit transactions, sales are final once credits are transferred or retired. Refunds may be considered only in cases of platform error or registry failure.",
    },
    {
      title: "9. Prohibited Activities",
      icon: <Ban size={20} />,
      text: "Users may not: (a) attempt to manipulate pricing, (b) use the platform for fraudulent purposes, (c) resell credits with false claims, or (d) interfere with platform security.",
    },
    {
      title: "10. Account Termination",
      icon: <UserMinus size={20} />,
      text: "We reserve the right to suspend accounts that violate terms or engage in fraudulent activity. Users may close accounts with 30 days written notice.",
    },
    {
      title: "11. Disclaimer of Warranties",
      icon: <ShieldAlert size={20} />,
      text: "Services are provided 'AS IS' without warranties of any kind. We do not guarantee uninterrupted access or specific market prices. Registry standards may change independently.",
    },
    {
      title: "12. Indemnification",
      icon: <Shield size={20} />,
      text: "Users agree to indemnify troo.earth against claims arising from misuse of the platform, false representations, or violations of environmental regulations.",
    },
    {
      title: "13. Dispute Resolution",
      icon: <Gavel size={20} />,
      text: "Disputes shall first undergo good-faith mediation. If unresolved, disputes will be settled by binding arbitration in Singapore, governed by Singapore law.",
    },
    {
      title: "14. Force Majeure",
      icon: <CloudLightning size={20} />,
      text: "We are not liable for delays or failures due to circumstances beyond reasonable control, including registry outages, natural disasters, or regulatory changes.",
    },
    {
      title: "15. Changes to Terms",
      icon: <Edit3 size={20} />,
      text: "We may modify these Terms with 30 days notice to registered users. Continued use after changes constitutes acceptance of updated terms.",
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
