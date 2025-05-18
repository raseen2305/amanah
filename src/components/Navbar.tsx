import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Home, Package, Mail, Phone, ChevronDown, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-league font-bold text-2xl text-pharma-blue">𝐀𝐌𝐀𝐍𝐀𝐇</span>
          <span className="font-league text-pharma-teal font-bold">𝐂𝐇𝐄𝐌𝐏𝐇𝐀𝐑𝐌</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/#home"
                  className="nav-link px-4 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Home className="mr-1 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>
              
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-pharma-light/20 transition-all",
                  "data-[state=open]:bg-pharma-light/30"
                )}>
                  <Package className="mr-1 h-4 w-4" />
                  <span>Products</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="animate-fade-in">
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li className="hover-scale">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/#pharmaceutical" 
                          className="block px-4 py-2 text-sm rounded-md hover:bg-pharma-blue/10 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('pharmaceutical')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <div className="text-pharma-blue font-medium mb-1">Pharmaceutical Products</div>
                          <p className="text-xs text-gray-600">Healthcare solutions for professionals</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="hover-scale">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/#chemical" 
                          className="block px-4 py-2 text-sm rounded-md hover:bg-pharma-teal/10 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('chemical')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <div className="text-pharma-teal font-medium mb-1">Chemical Products</div>
                          <p className="text-xs text-gray-600">Industrial grade chemicals</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/#enquiry" 
                  className="nav-link px-4 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="mr-1 h-4 w-4" />
                  <span>Enquiry</span>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/#contact" 
                  className="nav-link px-4 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="mr-1 h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </NavigationMenuItem>

              {/* Learn More Button */}
              <NavigationMenuItem>
                <button 
                  onClick={() => setLearnMoreOpen(!learnMoreOpen)}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium transition-colors",
                    "hover:text-pharma-blue focus:outline-none",
                    learnMoreOpen ? "text-pharma-blue" : "text-gray-700"
                  )}
                >
                  <Info className="mr-1 h-4 w-4" />
                  <span>Learn More</span>
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    learnMoreOpen ? "rotate-180" : ""
                  )} />
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Learn More Dropdown (Desktop) */}
        {learnMoreOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 animate-fade-in">
            <div className="p-4">
              <h3 className="text-lg font-medium text-pharma-blue mb-2">About Amanah Chempharm</h3>
              <p className="text-sm text-gray-600 mb-3">
                We are a leading provider of pharmaceutical and chemical products with over 15 years of experience.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/about" 
                  className="block text-sm text-pharma-teal hover:underline"
                  onClick={() => setLearnMoreOpen(false)}
                >
                  Our Story
                </Link>
                <Link 
                  to="/quality" 
                  className="block text-sm text-pharma-teal hover:underline"
                  onClick={() => setLearnMoreOpen(false)}
                >
                  Quality Standards
                </Link>
                <Link 
                  to="/certifications" 
                  className="block text-sm text-pharma-teal hover:underline"
                  onClick={() => setLearnMoreOpen(false)}
                >
                  Certifications
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-pharma-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-pharma-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="inline mr-2 h-4 w-4" />
              Home
            </Link>
            
            {/* Mobile Products */}
            <div>
              <button 
                className="flex items-center py-2 w-full text-left text-pharma-blue"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Package className="inline mr-2 h-4 w-4" />
                Products
              </button>
              
              <div className="pl-6 space-y-2">
                <Link 
                  to="/#medical" 
                  className="block py-1"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('medical')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Pharmaceutical Products
                </Link>
                <Link 
                  to="/#chemical" 
                  className="block py-1"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('chemical')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Chemical Products
                </Link>
              </div>
            </div>
            
            <Link 
              to="/#enquiry" 
              className="block py-2 text-pharma-blue"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="inline mr-2 h-4 w-4" />
              Enquiry
            </Link>
            
            <Link 
              to="/#contact" 
              className="block py-2 text-pharma-blue"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="inline mr-2 h-4 w-4" />
              Contact
            </Link>

            {/* Mobile Learn More */}
            <div>
              <button 
                className="flex items-center py-2 w-full text-left text-pharma-blue"
                onClick={() => setLearnMoreOpen(!learnMoreOpen)}
              >
                <Info className="inline mr-2 h-4 w-4" />
                Learn More
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  learnMoreOpen ? "rotate-180" : ""
                )} />
              </button>
              
              {learnMoreOpen && (
                <div className="pl-6 space-y-2 mt-2">
                  <Link 
                    to="/about" 
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/quality" 
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quality Standards
                  </Link>
                  <Link 
                    to="/certifications" 
                    className="block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Certifications
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;