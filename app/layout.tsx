import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "@/components/VisualEditing";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rasheedtolulope.vercel.app"),

  title: {
    default: "Rasheed Tolulope",
    template: `%s - Rasheed Tolulope`,
  },
  description: "Frontend-heavy Full-stack Developer Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${parkinsans.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col bg-dot-grid relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />

          {children}

          {isDraftMode && (
            <>
              <VisualEditing />
              <div className="fixed bottom-24 right-4 z-50 bg-black/80 text-white text-xs px-3.5 py-2 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-2.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium">Draft Preview Active</span>
                <a
                  href="/api/draft-mode/disable"
                  className="underline ml-1 text-white/70 hover:text-white transition-colors"
                >
                  Exit
                </a>
              </div>
            </>
          )}
        </ThemeProvider>
      </body>
      {/* <body className="min-h-full flex flex-col bg-dot-grid  relative">
        <ScrollProgress />

        {children}

        {isDraftMode && (
          <>
            <VisualEditing />
            <div className="fixed bottom-24 right-4 z-50 bg-black/80 text-white text-xs px-3.5 py-2 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-2.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Draft Preview Active</span>
              <a
                href="/api/draft-mode/disable"
                className="underline ml-1 text-white/70 hover:text-white transition-colors"
              >
                Exit
              </a>
            </div>
          </>
        )}
      </body> */}
    </html>
  );
}
