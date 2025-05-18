import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  description: string | string[];
  image: string;
  category: 'medical' | 'chemical';
}

const ProductCard = ({ id, title, description, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id={id}
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t",
            category === 'medical' ? 'from-pharma-blue/80 to-transparent' : 'from-pharma-teal/80 to-transparent',
            "opacity-70 transition-opacity",
            isHovered ? "opacity-90" : "opacity-70"
          )}
        ></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className={cn(
            "inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2",
            category === 'medical' ? 'bg-pharma-blue' : 'bg-pharma-teal'
          )}>
            {category === 'medical' ? 'Pharmaceutical' : 'Chemical'}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={`/product/${id}`}>
          <Button variant="outline" className={cn(
            "w-full",
            category === 'medical' ? 'border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white' : 
                                    'border-pharma-teal text-pharma-teal hover:bg-pharma-teal hover:text-white'
          )}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;