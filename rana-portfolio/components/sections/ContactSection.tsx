'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/ui/ContactForm';
import { PersonalInfo } from '@/lib/types';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Code2 } from 'lucide-react';

interface ContactSectionProps {
  personalInfo: PersonalInfo | null;
}

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
};

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const contactItems = [
    personalInfo?.location && {
      icon: <MapPin size={18} />,
      label: 'Address',
      value: personalInfo.location,
      href: undefined,
    },
    personalInfo?.phone && {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    personalInfo?.whatsapp && {
      icon: <MessageCircle size={18} />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}?text=Hello%20Rana`,
    },
    personalInfo?.email && {
      icon: <Mail size={18} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string; href?: string }[];

  return (
    <SectionWrapper
      id="contact"
      className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-violet-500 uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Let&apos;s Work Together
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hi — my inbox is always open!
            </p>

            {/* Contact items */}
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center text-violet-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            {personalInfo?.socialLinks && personalInfo.socialLinks.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {personalInfo.socialLinks.map((link) => (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.platform}
                      className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-500 dark:hover:text-violet-400 transition-all shadow-sm"
                    >
                      {iconMap[link.icon?.toLowerCase()] ?? (
                        <span className="text-xs font-bold">{link.platform.charAt(0)}</span>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
