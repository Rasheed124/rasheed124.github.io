"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ProjectsBlock } from "@/types/project";

interface CategoryProjectsSectionProps {
  block: ProjectsBlock;
}

export function ProjectsCategorySection({ block }: CategoryProjectsSectionProps) {
  if (!block) return null;

  const categories = block.categories || [];
  const hasCategories = categories.length > 0;
  const directProjects = block.projects || [];

  return (
    <section className="w-full max-w-6xl mx-auto my-10 space-y-12">
      {/* 1. Categorized Rendering */}
      {hasCategories ? (
        categories.map((category) => {
          const projects = category.projects || [];
          const count = projects.length;

          if (count === 0) return null;

          return (
            <div key={category._id} className="space-y-6">
              {/* Category Header with Counter */}
              <div className="flex items-baseline gap-2 border-b border-border-subtle/50 pb-3">
                <h2 className="text-lg lg:text-2xl font-bold tracking-tight text-text-primary">
                  {category.title}
                </h2>
                <span className="text-xs sm:text-sm text-text-primary/50 font-medium">
                  ({count} {count === 1 ? "project" : "projects"})
                </span>
              </div>

              {/* Category Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        /* 2. Fallback for un-categorized block */
        directProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-baseline gap-2 border-b border-border-subtle/50 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
                {block.sectionTitle || "Projects"}
              </h2>
              <span className="text-xs sm:text-sm text-text-primary/50 font-medium">
                ({directProjects.length}{" "}
                {directProjects.length === 1 ? "project" : "projects"})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {directProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
}