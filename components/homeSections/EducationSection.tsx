import { EducationBlock } from "@/types/blocks";
import { EducationItem } from "@/types/education";
import { formatDateRange } from "../../lib/formatRange";

interface EducationSectionProps {
  block: EducationBlock;
}



export function EducationSection({ block }: EducationSectionProps) {

  if (!block || !Array.isArray(block.items) || block.items.length === 0) {
    return null;
  }

  const { sectionTitle = "Education & Certifications", items } = block;

  return (
    <section className="w-full max-w-3xl mx-auto my-6">
      <div className="p-6 sm:p-8 rounded-3xl border border-border-subtle bg-bg-primary/50 backdrop-blur-xs">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
          {sectionTitle}
        </h2>

        <div className="space-y-6">
          {items.map((item: EducationItem) => {
            if (!item || !item._id || !item.institution || !item.degree) {
              return null;
            }

            const dateRange = formatDateRange(item.startDate, item.endDate);

            return (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 pb-6 last:pb-0 border-b border-border-subtle/50 last:border-b-0"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                      {item.institution}
                    </h3>

                    {/* Optional Certificate Link */}
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1 shrink-0"
                        title="View Certificate"
                      >
                        <span>Verify Credential</span>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-sm font-medium text-text-primary/80">
                    {item.degree}
                    {item.fieldOfStudy ? ` • ${item.fieldOfStudy}` : ""}
                  </p>

                  {/* Optional Description / Highlights */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-text-primary/60 pt-1 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  )}
                </div>

                {dateRange && (
                  <span className="text-xs sm:text-sm font-medium text-text-primary/50 shrink-0">
                    {dateRange}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
