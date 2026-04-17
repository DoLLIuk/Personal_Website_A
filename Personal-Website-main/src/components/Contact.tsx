import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const Contact = () => {
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

  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
    { icon: Phone, href: socialLinks.phone, label: "Phone" },
  ];

  const contactDetails = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: socialLinks.email },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: socialLinks.phone },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
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
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            Open to internships, collaborations, and software engineering opportunities.
          </motion.p>

          <div className="grid items-stretch lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Let&apos;s Connect</CardTitle>
                  <CardDescription>
                    The fastest way to reach me is by email or LinkedIn. I am happy to discuss projects, internships, and learning opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col space-y-4">
                  {contactDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-start gap-3 rounded-lg border bg-background/70 p-4"
                    >
                      <detail.icon className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Profiles</CardTitle>
                  <CardDescription>Find me on the platforms below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialIcons.map((social, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="mr-2 h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
