import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Pharmaceutical and chemical categories
const pharmaceuticalCategories = [
  {
    id: 'pharma-cat-1',
    title: 'Central Venous Access and Dialysis',
    description: 'Advanced surgical instruments designed for precision and patient safety.',
    image: '/placeholder.svg',
    productCount: 12,
    color: 'bg-pharma-blue'
  },
  {
    id: 'pharma-cat-2',
    title: 'Infusion and Transfusion',
    description: 'Cutting-edge diagnostic systems for accurate and timely medical assessments.',
    image: '/placeholder.svg',
    productCount: 15,
    color: 'bg-pharma-blue/90'
  },
  {
    id: 'pharma-cat-3',
    title: 'Urology',
    description: 'Essential products for patient monitoring and improved healthcare delivery.',
    image: '/placeholder.svg',
    productCount: 10,
    color: 'bg-pharma-blue/80'
  },
  {
    id: 'pharma-cat-4',
    title: 'Anesthesia',
    description: 'High-quality laboratory equipment for medical research and testing.',
    image: '/placeholder.svg',
    productCount: 13,
    color: 'bg-pharma-blue/70'
  }
];


const chemicalCategories = [
  {
    id: 'chem-cat-1',
    title: 'Industrial Solvents',
    description: 'High-quality solvents for industrial applications with consistent performance.',
    image: '/placeholder.svg',
    productCount: 14,
    color: 'bg-pharma-teal'
  },
  // {
  //   id: 'chem-cat-2',
  //   title: 'Laboratory Reagents',
  //   description: 'Precision-grade reagents for accurate laboratory analysis and research.',
  //   image: '/placeholder.svg',
  //   productCount: 12,
  //   color: 'bg-pharma-teal/90'
  // },
  {
    id: 'chem-cat-3',
    title: 'Chemical Catalysts',
    description: 'Advanced catalysts designed to accelerate and improve chemical reactions.',
    image: '/placeholder.svg',
    productCount: 8,
    color: 'bg-pharma-teal/80'
  },
  {
    id: 'chem-cat-4',
    title: 'Pharmaceutical Compounds',
    description: 'Ultra-pure compounds meeting strict pharmaceutical industry standards.',
    image: '/placeholder.svg',
    productCount: 10,
    color: 'bg-pharma-teal/70'
  }
];

const MainCategoryBox = ({
  title,
  description,
  image,
  color,
  buttonColor,
  totalProducts,
  navigateTo
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className={`absolute inset-0 ${color} opacity-70 transition-opacity ${isHovered ? 'opacity-90' : 'opacity-70'}`} />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-white/30">
            {totalProducts} Products
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={navigateTo}>
          <Button
            variant="outline"
            className={`w-full ${buttonColor} flex items-center justify-center gap-2`}
          >
            Explore Category
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const totalPharmaceuticalProducts = pharmaceuticalCategories.reduce((sum, cat) => sum + cat.productCount, 0);
  const totalChemicalProducts = chemicalCategories.reduce((sum, cat) => sum + cat.productCount, 0);

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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pharma-blue mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our comprehensive range of product categories to find solutions perfectly suited to your needs.
          </p>
        </div>

        <div ref={categoryRef}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            
            <section id="pharmaceutical" className="mt-1">
              <motion.div variants={item}>
                <MainCategoryBox
                title="Pharmaceutical Products"
                description="Advanced medical and healthcare products designed for hospitals and healthcare professionals."
                image="/placeholder.svg"
                color="bg-pharma-blue"
                buttonColor="border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white"
                totalProducts={totalPharmaceuticalProducts}
                navigateTo="/pharma-cat"
                />
                </motion.div>
                </section>
                
                <section id="chemical" className="mt-1">
                 <motion.div variants={item}>
                  <MainCategoryBox
                  title="Chemical Products"
                  description="High-quality chemical products for laboratory, industrial, and research applications."
                  image="/placeholder.svg"
                  color="bg-pharma-teal"
                  buttonColor="border-pharma-teal text-pharma-teal hover:bg-pharma-teal hover:text-white"
                  totalProducts={totalChemicalProducts}
                  navigateTo="/chem-cat"
                  />
                  </motion.div>
                  </section>
                  
                  </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
