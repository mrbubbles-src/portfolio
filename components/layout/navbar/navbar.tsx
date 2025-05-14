'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getDictionary } from '@/get-digtionary';
import LocaleSwitcher from '@/components/ui/locale-switcher';
import { Locale } from '@/i18n-config';
import { handleScroll } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navbar'];
  lang: Locale;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: `/${lang}/#about`, label: dictionary.about },
    { href: `/${lang}/#stack`, label: dictionary.stack },
    { href: `/${lang}/#projects`, label: dictionary.projects },
    { href: `/${lang}/#contact`, label: dictionary.contact },
    {
      href: `/${lang}/cv`,
      label: dictionary.cv,
    },
  ];

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (pathname === `/${lang}`) {
      e.preventDefault();
      if (window.location.hash) {
        router.replace(`/${lang}`, { scroll: false });
      }
      handleScroll();
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b shadow-md">
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center text-xl transition-all duration-300 ease-in-out">
        <Link
          href={`/${lang}`}
          onClick={handleLogoClick}
          className="text-xl font-bold text-primary"
          aria-label={dictionary.a11y.labelBack}>
          <div className="relative h-12 w-52 md:h-14 md:w-56">
            <Image
              src={Logo}
              fill
              sizes="(max-width: 768px) 208px, 224px"
              alt="mrbubbles-src — Fullstack Web Developer Logo"
              priority
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem
                key={href}
                className="hidden lg:block active:scale-95 font-semibold">
                <Link
                  href={href}
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  {label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 md:order-2">
          <LocaleSwitcher dictionary={dictionary.language} />
          <ThemeToggle dictionary={dictionary.themeToggle} />
          <button
            title="menu button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden ml-2 hover:text-primary transition-all dark:shadow-popover-foreground/5 duration-300 ease-in-out cursor-pointer ${menuOpen ? 'rotate-90' : ''}`}
            aria-label={dictionary.a11y.labelToggle}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div
            className={`lg:hidden fixed top-[5.04rem] inset-x-0 z-50 transition-all duration-300 ease-in-out ${
              !menuOpen
                ? 'pointer-events-none opacity-0 -translate-y-4'
                : 'opacity-100 translate-y-0'
            }`}
            aria-hidden={!menuOpen}>
            <div className="bg-background/90 backdrop-blur text-foreground px-6 py-6 text-center text-lg flex flex-col gap-6 shadow-lg">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4 font-semibold active:scale-95">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
