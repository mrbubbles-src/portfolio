import { Locale } from '@/i18n-config';

const CurriculumVitae = ({ lang }: { lang: Locale }) => {
  return (
    <div className="rounded shadow overflow-hidden w-full mx-auto">
      <figure>
        <iframe
          src={`${process.env.NEXT_PUBLIC_APP_URL}/cv_manuel_fahrenholz_${lang}_view.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=100&view=FitH`}
          className="w-full h-[90vh] border-none"
          title="Curriculum Vitae"
        />
        <figcaption className="sr-only">
          Embedded PDF view of Manuel Fahrenholz&apos;s CV.
        </figcaption>
      </figure>
    </div>
  );
};

export default CurriculumVitae;
