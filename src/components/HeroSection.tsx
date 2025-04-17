
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-navy to-dark-blue"
      style={{
        backgroundImage: "linear-gradient(rgba(26, 31, 44, 0.85), rgba(17, 24, 39, 0.95)), url('/lovable-uploads/a228b06f-0bbb-4a8a-9a17-b933f5388c75.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Smart technology</span>
              <br />
              <span className="text-white">for digital guest experiences</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto lg:mx-0">
              Transformamos la experiencia del entretenimiento en los hoteles con nuestra plataforma digital inteligente diseñada para huéspedes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#soluciones" className="btn-primary flex items-center justify-center gap-2">
                Explorar Soluciones <ArrowRight size={18} />
              </a>
              <a href="#demo" className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-white/10">
                Ver Demo
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/456212ea-4b2d-455c-9ff3-ab5390f59097.png" 
              alt="Smart Hotel Room Interface" 
              className="rounded-xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
