import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const { theme } = useTheme();
  const fromProject = (location.state as { fromProject?: boolean } | null)?.fromProject;
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    // Only perform the adjusted scroll when navigating back from a project detail.
    if (location.hash === "#projects" && fromProject) {
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
  }, [fromProject, location]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of AI, mobile, and software engineering projects focused on practical implementation, product thinking, and reliable user experiences.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const previewTechnologies =
                project.previewTechnologies ?? project.technologies;
              const previewScale = project.previewScale ?? 1;
              const previewImage =
                mounted && project.themedImage
                  ? theme === "dark"
                    ? project.themedImage.dark
                    : project.themedImage.light
                  : project.image;

              return (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <Link to={`/project/${project.id}`}>
                    <div
                      className={`aspect-video overflow-hidden cursor-pointer ${
                        project.previewMode === "contain"
                          ? "bg-white px-2 py-1 flex items-center justify-center"
                          : project.previewMode === "cover-top"
                            ? "bg-muted"
                            : "bg-muted"
                      }`}
                    >
                      <img
                        src={previewImage}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full transition-transform duration-300 ${
                          project.previewMode === "contain"
                            ? "object-contain scale-[1.42] hover:scale-[1.48]"
                            : project.previewMode === "cover-top"
                              ? "object-cover object-top hover:scale-105"
                              : "object-cover hover:scale-105"
                        }`}
                        style={{
                          scale: `${previewScale}`,
                        }}
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {previewTechnologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/project/${project.id}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
