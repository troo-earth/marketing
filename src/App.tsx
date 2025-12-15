// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import LandingPage from './components/pages/LandingPage';
import EnterpriseHero from './components/pages/EnterpriseHero';
import PartnersSection from './components/pages/Partners';
import PlatformActionsSection from './components/pages/PlatformActions';
import MeetTheTeam from './components/pages/MeetTeam';
import Contact from './components/pages/Contact';
import Footer from './components/ui/footer';
import PricingPage from './components/pages/Pricing';
import PaymentSuccessPage from './components/pages/PaymentSuccess';

function HomePage() {
  return (
    <>
      {/* Hero section with your gradient */}
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
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>

        {/* Footer can stay here if you want it on every page */}
        {/* Or move it inside HomePage if you only want it on home */}
      </div>
    </Router>
  );
}

export default App;
