import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promise from './components/Promise';
import About from './components/About';
import Shop from './components/Shop';

function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-t from-purple-50 to-white text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} ELOURA. Pastel dreams, elegant you.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Promise />
        <About />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
