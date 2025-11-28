// src/App.tsx
import Navbar from './components/ui/Navbar';
import LandingPage from './components/pages/LandingPage';
import EnterpriseHero from './components/pages/EnterpriseHero';
import PartnersSection from './components/pages/Partners';
import PlatformActionsSection from './components/pages/PlatformActions';
import MeetTheTeam from './components/pages/MeetTeam';

function App() {
  return (
    <>
      <Navbar />

      {/* Hero section with your gradient */}
      <main className="bg-main-gradient px-10 pt-40 relative overflow-hidden">
        <LandingPage />
      </main>
      <EnterpriseHero />
      <PartnersSection />
      <PlatformActionsSection />
      <MeetTheTeam />
    </>
  );
}

export default App;