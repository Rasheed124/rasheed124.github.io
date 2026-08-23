"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 sm:top-6 z-50 flex justify-center w-full px-0 sm:px-4"
    >
      {/* Navbar Container */}
      <nav className="flex items-center justify-between w-full max-w-6xl px-5 sm:px-4 py-3 sm:py-2.5 sm:rounded-full border-b sm:border border-border-subtle bg-bg-primary/80 backdrop-blur-md shadow-xs transition-colors duration-300 relative z-10">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border-subtle shrink-0">
            <Image
              src="/rasheed-tolulope1.webp"
              alt="Rasheed Tolulope"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <span className="font-semibold text-base sm:text-sm tracking-tight text-text-primary">
            Rasheed Tolulope
          </span>
        </Link>

        {/* Desktop Nav Actions */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="flex items-center gap-5 text-sm font-normal text-text-primary/70">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-border-subtle" />

          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl border border-border-subtle text-text-primary focus:outline-none hover:bg-bg-primary/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden absolute top-full inset-x-0 bg-bg-primary/95 backdrop-blur-lg border-b border-border-subtle px-6 py-6 shadow-lg z-0"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -8 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-text-primary/80 hover:text-text-primary py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}