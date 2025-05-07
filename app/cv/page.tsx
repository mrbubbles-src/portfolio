import CV from '@/components/layout/CV';
import { Button } from '@/components/ui/button';

export default function CVPage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Curriculum Vitae Manuel Fahrenholz
      </h1>
      <div className="flex justify-center">
        <Button asChild size={'lg'} className="w-full max-w-[10rem]">
          <a
            href="/cv_manuel_fahrenholz_download.pdf"
            download
            aria-label="Download Manuel Fahrenholz's CV as PDF">
            Download PDF
          </a>
        </Button>
      </div>
      <CV />
    </div>
  );
}
