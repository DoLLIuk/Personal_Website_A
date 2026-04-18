import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isArchitectureLightboxOpen, setIsArchitectureLightboxOpen] = useState(false);

  // Ensure we land at the top when opening a project page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveScreenshot(0);
    setIsArchitectureLightboxOpen(false);
  }, [id]);

  useEffect(() => {
    if (!isArchitectureLightboxOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsArchitectureLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isArchitectureLightboxOpen]);

  const screenshots = project?.screenshots ?? [];
  const hiddenFacts = new Set(project?.hiddenFacts ?? []);
  const hiddenSections = new Set(project?.hiddenSections ?? []);
  const isMobileScreenshotLayout = project?.screenshotLayout === "mobile";
  const projectFacts = [
    project?.category ? { label: "Project Type", value: project.category } : null,
    project?.role ? { label: "My Role", value: project.role } : null,
    project?.team ? { label: "Team", value: project.team } : null,
    project?.timeline ? { label: "Timeline", value: project.timeline } : null,
    project?.status ? { label: "Status", value: project.status } : null,
  ].filter(
    (fact): fact is { label: string; value: string } =>
      fact !== null && !hiddenFacts.has(fact.label),
  );

  const showPreviousScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const showNextScreenshot = () => {
    setActiveScreenshot((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

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

            {projectFacts.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 mb-8">
                {projectFacts.map((fact) => (
                  <Card key={fact.label} className="border-border/60">
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {fact.label}
                      </p>
                      <p className="text-base leading-relaxed">{fact.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <Button
                  asChild
                  size="lg"
                  className="shadow-sm hover:shadow-md transition"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild size="lg" variant="outline">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {project.showDetailHeroImage !== false && !project.architectureImage && (
              <Card className="overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </Card>
            )}

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">About Project</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.fullDescription || project.description}
                  </p>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="not-prose mb-8">
                      <h3 className="text-lg font-semibold mb-4">Performance Snapshot</h3>
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {project.metrics.map((metric) => (
                          <Card key={metric.label} className="border-border/60">
                            <CardContent className="pt-6">
                              <p className="text-sm font-medium text-muted-foreground mb-2">
                                {metric.label}
                              </p>
                              <p className="text-3xl font-bold tracking-tight mb-2">
                                {metric.value}
                              </p>
                              {metric.note && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {metric.note}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {!hiddenSections.has("highlights") &&
                    project.highlights &&
                    project.highlights.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">
                        Why This Project Stands Out
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {project.highlights.map((highlight: string, index: number) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.architectureImage && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">
                        {project.architectureTitle || "Architecture"}
                      </h3>
                      {project.architectureDescription && (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.architectureDescription}
                        </p>
                      )}
                      <div className="not-prose space-y-4">
                        <Card className="overflow-hidden border bg-background">
                          <button
                            type="button"
                            onClick={() => setIsArchitectureLightboxOpen(true)}
                            className="block w-full cursor-zoom-in"
                            aria-label={`Open ${project.title} architecture diagram in full screen`}
                          >
                            <img
                              src={project.architectureImage}
                              alt={`${project.title} architecture diagram`}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-auto"
                            />
                          </button>
                        </Card>
                        {project.architectureHighlights &&
                          project.architectureHighlights.length > 0 && (
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              {project.architectureHighlights.map(
                                (item: string, index: number) => (
                                  <li key={index}>{item}</li>
                                ),
                              )}
                            </ul>
                          )}
                      </div>
                    </>
                  )}

                  {screenshots.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">Screenshots</h3>
                      <div
                        className="not-prose mx-auto space-y-4"
                        style={{
                          maxWidth: isMobileScreenshotLayout
                            ? "31rem"
                            : project.screenshotScale
                            ? `${48 * project.screenshotScale}rem`
                            : "48rem",
                        }}
                      >
                        <Card className="overflow-hidden border bg-background">
                          <div
                            className={`relative overflow-hidden rounded-lg ${
                              isMobileScreenshotLayout ? "px-3 py-3" : "px-2 py-2"
                            }`}
                          >
                            <div className="relative flex items-center justify-center">
                              <div
                                className={
                                  isMobileScreenshotLayout
                                    ? "w-[24rem] max-w-full h-[47.5rem] overflow-hidden rounded-lg bg-muted"
                                    : "w-full"
                                }
                              >
                                <img
                                  src={screenshots[activeScreenshot]}
                                  alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                                  loading="lazy"
                                  decoding="async"
                                  className={`mx-auto rounded-lg ${
                                    isMobileScreenshotLayout
                                      ? "h-full w-full object-cover object-top"
                                      : "h-auto w-full"
                                  }`}
                                />
                              </div>
                            </div>
                            {screenshots.length > 1 && (
                              <>
                                <Button
                                  type="button"
                                  variant="secondary"
                                  size="icon"
                                  className="absolute left-4 top-1/2 -translate-y-1/2 shadow-md"
                                  onClick={showPreviousScreenshot}
                                >
                                  <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button
                                  type="button"
                                  variant="secondary"
                                  size="icon"
                                  className="absolute right-4 top-1/2 -translate-y-1/2 shadow-md"
                                  onClick={showNextScreenshot}
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </Button>
                              </>
                            )}
                          </div>
                        </Card>

                        {screenshots.length > 1 && (
                          <div className="flex flex-wrap justify-center gap-2">
                            {screenshots.map((_: string, index: number) => (
                              <button
                                key={index}
                                type="button"
                                aria-label={`Show screenshot ${index + 1}`}
                                onClick={() => setActiveScreenshot(index)}
                                className={`h-2.5 rounded-full transition-all ${
                                  index === activeScreenshot
                                    ? "w-8 bg-primary"
                                    : "w-2.5 bg-border hover:bg-muted-foreground/40"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}

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

                  {!hiddenSections.has("outcomes") &&
                    project.outcomes &&
                    project.outcomes.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">
                        Engineering Outcomes
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {project.outcomes.map((outcome: string, index: number) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {!hiddenSections.has("fullStack") &&
                    project.fullStack &&
                    project.fullStack.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">Full Stack</h3>
                      <div className="not-prose grid gap-4 md:grid-cols-2">
                        {project.fullStack.map((group) => (
                          <Card key={group.title} className="border-border/60">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg">{group.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {group.items.map((item) => (
                                  <li key={item} className="flex gap-2 leading-relaxed">
                                    <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </>
                  )}

                  {!hiddenSections.has("technologies") && (
                    <>
                      <h3 className="text-xl font-semibold mb-3 mt-6">Technologies</h3>
                      <p className="text-muted-foreground">
                        The project was developed using {project.technologies.join(", ")}.
                        The application architecture ensures scalability and ease of maintenance.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {project.architectureImage && isArchitectureLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsArchitectureLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} architecture diagram`}
        >
          <button
            type="button"
            onClick={() => setIsArchitectureLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-background/90 p-2 text-foreground shadow-lg transition hover:bg-background"
            aria-label="Close full screen diagram"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={project.architectureImage}
              alt={`${project.title} architecture diagram full screen`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
