import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreNosaltres from "./pages/SobreNosaltres";
import Videojocs from "./pages/Videojocs";
import Equip from "./pages/Equip";
import Serveis from "./pages/Serveis";
import Contacte from "./pages/Contacte";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosaltres" element={<SobreNosaltres />} />
          <Route path="/videojocs" element={<Videojocs />} />
          <Route path="/equip" element={<Equip />} />
          <Route path="/serveis" element={<Serveis />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
