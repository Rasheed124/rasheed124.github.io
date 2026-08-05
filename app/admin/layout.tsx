import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Admin",
  description: "Managing Content For Portfolio Application",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full m-0 p-0 font-sans bg-bg-primary text-text-primary">
      {children}
    </div>
  );
}