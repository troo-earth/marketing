// src/App.tsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* ---------- UI Shell ---------- */
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/footer";

/* ---------- Pages ---------- */
import LandingPage from "./components/pages/LandingPage";

import Contact from "./components/pages/Contact";
import PricingPage from "./components/pages/Pricing";
import PaymentSuccessPage from "./components/pages/PaymentSuccess";
import Solutions from "./components/pages/Solutions";
import Company from "./components/pages/Company";
import Marketplace from "./components/pages/Marketplace";

import UnifiedCapabilities from "./components/pages/UnifiedCapabilities";
import TeamAndOpportunity from "./components/pages/TeamAndOpportunity";


/* ---------- Layouts ---------- */

const MarketingLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const AuthLayout = () => <Outlet />;

/* ---------- Composite Pages ---------- */

const HomePage = () => (
  <>
    
    <LandingPage />    
    <UnifiedCapabilities />
    <TeamAndOpportunity />
    <Contact />
  </>
);

/* ---------- App Root ---------- */

function App() {
  return (
    <>
      {/* Global Toast System */}
      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "14px",
            fontWeight: 600,
            background: "#ffffff",
            color: "#0f172a",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          },
        }}
      />

      {/* Router */}
      <BrowserRouter>
        <Routes>
          {/* Marketing pages (with navbar & footer) */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>

          {/* Auth pages (no navbar/footer) */}
          <Route element={<AuthLayout />}>
            <Route path="/marketplace" element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
