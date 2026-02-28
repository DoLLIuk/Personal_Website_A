// ...existing code...
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Use static `motion` import for consistent element types
  const Container: any = motion.div;
  const Item: any = motion.div;
  const H2: any = motion.h2;
  const P: any = motion.p;

  useEffect(() => {
    // Only perform the adjusted scroll when navigating back from a project detail.
    if (location.hash === "#projects" && (location.state as any)?.fromProject) {
      const timer = setTimeout(() => {
        const el = ref.current;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const offset = Math.round(window.innerHeight * 0.025);
          window.scrollTo({ top: Math.max(0, top + offset), behavior: "smooth" });
          // Clear history state so refresh or subsequent navigations don't re-trigger scroll
          try {
            window.history.replaceState(null, document.title, window.location.href);
          } catch (e) {
            /* no-op */
          }
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 py-20 px-4">
      <div className="container mx-auto">
        <Container
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <H2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Projects
          </H2>
          <P variants={itemVariants} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent works. Each project was created with attention to detail and best development practices.
          </P>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Item key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <Link to={`/project/${project.id}`}>
                    <div className="aspect-video overflow-hidden bg-muted cursor-pointer">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/project/${project.id}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Item>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default React.memo(Projects);
// ...existing code...