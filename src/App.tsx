
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// App.tsx
import MedicalProducts from "./pages/MedicalProducts"; // ✅ no destructuring

import ChemicalProducts from "./pages/ChemicalProducts";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import PharmaceuticalCategories from "./components/PharmaceuticalCategories";
import ChemicalCategories from "./components/ChemicalCategories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/chemical-products" element={<ChemicalProducts />} />
          <Route path="/medical-products" element={<MedicalProducts />}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/pharma-cat" element={<PharmaceuticalCategories />} />
          <Route path="/chem-cat" element={<ChemicalCategories />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
