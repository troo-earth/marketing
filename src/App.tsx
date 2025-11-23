// src/App.tsx
import Navbar from './components/ui/Navbar';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <>
      <Navbar />

      {/* Hero section with your gradient */}
      <main className="bg-main-gradient px-10 pt-40 relative overflow-hidden">
        <LandingPage />
      </main>
    </>
  );
}

export default App;