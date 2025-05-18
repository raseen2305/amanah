import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const pharmaceuticalCategories = [
  {
    id: 'pharma-cat-1',
    title: 'CENTRAL VENOUS ACCESS AND DIALYSIS',
    description: "Advanced catheter systems designed for reliable central venous access and efficient long-term dialysis treatment.",
    image: '/placeholder.svg',
    productCount: 6,
    color: 'bg-pharma-blue'
  },
  {
    id: 'pharma-cat-2',
    title: 'INFUSION and TRANSFUSION',
    description: "Sterile medical devices enabling safe, controlled infusion and transfusion of fluids and blood products.",
    image: '/placeholder.svg',
    productCount: 18,
    color: 'bg-pharma-blue/90'
  },
  {
    id: 'pharma-cat-3',
    title: 'UROLOGY',
    description: "Specialized medical devices designed for effective diagnosis, drainage, and treatment in urological procedures.",
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/80'
  },
  {
    id: 'pharma-cat-4',
    title: 'ANESTHESIA',
    description: "Premium-quality anesthesia solutions engineered for precision, patient comfort, and optimal performance in every procedure.",
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/70'
  },
  {
    id: 'pharma-cat-5',
    title: 'SURGERY',
    description: "Innovative surgical products crafted for precision, safety, and enhanced outcomes across diverse medical procedures.",
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/70'
  },
  {
    id: 'pharma-cat-6',
    title: 'Gastroenterology',
    description: "Advanced gastroenterology solutions designed for accurate diagnosis, efficient treatment, and patient comfort in GI care.",
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/70'
  },
  {
    id: 'pharma-cat-7',
    title: 'MISCELLENEOUS',
    description: "Versatile medical essentials thoughtfully designed to support various procedures across multiple healthcare specialties.",
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/70'
  }
];

const CategoryCard = ({ id, title, description, image, productCount, color }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className={`absolute inset-0 ${color} opacity-70 transition-opacity ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/30">
            {productCount} Products
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Button 
          variant="outline" 
          className="w-full border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white"
          onClick={() => navigate(`/medical-products?category=${id}`)}
        >
          Explore Category
        </Button>
      </div>
    </div>
  );
};

// Add this import at the top of the file
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PharmaceuticalCategories = () => {
  const categoriesRef = useRef(null);
  const isInView = useInView(categoriesRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id = "pharmaceutical" className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="container mx-auto px-4">
    {/* Back Button */}
    <div className="flex justify-start mb-6">
      <Link 
        to="/" 
        className="text-sm font-medium text-pharma-blue hover:underline hover:text-pharma-blue/80 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
      
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pharma-blue mb-4">Pharmaceutical Product Categories</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our pharmaceutical product categories to find high-quality solutions for healthcare professionals.
            </p>
          </div>
          </div>
          <motion.div 
            ref={categoriesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {pharmaceuticalCategories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-12">
            <Link to="/">
              <Button 
                variant="outline" 
                className="group border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white"
              >
                Home
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PharmaceuticalCategories;