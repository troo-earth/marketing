// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/footer";

import LandingPage from "./components/pages/LandingPage";
import EnterpriseHero from "./components/pages/EnterpriseHero";
import PartnersSection from "./components/pages/Partners";
import PlatformActionsSection from "./components/pages/PlatformActions";
import MeetTheTeam from "./components/pages/MeetTeam";
import Contact from "./components/pages/Contact";

import PricingPage from "./components/pages/Pricing";
import PaymentSuccessPage from "./components/pages/PaymentSuccess";

import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";

/* ---------------- Home / Marketing Page ---------------- */

const HomePage = () => (
  <>
    <main className="bg-main-gradient px-10 pt-40 relative overflow-hidden">
      <LandingPage />
    </main>

    <EnterpriseHero />
    <PartnersSection />
    <PlatformActionsSection />
    <MeetTheTeam />
    <Contact />

    <div className="bg-main-gradient px-10 pt-10 relative overflow-hidden">
      <Footer />
    </div>
  </>
);

/* ---------------- App ---------------- */

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
