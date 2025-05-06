'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-b shadow-sm bg-background/70 backdrop-blur sticky top-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-xl">
        <Link href="/" className="text-xl font-bold text-primary ">
          <div className="relative h-12 w-52 md:h-14 md:w-56">
            <Image
              src={Logo}
              fill
              sizes="(max-width: 768px) 208px, 224px"
              alt="mrbubbles-src — Fullstack Web Developer Logo"
            />
          </div>
        </Link>

        <NavigationMenuItem className="flex gap-2 md:gap-3 items-center md:order-2 relative z-50 ml-auto mr-3">
          <a
            href="https://github.com/mrbubbles-src"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-primary transition-all duration-300 ease-in-out active:scale-95"
            />
          </a>
          <a
            href="https://linkedin.com/in/manuel-fahrenholz"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-primary transition-all duration-300 ease-in-out active:scale-95"
            />
          </a>
          <ThemeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 md:gap-5 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent px-4 py-4 md:p-0 z-40 border-t md:border-0  ml-auto mr-5 ${isOpen ? 'place-items-center' : ''}`}>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row gap-4 md:gap-6">
              <NavigationMenuItem className="active:scale-95">
                <Link
                  href="/#about"
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="active:scale-95">
                <Link
                  href="/#stack"
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  Stack
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="active:scale-95">
                <Link
                  href="/#projects"
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="active:scale-95">
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="active:scale-95">
                <Link
                  href="/cv"
                  className="hover:text-primary transition-all duration-300 ease-in-out hover:underline underline-offset-4">
                  Curriculum Vitae
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavigationMenuItem>
        <button
          className={`md:hidden ml-2 hover:text-primary transition-transform duration-300 ease-in-out transform ${isOpen ? 'rotate-90' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
