// src/components/LandingPage.tsx
import { Globe } from '../ui/globe';

const LandingPage = () => {
    return (
        <div>
            <div className="text-center relative z-10">
                <h1 className="text-6xl font-semibold text-primary mb-10">
                    Powering <span className="font-extrabold">Enterprise-Grade</span> Climate Impact
                </h1>

                <p className="text-lg text-secondary max-w-5xl mx-auto">
                    The unified infrastructure for high-integrity carbon credit management, built for total transparency,
                    operational clarity, and effortless integration with Xpansiv Connect.
                </p>

                {/* CTA buttons */}
                <div className="flex justify-center space-x-4 mt-8">
                    <a
                        href="#learn-more"
                        className="px-6 py-3 text-secondary font-medium hover:text-white transition-colors"
                    >
                        Learn More
                    </a>

                    <a
                        href="#get-started"
                        className="px-6 py-3 bg-primary text-white rounded-4xl font-medium hover:bg-secondary transition-colors flex items-center"
                    >
                        Get Started <span className="ml-2 text-2xl">→</span>
                    </a>
                </div>
            </div>

            {/* --- HALF GLOBE SECTION --- */}
            <div className="relative mt-20 h-[500px] overflow-hidden pointer-events-none">
                <Globe
                    className="
            absolute
            left-1/2 -translate-x-1/2
            top-40
            scale-[1.75]           /* <<< BIGGER globe */
            w-[1000px]             /* <<< Forces large rendered canvas size */
          "
                />
            </div>
        </div>
    );
};

export default LandingPage;