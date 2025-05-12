import CurriculumVitae from '@/components/layout/curriculum-vitae/curriculum-vitae';
import CurriculumVitaeSkeleton from '@/components/layout/curriculum-vitae/curriculum-vitae-skeleton';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n-config';
import { Suspense } from 'react';

export default async function CurriculumVitaePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Curriculum Vitae Manuel Fahrenholz
      </h1>
      <div className="flex justify-center">
        <Button asChild size={'lg'} className="w-full max-w-[10rem]">
          <a
            href={`${process.env.NEXT_PUBLIC_APP_URL}/cv_manuel_fahrenholz_${params.lang}_download.pdf`}
            download>
            Download PDF
          </a>
        </Button>
      </div>
      <Suspense fallback={<CurriculumVitaeSkeleton />}>
        <CurriculumVitae lang={params.lang} />
      </Suspense>
    </div>
  );
}
