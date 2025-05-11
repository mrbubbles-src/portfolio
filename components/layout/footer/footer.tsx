import { getDictionary } from '@/get-digtionary';
import Link from 'next/link';

const Footer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['footer'];
}) => (
  <footer className="mt-12 py-6 text-center text-lg text-muted-foreground border-t">
    <p>&copy; {new Date().getFullYear()} Manuel Fahrenholz</p>
    <Link
      href="/impressum"
      className="hover:text-primary focus-visible:underline transition-all duration-300 ease-in-out hover:underline underline-offset-4">
      {dictionary.legal}
    </Link>{' '}
    |{' '}
    <Link
      href="/datenschutz"
      className="hover:text-primary focus-visible:underline transition-all duration-300 ease-in-out hover:underline underline-offset-4">
      {dictionary.privacy}
    </Link>
  </footer>
);
export default Footer;
