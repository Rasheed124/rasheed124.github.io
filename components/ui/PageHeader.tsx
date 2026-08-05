import { PageDocument } from "@/types/blocks";

type PageHeaderProps = Pick<PageDocument, "title" | "description">;

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="space-y-2 border-b border-border-subtle/60 pb-8 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-text-primary/60 font-medium max-w-2xl">
        {description}
      </p>
    </header>
  );
}
