import Redacted from '@/public/screenshots/redacted.jpg';
import BookNook from '@/public/screenshots/book-nook.jpg';
import VetClinic from '@/public/screenshots/vet-clinic.png';
import StudentNameGenerator from '@/public/screenshots/teacherbuddy.png';
import { StaticImageData } from 'next/image';

type ProjectKey =
  | 'redacted'
  | 'bookNook'
  | 'vetClinic'
  | 'studentNameGenerator';

interface IProjects {
  key: ProjectKey;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: StaticImageData;
}
const projects: Array<IProjects> = [
  {
    key: 'redacted',
    title: 'redacted.title',
    description: '< REDACTED />',
    tech: ['redacted.description'],
    github: 'https://github.com/',
    live: 'https://mrbubbles-src.dev',
    image: Redacted,
  },
  {
    key: 'bookNook',
    title: 'bookNook.title',
    description: 'bookNook.description',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'SASS'],
    github:
      'https://github.com/mrbubbles-src/dci-final-project-roomtwenty-booknook',
    live: 'https://roomtwenty-booknook.vercel.app/',
    image: BookNook,
  },
  {
    key: 'vetClinic',
    title: 'vetClinic.title',
    description: 'vetClinic.description',
    tech: ['React', 'SASS'],
    github: 'https://github.com/mrbubbles-src/spa-final-group-project',
    live: 'https://spa-final-group-project.vercel.app/',
    image: VetClinic,
  },
  {
    key: 'studentNameGenerator',
    title: 'studentNameGenerator.title',
    description: 'studentNameGenerator.description',
    tech: ['JavaScript', 'React', 'SASS'],
    github: 'https://github.com/mrbubbles-src/teacherbuddy',
    live: 'https://random-student-name-generator.vercel.app/',
    image: StudentNameGenerator,
  },
];

export { projects };
