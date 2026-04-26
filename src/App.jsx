import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import BoldApproaches from './components/BoldApproaches';
import SustainingChange from './components/SustainingChange';
import LatestAtEGov from './components/LatestAtEGov';
import Supporters from './components/Supporters';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LatestAtEGov />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
