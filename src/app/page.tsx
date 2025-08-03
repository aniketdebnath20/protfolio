

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Index from "./[pages]";


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Index />
  </TooltipProvider>
);

export default App;