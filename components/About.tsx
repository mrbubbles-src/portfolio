import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function About() {
  function calculateAge(
    birthYear: number,
    birthMonth: number,
    birthDay: number,
  ) {
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    const birthDateThisYear = new Date(
      today.getFullYear(),
      birthMonth - 1,
      birthDay,
    );
    if (today < birthDateThisYear) {
      age--;
    }
    return age;
  }
  const age = calculateAge(1988, 4, 16);

  return (
    <Card className="shadow-md md:flex md:flex-row gap-1">
      <CardHeader className="w-full max-w-[330px] place-self-center">
        <Image
          src="/profile.jpeg"
          alt="Profile picture"
          width={400}
          height={400}
          className="rounded-lg shadow-md object-cover"
          priority
        />
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild className="">
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </Button>
          <Button asChild className="">
            <a
              href="https://linkedin.com/in/manuel-fahrenholz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold my-4 md:my-0 md:mb-4">
          Hello World!
        </h2>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          My name is <strong className="text-primary">Manuel Fahrenholz</strong>
          , aka{' '}
          <strong className="text-primary">
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="underline underline-offset-4 cursor-pointer">
              mrbubbles-src
            </a>
          </strong>
          . Nice to meet you!
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          I&apos;m <strong className="text-primary">{age}</strong> years old and
          live in the b-e-a-utiful city of{' '}
          <strong className="text-primary">Cologne, Germany</strong>.
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          My journey as a{' '}
          <strong className="text-primary">Fullstack Web Developer</strong>{' '}
          began in September 2022 at the DCI Digital Career Institute, where I
          completed a 12-month{' '}
          <strong className="text-primary">MERN-Stack</strong> course. I now
          work there as a{' '}
          <strong className="text-primary">
            Junior Teacher for Web Development
          </strong>
          , sharing my knowledge with the next wave of developers.
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          With a background in caregiving, helping people is second nature — I
          aim to build apps that offer real support, even in small ways.
        </p>
        <p className="mb-1 leading-relaxed">
          Outside of work, I LOVE gaming, reading (or listening to) books,
          binge-watching shows & movies, and occasionally doodling just for fun.
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          Want to know more? Feel free to check out my CV, GitHub, or LinkedIn —
          or just send me a message via the contact form!
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">
          Can’t wait to hear more about YOU!
        </p>
        <p className="mb-1 leading-relaxed text-lg text-justify">Best,</p>
        <p className="mb-1 leading-relaxed text-lg text-justify">Manuel</p>
        <div className="flex justify-center gap-4 mt-3">
          <Button asChild className="">
            <Link href="/cv">Check out my CV</Link>
          </Button>
          <Button asChild className="">
            <Link href="/#contact">Get in touch!</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
