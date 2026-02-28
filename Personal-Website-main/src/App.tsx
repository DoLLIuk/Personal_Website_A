import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useRef, Suspense, lazy } from "react";
import { ThemeProvider } from "next-themes";
const Index = lazy(() => import("./pages/Index"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();
  const isFirstLoad = useRef(true);
  
  useEffect(() => {
    // On first load of home page, always start at top regardless of hash
    if (isFirstLoad.current && pathname === '/') {
      window.scrollTo({ top: 0 });
      isFirstLoad.current = false;
      return;
    }
    
    isFirstLoad.current = false;
    
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);
  return null;
};

const App = () => {
  useEffect(() => {
    // Enable debug outlines when URL contains ?debug (development only)
    if (typeof window !== "undefined" && window.location.search.includes("debug")) {
      document.documentElement.classList.add("debug-on");
      // ensure body overflow isn't accidentally hidden
      document.body.style.overflow = "visible";
      // helpful console message for the developer
      // eslint-disable-next-line no-console
      console.info("Debug mode: outlines enabled (use ?debug to toggle)");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <ScrollHandler />
            <Suspense fallback={<div className="p-4">Загрузка...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
