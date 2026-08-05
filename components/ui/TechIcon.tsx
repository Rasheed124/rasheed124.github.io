// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiTailwindcss,
//   SiFigma,
//   SiWordpress,
//   SiPhp,
//   SiJavascript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPython,
//   SiHtml5,
// } from "react-icons/si"

// interface TechIconProps {
//   name: string
//   className?: string
// }

// export function TechIcon({ name, className = "w-3.5 h-3.5" }: TechIconProps) {
//   const tech = name.toLowerCase()

//   if (tech.includes("next")) return <SiNextdotjs className={`${className} text-black dark:text-white`} />
//   if (tech.includes("react")) return <SiReact className={`${className} text-sky-400`} />
//   if (tech.includes("typescript") || tech.includes("ts")) return <SiTypescript className={`${className} text-blue-500`} />
//   if (tech.includes("tailwind")) return <SiTailwindcss className={`${className} text-teal-400`} />
//   if (tech.includes("figma")) return <SiFigma className={`${className} text-pink-500`} />
//   if (tech.includes("wordpress")) return <SiWordpress className={`${className} text-blue-600`} />
//   if (tech.includes("php")) return <SiPhp className={`${className} text-indigo-400`} />
//   if (tech.includes("node")) return <SiNodedotjs className={`${className} text-green-500`} />
//   if (tech.includes("mongo")) return <SiMongodb className={`${className} text-emerald-500`} />
//   if (tech.includes("python")) return <SiPython className={`${className} text-yellow-500`} />
//   if (tech.includes("html")) return <SiHtml5 className={`${className} text-orange-500`} />

//   return <SiJavascript className={`${className} text-yellow-400`} />
// }



"use client";

import Image from "next/image";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const TECH_ICON_MAP: Record<string, string> = {
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

export function TechIcon({ name, className = "w-4 h-4", size = 16 }: TechIconProps) {
  const normalizedKey = name.toLowerCase().replace(/[\s\-_.]/g, "");
  const iconUrl = TECH_ICON_MAP[normalizedKey];

  // Fallback icon if tech is unknown
  if (!iconUrl) {
    return (
      <span className={`inline-flex items-center justify-center rounded-full bg-border-subtle/40 text-[10px] font-bold ${className}`}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src={iconUrl}
        alt={`${name} icon`}
        width={size}
        height={size}
        className="object-contain w-full h-full"
        unoptimized // Allows CDN SVGs without Next.js domain config hassles
      />
    </span>
  );
}