
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">
            <span className="text-light-blue">Smart</span>Room
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#soluciones" className="nav-link">Soluciones</a>
          <a href="#caracteristicas" className="nav-link">Características</a>
          <a href="#demo" className="nav-link">Demo</a>
          <a href="#contacto" className="btn-primary">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#inicio" className="nav-link px-4 py-2 hover:bg-navy/50 rounded" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#soluciones" className="nav-link px-4 py-2 hover:bg-navy/50 rounded" onClick={() => setIsMenuOpen(false)}>Soluciones</a>
            <a href="#caracteristicas" className="nav-link px-4 py-2 hover:bg-navy/50 rounded" onClick={() => setIsMenuOpen(false)}>Características</a>
            <a href="#demo" className="nav-link px-4 py-2 hover:bg-navy/50 rounded" onClick={() => setIsMenuOpen(false)}>Demo</a>
            <a href="#contacto" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
