import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.svg";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <img
              src={profileImage}
              alt={personalInfo.name}
              loading="lazy"
              decoding="async"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {personalInfo.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="group"
            >
              About Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
            >
              My Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
