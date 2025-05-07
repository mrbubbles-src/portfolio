'use client';
import Image from 'next/image';

interface IProjectImage {
  title: string;
  live: string;
  image: string;
}

const ProjectImage = ({ live, image, title }: IProjectImage) => {
  return (
    <>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live preview of ${title}`}
        className="block mb-4 overflow-hidden rounded hover:opacity-90 transition shadow-md">
        <Image
          src={image || '/screenshots/placeholder.jpeg'}
          alt={`Screenshot of ${title}`}
          width={1280}
          height={720}
          className="w-full aspect-video object-cover rounded"
          placeholder="blur"
          blurDataURL={`/blur/blur-placeholder.jpeg`}
        />
      </a>
    </>
  );
};

export default ProjectImage;
