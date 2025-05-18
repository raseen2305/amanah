import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const chemicalCategories = [
  
  {
    id: 'chem-cat-1',
    title: 'Industrial Solvents',
    description: 'High-quality solvents for industrial applications with consistent performance.',
    image: '/placeholder.svg',
    productCount: 14,
    color: 'bg-pharma-teal'
  },
  {
    id: 'chem-cat-2',
    title: 'Laboratory Reagents',
    description: 'Precision-grade reagents for accurate laboratory analysis and research.',
    image: '/placeholder.svg',
    productCount: 12,
    color: 'bg-pharma-teal/90'
  },

];

const CategoryCard = ({ id, title, description, image, productCount, color }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id = "chemica" className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full transform hover:-translate-y-1 hover:shadow-xl"
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
          className="w-full border-pharma-teal text-pharma-teal hover:bg-pharma-teal hover:text-white"
          onClick={() => navigate(`/chemical-products?category=${id}`)}
        >
          Explore Category
        </Button>
      </div>
    </div>
  );
};

const ChemicalCategories = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Back to Home Link */}
          <div className="mb-6">
            <Link to="/" className="text-pharma-teal hover:underline text-xl flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </div>

          {/* About Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pharma-teal mb-4">Chemical Products Categories</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-justify leading-relaxed">
              AMANAH CHEMPHARM is changing the paradigm in the industries we serve, developing new ways to help customers drive operating efficiencies. We are serving markets around the world, with an established presence in the Middle East, Africa, and Asia Pacific, demonstrating our commitment to being a strong and reliable partner for our customers. We provide unique business solutions to our clients. Our strengths are our people and a network of trusted partners with whom we design and deliver solutions for Oil & Gas and Industrial applications.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-justify leading-relaxed">
              A significant part of our business involves providing a broad range of chemical solutions to our clients. For example, we aid with the selection of optimal chemical technologies, establish arrangements for the reliable just-in-time delivery of the services, and provide support with the accurate application of drilling and production chemicals. AMANAH CHEMPHARM strives to provide quality, value, and technology-based solutions that our clients can depend on. Superior customer service quality remains a critical element of our mission and success.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-justify leading-relaxed">
              We seek to help our customers around the world solve tough challenges in ways other companies cannot. Our customers rely on us to help them drive efficiencies, reduce operating costs, and meet or exceed their goals.
            </p>
          </div>
          {/* End of About Section */}
          
          <motion.div
            ref={categoriesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {chemicalCategories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-12">
            <Link to="/chemical-products">
              <Button
                variant="outline"
                className="group border-pharma-teal text-pharma-teal hover:bg-pharma-teal hover:text-white"
              >
                View All Chemical Products
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

export default ChemicalCategories;
