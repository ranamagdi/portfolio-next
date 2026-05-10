import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/ui/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Rana Magdy — Frontend Developer",
  description:
    "Frontend Developer with 3+ years of experience building scalable, high-performance web applications using React and Vue. Available for new opportunities.",
  keywords: ["Frontend Developer", "React", "Next.js", "Vue", "TypeScript", "Portfolio"],
  authors: [{ name: "Rana Magdy" }],
  openGraph: {
    title: "Rana Magdy — Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-[var(--font-inter)]">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800">
            <p>
              Designed &amp; Built by{' '}
              <span className="text-violet-500 font-medium">Rana Magdy</span>
              {' '}· {new Date().getFullYear()}
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
