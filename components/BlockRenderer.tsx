// "use client";

// import type { ContactBlock, PageBlock } from "@/types/blocks";
// import { EducationSection } from "./homeSections/EducationSection";
// import { ExperienceSection } from "./homeSections/ExperienceSection";
// import { ContactSection } from "./homeSections/ContactSection";
// import { RichTextSection } from "./homeSections/RichTextSection";
// import { ProjectsSection } from "./homeSections/ProjectsSection";
// import { ProjectsCategorySection } from "./projects/ProjectsCategorySection";
// import { BlogSection } from "./blogs/BlogSection";
// import { HeroSection } from "./homeSections/HeroSection";
// import { AboutSection } from "./homeSections/AboutSection";
// import { FadeIn } from "@/components/animations/FadeIn";

// interface BlockRendererProps {
//   blocks?: PageBlock[];
// }

// export default function BlockRenderer({ blocks }: BlockRendererProps) {
//   if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
//     return null;
//   }

//   const contactBlock = blocks.find(
//     (b): b is ContactBlock => b._type === "contactBlock",
//   );
//   const socialLinks = contactBlock?.contactRef?.socialLinks || [];

//   return (
//     <>
//       {blocks.map((block, index) => {
//         if (
//           !block ||
//           typeof block !== "object" ||
//           !block._type ||
//           !block._key
//         ) {
//           console.warn("[BlockRenderer] Malformed block:", block);
//           return null;
//         }

//         // Stagger entrance delay based on block order on the page
//         const delay = index * 0.08;

//         const renderBlockContent = () => {
//           switch (block._type) {
//             case "aboutBlock":
//               return block.variant === "hero" ? (
//                 <HeroSection block={block} socialLinks={socialLinks} />
//               ) : (
//                 <AboutSection block={block} />
//               );

//             case "educationBlock":
//               return <EducationSection block={block} />;

//             case "experienceBlock":
//               return <ExperienceSection block={block} />;

//             case "projectsBlock":
//               const hasCategories =
//                 Array.isArray(block.categories) && block.categories.length > 0;

//                 // console.log(hasCategories)

//               return hasCategories ? (
//                 <ProjectsCategorySection block={block} />
//               ) : (
//                 <ProjectsSection block={block} />
//               );

//             case "contactBlock":
//               return <ContactSection block={block} />;

//             case "richTextBlock":
//               return <RichTextSection block={block} />;

//             case "blogBlock":
//               return <BlogSection block={block} />;

//             default:
//               return null;
//           }
//         };

//         const content = renderBlockContent();
//         if (!content) return null;

//         return (
//           <FadeIn key={block._key} delay={delay}>
//             {content}
//           </FadeIn>
//         );
//       })}
//     </>
//   );
// }

"use client";

import type { ContactBlock, PageBlock } from "@/types/blocks";
import { EducationSection } from "./homeSections/EducationSection";
import { ExperienceSection } from "./homeSections/ExperienceSection";
import { ContactSection } from "./homeSections/ContactSection";
import { RichTextSection } from "./homeSections/RichTextSection";
import { ProjectsSection } from "./homeSections/ProjectsSection";
import { ProjectsCategorySection } from "./projects/ProjectsCategorySection";
import { BlogSection } from "./blogs/BlogSection";
import { HeroSection } from "./homeSections/HeroSection";
import { AboutSection } from "./homeSections/AboutSection";
import { FadeIn } from "@/components/animations/FadeIn";

interface BlockRendererProps {
  blocks?: PageBlock[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  const contactBlock = blocks.find(
    (b): b is ContactBlock => b?._type === "contactBlock",
  );
  const socialLinks = contactBlock?.contactRef?.socialLinks || [];

  return (
    <>
      {blocks.map((block, index) => {
        if (
          !block ||
          typeof block !== "object" ||
          !block._type ||
          !block._key
        ) {
          console.warn("[BlockRenderer] Malformed block:", block);
          return null;
        }

        const delay = index * 0.08;

        const renderBlockContent = () => {
          switch (block._type) {
            case "aboutBlock":
              return block.variant === "hero" ? (
                <HeroSection block={block} socialLinks={socialLinks} />
              ) : (
                <AboutSection block={block} />
              );

            case "educationBlock":
              return <EducationSection block={block} />;

            case "experienceBlock":
              return <ExperienceSection block={block} />;

            case "projectsBlock": {
              const categories = block.categories;
              const hasCategories =
                Array.isArray(categories) && categories.length > 0;

              return hasCategories ? (
                <ProjectsCategorySection block={block} />
              ) : (
                <ProjectsSection block={block} />
              );
            }

            case "contactBlock":
              return <ContactSection block={block} />;

            case "richTextBlock":
              return <RichTextSection block={block} />;

            case "blogBlock":
              return <BlogSection block={block} />;

            default:
              return null;
          }
        };

        const content = renderBlockContent();
        if (!content) return null;

        return (
          <FadeIn key={block._key} delay={delay}>
            {content}
          </FadeIn>
        );
      })}
    </>
  );
}
