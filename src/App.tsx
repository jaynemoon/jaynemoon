import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Case Study Pages
import NeuralStyleStudioCaseStudy from './pages/projects/NeuralStyleStudio';
import QuantumVizCaseStudy from './pages/projects/QuantumViz';
import AIDesignSystemCaseStudy from './pages/projects/AIDesignSystem';
import MusicSynthCaseStudy from './pages/projects/MusicSynth';
import BlockchainArtCaseStudy from './pages/projects/BlockchainArt';
import ARInteriorCaseStudy from './pages/projects/ARInterior';
import CollabPlatformCaseStudy from './pages/projects/CollabPlatform';
import SmartDashboardCaseStudy from './pages/projects/SmartDashboard';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Case Study Routes */}
            <Route path="projects/neural-style-studio" element={<NeuralStyleStudioCaseStudy />} />
            <Route path="projects/quantum-viz" element={<QuantumVizCaseStudy />} />
            <Route path="projects/ai-design-system" element={<AIDesignSystemCaseStudy />} />
            <Route path="projects/music-synth" element={<MusicSynthCaseStudy />} />
            <Route path="projects/blockchain-art" element={<BlockchainArtCaseStudy />} />
            <Route path="projects/ar-interior" element={<ARInteriorCaseStudy />} />
            <Route path="projects/collab-platform" element={<CollabPlatformCaseStudy />} />
            <Route path="projects/smart-dashboard" element={<SmartDashboardCaseStudy />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
