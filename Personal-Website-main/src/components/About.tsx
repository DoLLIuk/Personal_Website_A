import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Heart, Globe } from "lucide-react";
import { about, technologyGroups } from "@/data/portfolio";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            {about.bio}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Experience</h3>
                  </div>
                  <div className="space-y-6">
                    {about.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <p className="text-sm text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                        <p className="text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-4">
                    {about.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-primary">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Languages</h3>
                  </div>
                  <div className="space-y-2">
                    {about.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between border-l-2 border-primary pl-4">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {about.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-6">Technologies</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {technologyGroups.map((group) => (
                <Card key={group.title} className="h-full">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{group.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Badge variant="outline" className="text-base px-4 py-2">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
