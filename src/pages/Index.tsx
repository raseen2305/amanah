
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import EnquirySection from "@/components/EnquirySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Update page title
    document.title = "AMANAH CHEMPHARM - Advanced Chemical & Medical Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductsSection />
        <EnquirySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
