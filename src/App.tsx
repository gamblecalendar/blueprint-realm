import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { DevTooltip } from "./components/DevTooltip";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Systems from "./pages/Systems";
import SystemDetail from "./pages/SystemDetail";
import Roadmaps from "./pages/Roadmaps";
import Skills from "./pages/Skills";
import Routines from "./pages/Routines";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DevTooltip />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/systems/:systemName" element={<SystemDetail />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
