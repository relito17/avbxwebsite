import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;