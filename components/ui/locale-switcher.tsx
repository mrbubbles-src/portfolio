'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/i18n-config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher({
  dictionary,
}: {
  dictionary: {
    de: string;
    en: string;
    screenreaderTitle: string;
    triggerTitle: string;
    contentTitle: string;
  };
}) {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild title={dictionary.triggerTitle}>
        <Button
          variant="outline"
          size={'icon'}
          className="hover:text-primary transition-all duration-300 ease-in-out dark:shadow-popover-foreground/5">
          <span className="sr-only">{dictionary.screenreaderTitle}</span>
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        title={dictionary.contentTitle}
        className="p-0">
        {i18n.locales.map((locale) => {
          return (
            <DropdownMenuItem key={locale} className="p-0">
              <Link
                href={redirectedPathname(locale)}
                className="cursor-pointer p-4 w-full flex justify-center">
                {locale === 'de' ? dictionary.de : dictionary.en}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
