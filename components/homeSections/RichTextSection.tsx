import { PortableText } from '@portabletext/react'
import type { RichTextBlock } from '@/types/blocks'

interface RichTextSectionProps {
  block: RichTextBlock
}

export function RichTextSection({ block }: RichTextSectionProps) {
  if (!block?.content || block.content.length === 0) return null

  return (
    <section className="w-full max-w-4xl mx-auto my-8 prose prose-neutral dark:prose-invert">
      <PortableText value={block.content} />
    </section>
  )
}