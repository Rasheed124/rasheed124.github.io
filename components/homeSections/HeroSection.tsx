"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { AboutBlock, SanitySocialLink } from "@/types/blocks";
import { renderSocialIcon } from "../ui/renderSocialIcon";

interface HeroSectionProps {
  block: AboutBlock;
  socialLinks?: SanitySocialLink[];
}

export function HeroSection({ block, socialLinks = [] }: HeroSectionProps) {
  const profile = block?.profileRef;
  if (!profile) return null;

  return (
    <section className="w-full max-w-4xl mx-auto space-y-4 my-6">
      {/* Banner */}
      <div className="relative w-full h-44 sm:h-52 rounded-3xl overflow-hidden bg-border-subtle/30">
        {profile.bannerImageUrl && (
          <Image
            src={profile.bannerImageUrl}
            alt="Hero Banner"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Profile Card */}
      <div className="relative rounded-3xl border border-border-subtle bg-bg-primary p-6 sm:p-8 pt-16 sm:pt-16">
        {/* Avatar */}

        {profile.avatarUrl && (
          <div className="absolute -top-12 left-6 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-bg-primary shadow-lg bg-bg-primary">
            <Image
              src={profile.avatarUrl}
              alt={profile.fullName}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                {profile.fullName}
              </h1>
              <Image
                src="/rasheed-tolulope-checkverify.svg"
                alt="Verified Badge"
                width={20}
                height={20}
                className="w-5 h-5 object-contain shrink-0"
              />
            </div>
            {profile.tagline && (
              <p className="text-xs sm:text-sm text-text-primary/60 font-medium mt-0.5">
                {profile.tagline}
              </p>
            )}
          </div>

          {profile.shortBio && (
            <p className="text-sm sm:text-base text-text-primary/80 leading-relaxed max-w-3xl">
              {profile.shortBio}
            </p>
          )}

          {profile.resumeUrl && (
            <div className="pt-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-btn-emerald-start to-btn-emerald-end text-white font-semibold text-xs sm:text-sm hover:opacity-95 hover:shadow-md transition-all active:scale-[0.98]"
              >
                <FileText size={16} className="text-white" />
                <span>Resume / CV</span>
              </a>
            </div>
          )}

          {/* Me on Internet (Shared from Contact Block) */}
          {socialLinks.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border-subtle">
              <p className="text-xs font-semibold text-text-primary/70 mb-3">
                Me on{" "}
                <span className="font-bold text-text-primary">Internet!</span>
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item._key || item.platform || item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-bg-primary hover:bg-border-subtle/20 text-xs font-medium text-text-primary transition-colors"
                  >
                    <span className="text-text-primary/70">
                      {renderSocialIcon(item.platform)}
                    </span>
                    <span>{item.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
