import CurriculumVitae from '@/components/layout/curriculum-vitae/curriculum-vitae';
import { Button } from '@/components/ui/button';

export default function CurriculumVitaePage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Curriculum Vitae Manuel Fahrenholz
      </h1>
      <div className="flex justify-center">
        <Button asChild size={'lg'} className="w-full max-w-[10rem]">
          <a href="/cv_manuel_fahrenholz_download.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>
      <CurriculumVitae />
    </div>
  );
}
