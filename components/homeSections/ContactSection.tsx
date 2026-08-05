// "use client";

import { ContactBlock } from '@/types/blocks'
import { ContactFooter } from './ContactFooter'

interface ContactSectionProps {
  block: ContactBlock
}

export function ContactSection({ block }: ContactSectionProps) {
  if (!block) return null

  return (
    <ContactFooter
      sectionTitle={block.sectionTitle}
      contactData={block.contactRef}
    />
  )
}




