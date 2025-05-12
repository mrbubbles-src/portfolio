import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getDictionary } from '@/get-digtionary';
export default function ContactAbout({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['contactAbout'];
}) {
  return (
    <Card className="shadow-none flex flex-col gap-1 w-full h-full p-0">
      <CardHeader className="w-full max-w-[330px] place-self-center">
        <Image
          src="/profile.jpeg"
          alt={dictionary.imageAlt}
          width={400}
          height={400}
          placeholder="blur"
          className="rounded-lg shadow-md object-cover"
          priority
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center">
        <article
          aria-labelledby={dictionary.a11y.labelledByContactAbout}
          className="mt-5">
          <h2 id={dictionary.a11y.labelledByContactAbout} className="sr-only">
            {dictionary.title}
          </h2>
          <ul className="flex flex-col gap-2 items-center justify-center text-center md:items-start md:place-self-center">
            <li className="text-md xl:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">Name:</strong>
              </span>
              <br className="md:hidden" />
              <span>Manuel Fahrenholz</span>
            </li>
            <li className="text-md xl:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">
                  {dictionary.proffessionTitle}:
                </strong>
                <br className="md:hidden" />
              </span>
              <span>{dictionary.proffessionDescription}</span>
            </li>
            <li className="text-md xl:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">Stack:</strong>
                <br className="md:hidden" />
              </span>
              <span>MERN</span>
            </li>
            <li className="text-md xl:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">
                  {dictionary.currentJobTitle}:
                </strong>
                <br className="md:hidden" />
              </span>
              <span>{dictionary.currentJobDescription}</span>
            </li>
            <li className="text-md xl:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">
                  {dictionary.locationTitle}
                </strong>
                <br className="md:hidden" />
              </span>
              <span>{dictionary.locationDescription}</span>
            </li>
          </ul>
        </article>
        <div className="flex justify-center gap-4 mt-6 flex-wrap place-self-center">
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faGithub} />
              </span>{' '}
              GitHub
            </a>
          </Button>
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <a
              href="https://linkedin.com/in/manuel-fahrenholz"
              target="_blank"
              rel="noopener noreferrer">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>{' '}
              LinkedIn
            </a>
          </Button>
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <Link href="/cv">{dictionary.cvButton}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
