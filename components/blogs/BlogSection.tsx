
"use client";

import type { BlogBlock } from "@/types/blog";
import { BlogCard } from "@/components/blogs/BlogCard";

interface BlogSectionProps {
  block: BlogBlock;
}

export function BlogSection({ block }: BlogSectionProps) {


  
  if (!block) return null;

  const blogs = block.blogs || [];
  const totalCount = blogs.length;

  if (totalCount === 0) return null;

  return (
    <section className="w-full max-w-6xl mx-auto my-10 space-y-6">
      {/* Header */}
      <div className="flex items-baseline gap-2 border-b border-border-subtle/50 pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
          {block.sectionTitle || "All Blogs"}
        </h2>
        <span className="text-xs sm:text-sm text-text-primary/50 font-medium">
          ({totalCount} {totalCount === 1 ? "blog" : "blogs"})
        </span>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog._id || blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
}