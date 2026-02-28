import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-8">Загрузка секции...</div>}>
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
