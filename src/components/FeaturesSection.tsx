
import { Check } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="caracteristicas" className="section bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Características Principales
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Nuestra plataforma ofrece una experiencia completa para los huéspedes del hotel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="/lovable-uploads/1f9dcd02-d4dd-4a5d-9bc4-f23ada53d992.png" 
              alt="SmartRoom Interface" 
              className="rounded-xl shadow-xl border-4 border-navy"
            />
          </div>
          
          <div>
            <ul className="space-y-5">
              {[
                "Interfaz personalizable y marca blanca para hoteles",
                "Integración con servicios de streaming populares",
                "Información en tiempo real sobre vuelos y clima",
                "Promoción de servicios y amenidades del hotel",
                "Menú digital del restaurante con pedidos a la habitación",
                "Guía turística local con recomendaciones personalizadas",
                "Soporte multilingüe para huéspedes internacionales",
                "Dashboard para administración y análisis de uso"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-light-blue rounded-full p-1 mt-0.5">
                    <Check size={16} className="text-white" />
                  </span>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
