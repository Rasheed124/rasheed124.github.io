"use client";

import Image from "next/image";
import { Link2 } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiPython,
  SiGit,
  SiMongodb,
} from "react-icons/si";
import { urlFor } from "@/sanity/lib/image";
import { ProjectItem } from "@/types/project";
import { TechIcon } from "../ui/TechIcon";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectItem;
}




export function ProjectCard({ project }: ProjectCardProps) {
  if (!project || !project.title) return null;

  let imageUrl: string | null = null;
  if (typeof project.image === "string") {
    imageUrl = project.image;
  } else if (project.image) {
    imageUrl = urlFor(project.image).url();
  }

  const bgStyle = project.bannerBg || "bg-bg-subtle";
  const isInProgress = project.status?.toLowerCase().trim() === "in progress";

  

  return (
    <div className="flex flex-col rounded-2xl border border-border-subtle bg-bg-primary overflow-hidden transition-all duration-200 hover:border-border-subtle/80">
      {/* Card Banner */}
      <div
        className={`relative w-full h-44 sm:h-48 ${bgStyle} flex items-center justify-center p-6 overflow-hidden`}
      >
        {/* Status Badge */}
        {isInProgress && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-black text-xs font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            {project.status}
          </div>
        )}

        {/* Project Cover Image */}
        {imageUrl && (
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          {/* Header & External Links */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base text-text-primary tracking-tight ">
              {project.title}
            </h3>

            <div className="flex  items-start gap-2 shrink-0">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border-subtle text-xs font-semibold text-text-primary hover:bg-border-subtle/30 transition-colors"
                >
                  <Link2 size={13} />
                  <span>Live</span>
                </Link>
              )}

              {project.codeUrl && (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <VscGithubInverted size={13} />
                  <span>Code</span>
                </Link>
              )}
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-xs sm:text-sm text-text-primary/70  leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* Tech Stack Icons */}
        {Array.isArray(project.techStack) && project.techStack.length > 0 && (
          <div className="pt-3 border-t border-border-subtle/40 flex items-center gap-2 flex-wrap">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                title={tech}
                className="w-7 h-7 rounded-full border border-border-subtle/60 bg-border-subtle/10 flex items-center justify-center shrink-0 text-text-primary"
              >
                  <TechIcon name={tech} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}