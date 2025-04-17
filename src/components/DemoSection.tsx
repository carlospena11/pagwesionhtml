
import { useState } from "react";
import { Sun, CloudRain, Play, Menu as MenuIcon } from "lucide-react";

const DemoSection = () => {
  const [currentTime] = useState("9:36 am");
  const [temperature] = useState("24,5 °C");
  
  return (
    <section id="demo" className="section bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy">Experiencia</span> 
            <span className="text-light-blue"> Digital</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explora nuestra interfaz interactiva diseñada para transformar la experiencia del huésped
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* TV Frame */}
          <div className="bg-black rounded-3xl p-4 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-navy rounded-2xl overflow-hidden relative">
              
              {/* TV Interface */}
              <div className="absolute inset-0 p-6 flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-center">
                  <div className="w-20 h-8 bg-white/10 rounded-md"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{currentTime}</span>
                    <Sun className="text-yellow-400" size={20} />
                    <span className="text-white font-medium">{temperature}</span>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {/* Welcome Message */}
                  <div className="bg-white/95 rounded-xl p-4 flex flex-col">
                    <h3 className="font-playfair text-2xl text-navy mb-2">Bienvenido</h3>
                    <p className="text-sm text-gray-600">
                      Hospitality SmartRoom es una plataforma de gestión diseñada para transformar la experiencia del huésped en habitaciones de hotel. Esta plataforma inteligente permite a los huéspedes acceder a su contenido favorito, así como a información del hotel y recomendaciones, asegurando una estancia cómoda y sin problemas.
                    </p>
                  </div>
                  
                  {/* Flight Status */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/73b67897-ba06-4518-87e8-e91d6e3c1b18.png" 
                      alt="Flight Status" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                      <p className="text-white font-medium">Flight status</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <img 
                      src="/lovable-uploads/1f9dcd02-d4dd-4a5d-9bc4-f23ada53d992.png" 
                      alt="Hotel Experience" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
                      <p className="text-white text-xs md:text-sm text-center">Hotel Experience</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Menu" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
                      <p className="text-white text-xs md:text-sm text-center">Menu</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1607968565043-c15fad25ae9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Discover El Salvador" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
                      <p className="text-white text-xs md:text-sm text-center">Discover El Salvador</p>
                    </div>
                  </div>
                </div>
                
                {/* Streaming Services */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  <div className="bg-white rounded-md p-2 min-w-16 flex items-center justify-center">
                    <Play className="text-gray-800" size={20} />
                  </div>
                  <div className="bg-blue-600 rounded-md p-2 min-w-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PARA+</span>
                  </div>
                  <div className="bg-navy rounded-md p-2 min-w-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PRIME</span>
                  </div>
                  <div className="bg-blue-500 rounded-md p-2 min-w-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Disney+</span>
                  </div>
                  <div className="bg-green-500 rounded-md p-2 min-w-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Spotify</span>
                  </div>
                  <div className="bg-orange-500 rounded-md p-2 min-w-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">VIX+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Remote Control */}
          <div className="absolute -bottom-16 -right-16 hidden lg:block">
            <img 
              src="/lovable-uploads/5a32f103-3011-4f7b-9302-e0ec91eafd7a.png" 
              alt="Remote Control" 
              className="w-40 rotate-12 opacity-80"
            />
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Transformamos la experiencia del entretenimiento en los hoteles</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro sistema permite a los huéspedes disfrutar de una experiencia digital completa y personalizada durante su estancia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
