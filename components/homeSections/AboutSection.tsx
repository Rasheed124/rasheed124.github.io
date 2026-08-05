"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { AboutBlock } from "@/types/blocks";

export function AboutSection({ block }: { block: AboutBlock }) {
  const profile = block?.profileRef;
  if (!profile) return null;

  return (
    <section className="w-full max-w-4xl mx-auto my-10">
      <div className="rounded-[28px] border border-border-subtle bg-bg-primary/50 backdrop-blur-xs p-6 sm:p-10 space-y-8">
        {/* Main Heading & Bio */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {profile.fullBioHeading || `Hey there, I'm ${profile.fullName} 👋`}
          </h2>
          {profile.fullBio && (
            <p className="text-base sm:text-lg leading-relaxed text-text-primary/80">
              {profile.fullBio}
            </p>
          )}
        </div>

        {/* Focus Areas */}
        {Array.isArray(profile.focusAreas) && profile.focusAreas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border-subtle/50">
            {profile.focusAreas.map((area, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="text-sm text-text-primary/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Closing Paragraph */}
        {profile.closingText && (
          <div className="space-y-3 pt-4 border-t border-border-subtle/50">
            <p className="text-sm sm:text-base text-text-primary/80 leading-relaxed">
              {profile.closingText}
            </p>
          </div>
        )}

        {/* Call To Action Footer */}
        {profile.email && (
          <div className="pt-6 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-primary/60 font-medium text-center sm:text-left">
              Have a project in mind or want to talk tech?
            </p>

            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg-primary font-semibold text-sm hover:opacity-90 transition-opacity shadow-xs shrink-0"
            >
              <Mail size={16} />
              <span>Let's connect</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}