// src/pages/Projects/AllProjects.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "university", label: "University Project" },
  { id: "business", label: "Business Work" },
  { id: "personal", label: "Personal Project" },
];

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState("All");

  // Extract unique tags from university projects for the secondary filter
  const universityTags = useMemo(() => {
    const uniProjects = projects.filter((p) => p.category === "university");
    const tagSet = new Set();
    uniProjects.forEach((p) => p.tags?.forEach((tag) => tagSet.add(tag)));
    return ["All", ...Array.from(tagSet)];
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveTag("All");
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesTag =
      activeCategory !== "university" ||
      activeTag === "All" ||
      project.tags?.includes(activeTag);

    return matchesCategory && matchesTag;
  });

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          All Projects
        </h1>
      </header>

      {/* Top Filter Links */}
      <nav className="flex flex-wrap gap-6 border-b border-border pb-4 mb-6 text-sm">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`transition-colors cursor-pointer ${
                isActive
                  ? "text-primary font-medium underline underline-offset-8 decoration-primary decoration-2"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </nav>

      {/* Secondary Filter (Only shown when "University Project" is selected) */}
      {activeCategory === "university" && (
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
          <span className="text-muted-foreground mr-1">Filter by tech:</span>
          {universityTags.map((tag) => {
            const isTagActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  isTagActive
                    ? "border-primary text-foreground bg-primary/10 font-medium"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}

      {/* Minimal Project List */}
      <div className="divide-y divide-border">
        {filteredProjects.map((project) => (
          <article
            key={project.slug || project.title}
            className="py-6 flex flex-col gap-2 group"
          >
            <div className="flex items-baseline justify-between gap-4">
              {/* Future Scope: Clicking title takes user to /projects/:slug */}
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-lg font-medium text-foreground group-hover:text-primary transition-colors"
              >
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </Link>

              {/* Subtle External Links (if available) */}
              <div className="flex items-center gap-3 shrink-0 text-muted-foreground">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Project"
                    className="hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Minimal inline tags */}
            <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1 text-xs text-muted-foreground/80 font-mono">
              {project.tags.map((tag, index) => (
                <span key={tag}>
                  {tag}
                  {index < project.tags.length - 1 && (
                    <span className="ml-2 text-border">·</span>
                  )}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}