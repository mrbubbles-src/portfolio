import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ),
  title: 'mrbubbles-src | Portfolio',
  description: 'Fullstack (MERN) Web Developer Portfolio',
  openGraph: {
    title: 'mrbubbles-src < Fullstack Web Developer />',
    description: 'Fullstack (MERN) Web Developer from Germany',
    siteName: 'https://mrbubbles-src.dev',
    images: [
      {
        url: 'https://mrbubbles-src.dev/api/og',
        width: 1200,
        height: 630,
        alt: 'mrbubbles-src Portfolio Preview',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mrbubbles-src < Fullstack Web Developer />',
    description: 'Fullstack (MERN) Web Developer from Germany',
    images: ['https://mrbubbles-src.dev/api/og'],
    creator: '@_MstrBubbles',
  },
  other: { 'apple-mobile-web-app-title': 'mrbubbles-src.dev' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.mrbubbles-src.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta
          name="description"
          content="Meet Manuel Fahrenholz (aka mrbubbles-src), a fullstack MERN web developer based in Germany."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Manuel Fahrenholz',
              jobTitle: 'Fullstack Web Developer',
              url: 'https://www.mrbubbles-src.dev',
              sameAs: [
                'https://github.com/mrbubbles-src',
                'https://linkedin.com/in/manuel-fahrenholz',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} bg-background text-foreground min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
