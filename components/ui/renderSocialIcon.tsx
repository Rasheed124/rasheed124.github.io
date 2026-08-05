import { Mail, Send, Globe } from "lucide-react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa6";

export const renderSocialIcon = (platform: string) => {
  const name = platform.toLowerCase();
  if (name.includes("email") || name.includes("mail")) return <Mail size={14} />;
  if (name.includes("github")) return <FaGithub size={14} />;
  if (name.includes("linkedin")) return <FaLinkedin size={14} />;
  if (name.includes("twitter") || name.includes("x")) return <FaXTwitter size={14} />;
  if (name.includes("instagram") || name.includes("insta")) return <FaInstagram size={14} />;
  if (name.includes("telegram")) return <Send size={14} />;
  if (name.includes("youtube")) return <FaYoutube size={14} />;
  return <Globe size={14} />;
};