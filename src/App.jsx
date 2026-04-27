import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LatestAtEGov from './components/LatestAtEGov';
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
