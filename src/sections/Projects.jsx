import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projects } from "@/data/projects";

const Projects = () => {
  // Filter featured projects (falls back to first 6 if you haven't added featured: true yet)
  const featuredProjects = projects.some((p) => p.featured)
    ? projects.filter((p) => p.featured).slice(0, 6)
    : projects.slice(0, 6);

  return (
    <section id="projects" className="py-16 md:py-32 relative overflow-hidden">
      {/* Glowing effect in background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      {/* Container div */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="uppercase text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent works, from university research to full-stack web applications and business platforms.
          </p>
        </div>

        {/* Projects grid (3 columns x 2 rows = 6 projects) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const hasLiveLink = project.link && project.link !== "#";
            const hasGithub = project.github && project.github !== "#";

            return (
              <article
                key={project.slug || project.title}
                className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                {/* Top: Header + Description */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      <Link to={`/projects/${project.slug || ""}`}>
                        {project.title}
                      </Link>
                    </h3>

                    {/* Action Icons (Only render if valid URL exists) */}
                    <div className="flex items-center gap-2.5 shrink-0 pt-1">
                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {hasLiveLink && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} Live Link`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tech Stack Tags pinned to bottom of card */}
                <div className="flex flex-wrap gap-2 pt-6 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton to="/projects">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;