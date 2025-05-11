import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer/footer';
import { Toaster } from '@/components/ui/sonner';
import { i18n, Locale } from '@/i18n-config';
import { getDictionary } from '@/get-digtionary';
import '@/app/globals.css';
import { InputModalityTracker } from '@/components/modailty-hack';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
    ),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.openGraph.title,
      description: dictionary.meta.openGraph.description,
      siteName: 'https://mrbubbles-src.dev',
      images: [
        {
          url: 'https://mrbubbles-src.dev/api/og',
          width: 1200,
          height: 630,
          alt: dictionary.meta.openGraph.ogAlt,
        },
      ],
      type: 'website',
      locale: params.lang === 'de' ? 'de_DE' : 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta.title,
      description: dictionary.meta.openGraph.description,
      images: ['https://mrbubbles-src.dev/api/og'],
      creator: '@_MstrBubbles',
    },
    other: { 'apple-mobile-web-app-title': 'mrbubbles-src.dev' },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={params.lang}
      className="dark scroll-smooth mouse-mode"
      suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mrbubbles-src.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Manuel Fahrenholz',
              jobTitle: 'Fullstack Web Developer',
              url: 'https://mrbubbles-src.dev',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <InputModalityTracker />
          <Navbar dictionary={dictionary.navbar} lang={lang} />
          <main
            id="main-content"
            className="flex-1 flex flex-col gap-4 container mx-auto p-4 ">
            {children}
          </main>
          <Footer dictionary={dictionary.footer} />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
