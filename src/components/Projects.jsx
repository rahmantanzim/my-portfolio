import React, { useEffect, useState } from "react";
import { project_data } from "../assets/project_data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project_data);
  }, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A few things I’ve built recently, includes client work, full websites, and
            full-stack apps.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hasLive = Boolean(project.link);
            const hasGithub =
              Boolean(project.github) && Boolean(project.github_link);

            // tags can be array OR comma-separated string — support both
            const tags = Array.isArray(project.tags)
              ? project.tags
              : typeof project.tags === "string" && project.tags.trim().length > 0
              ? project.tags.split(",").map((t) => t.trim()).filter(Boolean)
              : [];

            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6
                           shadow-sm hover:shadow-xl hover:border-zinc-700
                           transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top row (tool + client) */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-zinc-700 text-zinc-300 bg-zinc-950/40">
                    {project.tool}
                  </span>

                  <span className="text-xs text-zinc-400 truncate">
                    {project.client_name}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mt-4 text-lg sm:text-xl font-semibold tracking-tight
                             text-zinc-100 group-hover:text-white"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-950/60 border border-zinc-800 text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Live */}
                  <a
                    href={hasLive ? project.link : "#"}
                    target={hasLive ? "_blank" : undefined}
                    rel={hasLive ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (!hasLive) e.preventDefault();
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                      transition
                      ${
                        hasLive
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95"
                          : "bg-zinc-800/40 text-zinc-500 cursor-not-allowed"
                      }`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live
                  </a>

                  {/* GitHub */}
                  <a
                    href={hasGithub ? project.github_link : "#"}
                    target={hasGithub ? "_blank" : undefined}
                    rel={hasGithub ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (!hasGithub) e.preventDefault();
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                      border transition
                      ${
                        hasGithub
                          ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800/60"
                          : "border-zinc-800 text-zinc-600 cursor-not-allowed"
                      }`}
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
