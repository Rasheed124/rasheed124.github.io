"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-w-full min-h-[80vh] flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-bg-primary text-text-primary transition-colors duration-300">
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-btn-emerald-start/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        <div className="p-6 sm:p-10 rounded-[28px] border border-border-subtle bg-bg-primary/70 backdrop-blur-md shadow-2xl">
          <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-text-primary mb-4 select-none">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
            Page Not Found
          </h2>

          <p className="text-xs sm:text-sm text-text-primary/70 max-w-md mx-auto leading-relaxed mb-8">
            The page you are looking for doesn’t exist, was removed, or might be
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg-primary text-xs sm:text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
            >
              <Home size={16} />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle bg-bg-primary text-text-primary text-xs sm:text-sm font-semibold hover:bg-border-subtle/20 transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
