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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getDictionary } from '@/get-digtionary';
import LocaleSwitcher from '@/components/locale-switcher';
import { Locale } from '@/i18n-config';

const Navbar = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navbar'];
  lang: Locale;
}) => {
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
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b shadow-md">
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center text-xl transition-all duration-300 ease-in-out">
        <Link
          href="/"
          className="text-xl font-bold text-primary"
          aria-label="Back to landingpage">
          <div className="relative h-12 w-52 md:h-14 md:w-56">
            <Image
              src={Logo}
              fill
              sizes="(max-width: 768px) 208px, 224px"
              alt="mrbubbles-src — Fullstack Web Developer Logo"
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem
                key={href}
                className="hidden md:block active:scale-95 font-semibold">
                <Link
                  href={href}
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  {label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <LocaleSwitcher />
        <div className="flex items-center gap-3 md:order-2">
          <a
            href="https://github.com/mrbubbles-src"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 ease-in-out active:scale-95">
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faGithub} />
            </span>{' '}
            <span className="sr-only">
              Go to github.com/mrbubbles-src profile
            </span>
          </a>
          <a
            href="https://linkedin.com/in/manuel-fahrenholz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 ease-in-out active:scale-95">
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </span>
            <span className="sr-only">
              Go to linkedin.com/in/manuel-fahrenholz
            </span>
          </a>
          <ThemeToggle />
          <button
            title="menu button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ml-2 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${menuOpen ? 'rotate-90' : ''}`}
            aria-label="Toggle Menu">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div
            className={`md:hidden fixed top-[5.04rem] inset-x-0 z-50 transition-all duration-300 ease-in-out ${
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
