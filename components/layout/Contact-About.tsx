import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function ContactAbout() {
  return (
    <Card className="shadow-none md:flex md:flex-row gap-1 w-full h-full p-0">
      <CardHeader className="w-full max-w-[330px] place-self-center">
        <Image
          src="/profile.jpeg"
          alt="Profile picture of Manuel Fahrenholz"
          width={400}
          height={400}
          className="rounded-lg shadow-md object-cover"
          priority
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center">
        <article className="mt-5 md:mt-0">
          <h2 id="about-description" className="sr-only">
            Summary about Manuel Fahrenholz
          </h2>
          <ul>
            <li className="text-md md:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">Name:</strong>
              </span>
              <span>Manuel Fahrenholz</span>
            </li>
            <li className="text-md md:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">
                  Profession:
                </strong>
              </span>
              <span>Fullstack Web Developer</span>
            </li>
            <li className="text-md md:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">Stack:</strong>
              </span>
              <span>MERN</span>
            </li>
            <li className="text-md md:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">
                  Current Job:
                </strong>
              </span>
              <span>Jr. WebDev Teacher</span>
            </li>
            <li className="text-md md:text-lg">
              <span>
                <strong className="mr-2 text-sm text-primary">Location:</strong>
              </span>
              <span>Cologne, Germany</span>
            </li>
          </ul>
        </article>
        <div className="flex justify-center gap-4 mt-6 flex-wrap place-self-center">
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <Link href="/cv">See my journey</Link>
          </Button>
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </Button>
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <a
              href="https://linkedin.com/in/manuel-fahrenholz"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
