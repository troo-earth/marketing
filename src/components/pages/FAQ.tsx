import { ChevronDown, Zap } from "lucide-react";

const FAQ = () => {
  const categories = [
    {
      header: "Getting Started",
      items: [
        {
          q: "What is troo.earth?",
          a: "troo.earth is a carbon credit marketplace under development, along with tools designed to help users discover, manage, and interact with carbon credit–related activities. Features and scope may evolve prior to launch.",
        },
        {
          q: "Who can use the platform?",
          a: "The platform is intended for organizations interested in participating in a carbon credit marketplace. Access rules may be refined as the product matures.",
        },
        {
          q: "How do I create an account?",
          a: "Users will be able to create an account by signing up directly on the marketplace once it launches. The signup flow and account features are still being finalized.",
        },
      ],
    },
    {
      header: "Marketplace & Tools",
      items: [
        {
          q: "What can I do on the marketplace?",
          a: "The marketplace is being built to support carbon credit–related interactions and tooling. Specific actions and workflows may change as development progresses.",
        },
        {
          q: "Is the marketplace live?",
          a: "No. The marketplace is currently under development and not yet publicly launched.",
        },
        {
          q: "Will activity history be available?",
          a: "The platform may display activity or usage history where applicable. The format and availability of such information may change over time.",
        },
      ],
    },
    {
      header: "Pricing & Access",
      items: [
        {
          q: "Will there be fees?",
          a: "Pricing and fee structures are still being explored. Any information shown prior to launch should be considered indicative and subject to change.",
        },
        {
          q: "Are there minimum usage requirements?",
          a: "There are currently no fixed minimum requirements. These may be introduced or adjusted after launch.",
        },
      ],
    },
    {
      header: "Data & Security",
      items: [
        {
          q: "How is user data handled?",
          a: "User data is used to support platform functionality and improve the product. Data handling practices may evolve as features are finalized.",
        },
        {
          q: "How secure is the platform?",
          a: "Reasonable measures are taken to protect the platform and user information. Security practices are actively evolving during development.",
        },
      ],
    },
    {
      header: "Product Status",
      items: [
        {
          q: "Can features change after launch?",
          a: "Yes. As an early-stage product, features, workflows, and policies may change based on user feedback and ongoing development.",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito pt-40 pb-20 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center">
        {/* --- CENTRAL HEADING --- */}
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-secondary font-black text-[42px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tighter mb-6">
            Market <br />
            <span className="text-primary-gradient italic tracking-normal">
              Clarity.
            </span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            Restoring confidence in corporate climate action through verified
            data and straightforward answers.
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
                        <ChevronDown
                          className="group-open:rotate-180 transition-transform"
                          size={20}
                        />
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
            <h3 className=" font-black text-xs uppercase tracking-[0.4em] mb-4">
              Direct Connect
            </h3>
            <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
              Was your question not addressed?
            </p>
            <p className="text-white/70 mb-8 max-w-lg mx-auto font-medium">
              Our infrastructure specialists are committed to providing the
              clarity needed for multinational climate action.
            </p>
            <a
              href="mailto:support@troo.earth"
              className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-white hover:text-secondary transition-all active:scale-95"
            >
              Contact Support
              <Zap
                size={16}
                className="text-accent group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
