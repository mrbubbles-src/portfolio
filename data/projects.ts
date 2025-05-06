interface IProjects {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}
const projects: Array<IProjects> = [
  {
    title: '< REDACTED /> coming soon™ 👀',
    description: '< REDACTED />',
    tech: ['< REDACTED />'],
    github: 'https://github.com/',
    live: 'https://mrbubbles-src.dev',
    image: '/screenshots/redacted.jpeg',
  },
  {
    title: 'bookNook',
    description:
      'A book management application to track your existin book catalog, what you are currently reading - including tracking what page you are on - and what you would like to read. If you want, you can also give yourself a little reading challenge! < Note: The backend runs on the render(dot)com free-tier. It sometimes takes a minute or so to wake up, so please be patient. Once it is awake, it will run as smooth as butter 😉! This was created by my team and I as our final group-project, while we were learning web development at the DCI Digital Career Institute. >',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'SASS'],
    github:
      'https://github.com/mrbubbles-src/dci-final-project-roomtwenty-booknook',
    live: 'https://roomtwenty-booknook.vercel.app/',
    image: '/screenshots/book-nook.png',
  },
  {
    title: 'Vet-Clinic Homepage Overhaul',
    description:
      'My team and I overhauled the Homepage of a Veterinarian, to make it look a little more modern. < Note: This was created by my team and I as our final group-project for the SPA-module, while we were learning web development at the DCI Digital Career Institute. >',
    tech: ['React', 'SASS'],
    github: 'https://github.com/mrbubbles-src/spa-final-group-project',
    live: 'https://spa-final-group-project.vercel.app/',
    image: '/screenshots/vet-clinic.png',
  },
  {
    title: 'Random Student Name Generator',
    description:
      'I created this little project while learning web development at the DCI Digital Career Institute, to help my teachers with choosing a random student for whatever they need one for (e.g. answering questions, presenting assignment solutins etc.). This is a little passion project for me which I am trying to improve whenever I find the time. I should be done soon so, keep an eye on it, once it is receives a re-launch!',
    tech: ['JavaScript', 'React', 'SASS'],
    github: 'https://github.com/mrbubbles-src/teacherbuddy',
    live: 'https://random-student-name-generator.vercel.app/',
    image: '/screenshots/teacherbuddy.png',
  },
];

export { projects };
