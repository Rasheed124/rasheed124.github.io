"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsBlock } from "@/types/blocks";
import { ProjectItem } from "@/types/project";

interface ProjectsSectionProps {
  block: ProjectsBlock;
}

export function ProjectsSection({ block }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const allProjects = useMemo(() => {
    if (!block) return [];

    const directProjects = block.projects || [];
    const categoryProjects =
      block.categories?.flatMap((cat) => cat.projects || []) || [];

    const combined = [...directProjects, ...categoryProjects];

    const uniqueMap = new Map<string, ProjectItem>();
    combined.forEach((proj) => {
      if (proj && proj._id) {
        uniqueMap.set(proj._id, proj);
      }
    });

    return Array.from(uniqueMap.values());
  }, [block]);

  if (allProjects.length === 0) {
    return null;
  }

  const { sectionTitle } = block;

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section className="w-full max-w-3xl mx-auto my-6">
      <div className="p-4 sm:p-8 rounded-[28px] border border-border-subtle bg-bg-primary/50 backdrop-blur-xs">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
          {sectionTitle}
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {visibleProjects.map((project: ProjectItem) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {allProjects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2.5 rounded-full border border-border-subtle bg-bg-primary text-xs sm:text-sm font-medium text-text-primary hover:bg-border-subtle/20 transition-all duration-200 cursor-pointer shadow-xs"
            >
              {showAll ? "Show less projects" : "Show all projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
