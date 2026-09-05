
import Image from "next/image";
import { AtSign, Send, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { urlFor } from "@/sanity/lib/image"; 
import { ContactDocument, SanitySocialLink } from "@/types/blocks";

interface ContactFooterProps {
  sectionTitle?: string;
  contactData?: ContactDocument;
}


function getSocialIcon(platform?: string): React.ReactNode {
  if (!platform) return <Globe size={16} />;

  const name = platform.toLowerCase().trim();
  if (name.includes("email") || name.includes("mail")) return <AtSign size={16} />;
  if (name.includes("github")) return <FaGithub size={16} />;
  if (name.includes("linkedin")) return <FaLinkedin size={16} />;
  if (name.includes("twitter") || name.includes("x")) return <FaTwitter size={16} />;
  if (name.includes("insta")) return <FaInstagram size={16} />;
  if (name.includes("telegram")) return <Send size={15} />;

  return <Globe size={16} />;
}

export function ContactFooter({ sectionTitle, contactData }: ContactFooterProps) {
  const currentYear = new Date().getFullYear();

  const headline =
    sectionTitle ||
    contactData?.headline ||
    "Let’s build something extraordinary together";

  const developerName = contactData?.developerName || "Rasheed Tolulope";
  const developerUrl = contactData?.developerUrl || "https://github.com/your-username";

  let bannerImageUrl = "/footer-bg.jpg";
  if (contactData?.footerBgImage) {
    try {
      bannerImageUrl = urlFor(contactData.footerBgImage).url();
    } catch (error) {
      console.error("[ContactFooter] Failed to generate Sanity image URL:", error);
    }
  }

  const socialLinks: SanitySocialLink[] = Array.isArray(contactData?.socialLinks) && contactData.socialLinks.length > 0
    ? contactData.socialLinks
    : [
        { platform: "GitHub", url: "https://github.com/your-username" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/your-username" },
        { platform: "Twitter", url: "https://twitter.com/your-username" },
      ];

  return (
    <section className="w-full max-w-3xl mx-auto my-6 space-y-6">
      {/* Contact Card */}
      <div className="p-8 sm:p-12 rounded-[28px] border border-border-subtle bg-bg-primary/50 backdrop-blur-xs text-center">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary mb-8 max-w-lg mx-auto leading-snug">
          {headline}
        </h2>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 max-w-xl mx-auto">
          {socialLinks.map((link, idx) => {
            if (!link?.url || !link?.platform) return null;

            const isMail = link.url.toLowerCase().startsWith("mailto:");

            return (
              <a
                key={link._key || `${link.platform}-${idx}`}
                href={link.url}
                target={isMail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-bg-primary text-sm font-semibold text-text-primary hover:bg-border-subtle/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span className="text-text-primary/70">
                  {getSocialIcon(link.platform)}
                </span>
                <span>{link.platform}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="relative w-full h-44 sm:h-52 rounded-[28px] overflow-hidden border border-border-subtle flex flex-col items-center justify-center text-center p-6 text-white shadow-xs">
        <Image
          src={bannerImageUrl}
          alt="Footer Banner Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Text Content */}
        <div className="relative z-10 space-y-1">
          <p className="text-sm sm:text-base font-medium drop-shadow-md">
            Designed and Developed by{" "}
            <a
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 font-semibold hover:opacity-80 transition-opacity"
            >
              {developerName}
            </a>
          </p>
          <p className="text-xs sm:text-sm opacity-90 font-normal drop-shadow-md">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}