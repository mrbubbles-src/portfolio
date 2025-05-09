import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
      <CardHeader className="w-full place-self-center flex flex-col">
        <Image
          src="/profile.jpeg"
          alt="Profile picture of Manuel Fahrenholz"
          width={400}
          height={400}
          className="rounded-lg shadow-md object-cover place-self-center"
          priority
        />
        <div className="flex justify-center gap-4 mt-4 w-full grow">
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
        </div>
      </CardHeader>
      <CardContent className="md:place-self-center md:mr-16">
        <h1 className="text-3xl font-bold my-4 md:my-0 md:mb-4">
          Hello{' '}
          <code
            className="bg-accent rounded-md shadow-sm p-[0.3rem] italic text-sm md:text-lg text-pretty text-primary"
            aria-hidden="true">
            `<strong className="text-sh-sign">&#36;</strong>
            <strong className="text-sh-entity">&#123;</strong>
            <strong className="text-sh-sign">&lt;</strong>
            <strong className="text-sh-identifier">span</strong>
            <strong className="text-sh-sign">&gt;</strong>
            <strong className="text-sh-entity">&#123;</strong>
            <strong className="text-sh-identifier">username</strong>
            <strong className="text-sh-entity">&#125;</strong>
            <strong className="text-sh-sign">&lt;/</strong>
            <strong className="text-sh-identifier">span</strong>
            <strong className="text-sh-sign">&gt;</strong>
            <strong className="text-sh-entity">&#125;</strong>`
          </code>
          , nice to meet you!
        </h1>
        <article>
          <h2 className="sr-only">About Manuel Fahrenholz</h2>
          <p className="mb-1 leading-relaxed text-lg">
            My name is{' '}
            <strong className="text-primary">Manuel Fahrenholz</strong>, aka{' '}
            <a
              href="https://github.com/mrbubbles-src"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold underline underline-offset-4 cursor-pointer">
              mrbubbles-src
            </a>
            . Nice to meet you!
          </p>
          <p className="mb-1 leading-relaxed text-lg">
            I&apos;m <strong className="text-primary">{age}</strong> years old
            and live in the b-e-a-utiful city of{' '}
            <strong className="text-primary">Cologne, Germany</strong>.
          </p>
          <p className="mb-1 leading-relaxed text-lg">
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
          <p className="mb-1 leading-relaxed text-lg">
            With a background in caregiving, helping people is second nature — I
            aim to build apps that offer real support, even in small ways.
          </p>
          <p className="mb-1 leading-relaxed text-lg">
            Outside of work, I LOVE gaming, reading (or listening to) books,
            binge-watching shows & movies, and occasionally doodling just for
            fun.
          </p>
          <p className="mb-1 leading-relaxed text-lg">
            Want to know more? Feel free to check out my CV, GitHub, or LinkedIn
            — or just send me a message via the contact form!
          </p>
          <p className="mb-1 leading-relaxed text-lg">
            Can’t wait to hear more about YOU!
          </p>
          <p className="mb-1 leading-relaxed text-lg">Best,</p>
          <p className="mb-1 leading-relaxed text-lg">Manuel</p>
        </article>
        <div className="flex justify-center gap-4 mt-3 grow">
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <Link href="/cv">See my journey</Link>
          </Button>
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <Link href="/#contact">Get in touch!</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
