import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div id ="home" className="relative min-h-[90vh] bg-gradient-to-br from-pharma-blue/95 to-pharma-teal/90 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full p-8 rounded-xl shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-2 right-4 text-xl font-bold text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-pharma-blue mb-4">ABOUT US</h2>
            <p className="mb-4 text-gray-700">
              AMANAH CHEMPHARM is one of the largest medical suppliers, wholesalers and traders of a commendable range of All Types of Surgical Disposables products, Protective Kits, Adult Diapers, Pant Style Diapers, Face Masks, Caps, & Underpads. The company works for healthcare by developing innovative technology, services and solutions that help advance both clinical therapy for patients and clinical process for healthcare providers.
            </p>
            <p className="mb-4 text-gray-700">
              At AMANAH CHEMPHARM we have a highly developed state-of-the-art infrastructure, which is appreciated all over the market. The facility is equipped with modern technology and advanced machinery. For the purpose of attaining a smooth working environment, we have divided our infrastructure in several units lead by trained and skilled professionals work efficiently and dedicatedly to achieve various organizational goals. In addition to this, the products are delivered to clients with high safety and punctuality.
            </p>
            <p className="text-gray-700">
              Our highly advanced, cutting-edge infrastructure is valued throughout the market. The facility has cutting-edge machinery and contemporary technology. In order to create a seamless working environment, we have separated our infrastructure into multiple units, each of which is run by a team of highly qualified professionals who work diligently and effectively to accomplish a range of organizational objectives.
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Advanced Solutions for <span className="text-pharma-light">Chemical & Medical</span> Industries
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              AMANAH CHEMPHARM is one of the largest medical suppliers, wholesalers and traders of a commendable range of All Types of Surgical Disposables products, Protective Kits, Adult Diapers, Pant Style Diapers, Face Masks, Caps, & Underpads. The company works for healthcare by developing innovative technology, services and solutions that help advance both clinical therapy for patients and clinical process for healthcare providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-pharma-blue hover:bg-pharma-light"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
              </Button>
              <Button 
                size="lg" 
                className="bg-pharma-light text-pharma-blue hover:bg-white border-2 border-white"
                onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Make an Enquiry
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-pharma-blue hover:bg-pharma-light border-2 border-white"
                onClick={() => setShowAbout(true)}
              >
                About Us
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-pharma-teal/20 rounded-full blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Pharmaceutical Laboratory" 
                className="relative z-10 max-w-full object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                style={{ height: '400px', width: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
