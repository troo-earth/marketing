// src/App.tsx

/* ---------- UI Shell ---------- */
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/footer";

/* ---------- Sections ---------- */
import LandingPage from "./components/pages/LandingPage";
import UnifiedCapabilities from "./components/pages/UnifiedCapabilities";
import TeamAndOpportunity from "./components/pages/TeamAndOpportunity";
import Contact from "./components/pages/Contact";

import VisionMission from "./components/pages/Vision&Mission";
/**
 * Troo.earth Marketing Root
 * A high-integrity, single-page enterprise experience.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./components/pages/Marketplace";
import ScrollToTop from "./components/utils/ScrollToTop";
import TermsAndConditions from "./components/pages/TermsAndCondition";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import FAQ from "./components/pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[var(--background-image-main-gradient)]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Landing Flow */}
            <Route path="/" element={
              <>
                <LandingPage />
                <UnifiedCapabilities />
                <TeamAndOpportunity />
                <Contact />
              </>
            } />
            {/* Standalone Vision Page */}
            <Route path="/vision-mission" element={<VisionMission />} />
            {/* Marketplace Coming Soon Page */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;