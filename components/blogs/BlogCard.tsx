"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { urlFor } from "@/sanity/lib/image";

export function BlogCard({ blog }: { blog: BlogPost }) {
  if (!blog || !blog.title) return null;

  let coverUrl = blog.imageUrl || "";
  if (!coverUrl && typeof blog.coverImage === "string") {
    coverUrl = blog.coverImage;
  } else if (!coverUrl && blog.coverImage) {
    coverUrl = urlFor(blog.coverImage).url();
  }

  const isExternal =
    typeof blog.slug === "string" &&
    (blog.slug.startsWith("http://") || blog.slug.startsWith("https://"));

  const targetHref = isExternal ? blog.slug : `/blogs/${blog.slug}`;

  const cardContent = (
    <>
      <div>
        {/* Banner / Cover Image */}
        <div
          className={`relative w-full h-48 sm:h-52 flex items-center justify-center overflow-hidden p-4 ${
            blog.bannerBg || "bg-border-subtle/30"
          }`}
        >
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={`${blog.title} cover`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        {/* Post Content */}
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-text-primary/80 transition-colors">
            {blog.title}
          </h3>

          <p className="text-xs sm:text-sm text-text-primary/60 line-clamp-3 leading-relaxed">
            {blog.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 pt-0">
        <div className="pt-3 border-t border-border-subtle/60 flex items-center justify-between text-xs font-medium text-text-primary/50">
          <div className="flex items-center gap-3">
            {blog.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>{blog.publishedAt}</span>
              </div>
            )}
            {blog.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock size={13} />
                <span>{blog.readTime}</span>
              </div>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-text-primary group-hover:translate-x-0.5 transition-transform">
            Read More <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </>
  );

  const cardClassName =
    "group flex flex-col justify-between rounded-2xl border border-border-subtle bg-bg-primary overflow-hidden transition-all duration-200 hover:border-border-subtle/80";

  if (isExternal) {
    return (
      <a
        href={targetHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={targetHref} className={cardClassName}>
      {cardContent}
    </Link>
  );
}