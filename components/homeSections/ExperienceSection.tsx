"use client"

import { useState } from "react"
import Image from "next/image"
import { Globe, ChevronDown } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { ExperienceBlock } from "@/types/blocks"
import { ExperienceItem, PortableTextBlock } from "@/types/experience"
import { TechIcon } from "../ui/TechIcon"

interface ExperienceSectionProps {
  block: ExperienceBlock
}

function formatDateRange(startDate?: string, endDate?: string, isCurrentRole?: boolean): string {
  if (!startDate) return ""

  const formatMonthYear = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      if (isNaN(date.getTime())) return dateStr
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
      }).format(date)
    } catch {
      return dateStr
    }
  }

  const start = formatMonthYear(startDate)
  const end = isCurrentRole ? "Present" : endDate ? formatMonthYear(endDate) : "Present"

  return `${start} – ${end}`
}

function extractBulletPoints(description?: PortableTextBlock[] | string[]): string[] {
  if (!description || !Array.isArray(description)) return []

  return description
    .map((item) => {
      if (typeof item === "string") return item
      if (item && item.children && Array.isArray(item.children)) {
        return item.children.map((child) => child.text).join("")
      }
      return ""
    })
    .filter(Boolean)
}

export function ExperienceSection({ block }: ExperienceSectionProps) {
  if (!block || !Array.isArray(block.items) || block.items.length === 0) {
    return null
  }

  const { sectionTitle = "Work Experience", items } = block
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?._id ?? null)

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full max-w-3xl mx-auto my-6">
      <div className="p-4 sm:p-8 rounded-[28px] border border-border-subtle bg-bg-primary/50 backdrop-blur-xs">
        {sectionTitle && (
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            {sectionTitle}
          </h2>
        )}

        <div className="flex flex-col gap-4">
          {items.map((exp: ExperienceItem) => {
            if (!exp || !exp._id || !exp.company || !exp.role) {
              return null
            }

            const isExpanded = expandedId === exp._id
            const dateRange = formatDateRange(exp.startDate, exp.endDate, exp.isCurrentRole)
            const bulletPoints = extractBulletPoints(exp.description)

            return (
              <motion.div
                key={exp._id}
                layout
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className={`rounded-2xl border bg-bg-primary p-4 sm:p-5 transition-colors duration-200 ${
                  isExpanded
                    ? "border-border-subtle shadow-xs"
                    : "border-border-subtle/60 hover:border-border-subtle"
                }`}
              >
                {/* Header Section */}
                <div
                  onClick={() => toggleExpand(exp._id!)}
                  className="flex flex-col sm:flex-row sm:items-start justify-between cursor-pointer group select-none gap-3 sm:gap-0"
                >
                  {/* Left: Logo & Company Title/Links */}
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-black flex items-center justify-center font-bold text-base shrink-0 border border-border-subtle">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      ) : (
                        <span className="text-white">
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-base sm:text-lg text-text-primary group-hover:opacity-80 transition-opacity truncate">
                          {exp.company}
                        </span>

                        <div
                          className="flex items-center gap-1.5 text-text-primary/50 shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-text-primary transition-colors"
                              title="Visit Website"
                            >
                              <Globe size={14} />
                            </a>
                          )}
                          {exp.linkedin && (
                            <a
                              href={exp.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-text-primary transition-colors"
                              title="LinkedIn Profile"
                            >
                              <FaLinkedin size={14} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-text-primary/80 mt-0.5 truncate">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Right: Date, Location & Animated Chevron */}
                  <div className="flex items-center sm:items-start justify-between sm:justify-end gap-2.5 pt-1 sm:pt-0.5 border-t border-border-subtle/30 sm:border-0">
                    <div className="text-left sm:text-right text-xs sm:text-sm text-text-primary/50">
                      {dateRange && <p className="font-medium">{dateRange}</p>}
                      {exp.location && <p className="text-xs opacity-80">{exp.location}</p>}
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="shrink-0 text-text-primary/50"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* Animated Height Expansion Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-3 border-t border-border-subtle/40 text-sm text-text-primary/80 space-y-4">
                        {/* Technologies List with Dashed Pill Badges */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-text-primary tracking-tight">
                              Technologies
                            </h4>

                            <motion.div
                              initial="hidden"
                              animate="show"
                              variants={{
                                hidden: { opacity: 0 },
                                show: {
                                  opacity: 1,
                                  transition: { staggerChildren: 0.04 },
                                },
                              }}
                              className="flex flex-wrap gap-2"
                            >
                              {exp.technologies.map((tech) => (
                                <motion.span
                                  key={tech}
                                  variants={{
                                    hidden: { opacity: 0, scale: 0.9, y: 5 },
                                    show: { opacity: 1, scale: 1, y: 0 },
                                  }}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-dashed border-border-subtle/80 bg-border-subtle/20 text-xs font-medium text-text-primary"
                                >
                                  <TechIcon name={tech} />
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                          </div>
                        )}

                        {/* Responsibilities List with Staggered Entrance */}
                        {bulletPoints.length > 0 && (
                          <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={{
                              hidden: { opacity: 0 },
                              show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                              },
                            }}
                            className="space-y-2.5 text-text-primary/70 text-xs sm:text-sm leading-relaxed"
                          >
                            {bulletPoints.map((point, index) => (
                              <motion.li
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, x: -6 },
                                  show: { opacity: 1, x: 0 },
                                }}
                                className="flex items-start gap-2"
                              >
                                <span className="select-none text-text-primary/40 mt-0.5 shrink-0">
                                  •
                                </span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}