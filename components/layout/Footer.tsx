import Link from 'next/link';

const Footer = () => (
  <footer
    className="mt-12 py-6 text-center text-lg text-muted-foreground border-t"
    aria-label="Site footer">
    <p>&copy; {new Date().getFullYear()} Manuel Fahrenholz</p>
    <Link
      href="/impressum"
      className="hover:text-primary focus-visible:underline transition-all duration-300 ease-in-out hover:underline underline-offset-4">
      Impressum / Legal Notice
    </Link>{' '}
    |{' '}
    <Link
      href="/datenschutz"
      className="hover:text-primary focus-visible:underline transition-all duration-300 ease-in-out hover:underline underline-offset-4">
      Datenschutz / Privacy Policy
    </Link>
  </footer>
);
export default Footer;
