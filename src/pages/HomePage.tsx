import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import StatsStrip from '../sections/StatsStrip';
import HowItWorks from '../sections/HowItWorks';
import FeatureGrid from '../sections/FeatureGrid';
import Roadmap from '../sections/Roadmap';
import RanksSection from '../sections/RanksSection';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-app-bg">
      <Navbar />
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <FeatureGrid />
      <Roadmap />
      <RanksSection />
      <Footer />
    </div>
  );
}
