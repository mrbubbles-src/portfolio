interface IStack {
  Frontend: string[];
  Backend: string[];
  'Tools & Frameworks': string[];
}
const stack: IStack = {
  Frontend: [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'TailwindCSS',
    'Bootstrap',
  ],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL'],
  'Tools & Frameworks': [
    'Next.js',
    'Prisma',
    'Vite',
    'Git',
    'Figma',
    'Adobe Suite',
    'Affinity Suite',
  ],
};
export { stack };
