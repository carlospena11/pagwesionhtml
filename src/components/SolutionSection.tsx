
import { Tv, Wifi, Hotel, Info, Calendar, Globe } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Tv size={32} className="text-light-blue" />,
      title: "Entretenimiento Personalizado",
      description: "Acceso a plataformas de streaming como Netflix, Disney+, Prime Video y más."
    },
    {
      icon: <Wifi size={32} className="text-light-blue" />,
      title: "Conectividad Total",
      description: "Wi-Fi integrado y acceso sencillo a todos los servicios digitales del hotel."
    },
    {
      icon: <Hotel size={32} className="text-light-blue" />,
      title: "Experiencia de Hotel",
      description: "Información sobre servicios, amenidades y promociones especiales del hotel."
    },
    {
      icon: <Info size={32} className="text-light-blue" />,
      title: "Información Local",
      description: "Descubre atracciones turísticas, restaurantes y actividades cercanas."
    },
    {
      icon: <Calendar size={32} className="text-light-blue" />,
      title: "Estado de Vuelos",
      description: "Consulta en tiempo real el estado de tus vuelos y planifica mejor tu viaje."
    },
    {
      icon: <Globe size={32} className="text-light-blue" />,
      title: "Experiencia Internacional",
      description: "Interfaz multilingüe adaptada a huéspedes de cualquier nacionalidad."
    },
  ];

  return (
    <section id="soluciones" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy">Hospitality</span> 
            <span className="text-light-blue"> SmartRoom</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Una solución de gestión diseñada para transformar la experiencia digital del huésped en habitaciones de hotel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-panel flex flex-col items-start">
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
