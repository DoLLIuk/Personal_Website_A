import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  // Ensure we land at the top when opening a project page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/#projects" state={{ fromProject: true }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/#projects" state={{ fromProject: true }}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <Button asChild size="lg" className="shadow-sm hover:shadow-md transition">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>

            <Card className="overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">About Project</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.fullDescription || project.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6">Key Features</h3>
                  {project.features ? (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.features.map((feat: string, i: number) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Modern and responsive design</li>
                      <li>Optimized performance</li>
                      <li>Intuitive user interface</li>
                      <li>Cross-browser compatibility</li>
                    </ul>
                  )}

                  <h3 className="text-xl font-semibold mb-3 mt-6">Technologies</h3>
                  <p className="text-muted-foreground">
                    The project was developed using {project.technologies.join(", ")}. 
                    The application architecture ensures scalability and ease of maintenance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
