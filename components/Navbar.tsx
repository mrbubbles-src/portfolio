'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from './ui/theme-toggle';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => (
  <section className="border-b shadow-sm bg-background/70 backdrop-blur sticky top-0 left-0">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-xl">
      <Link href="/" className="text-xl font-bold text-primary">
        <Image
          src={Logo}
          width={250}
          height={50}
          alt="mrbulles-src fullstack web developper logo"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link href="/#about">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#stack">Stack</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#projects">Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#contact">Contact</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/cv">CV</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="https://linkedin.com/in/manuel-fahrenholz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  </section>
);
export default Navbar;
