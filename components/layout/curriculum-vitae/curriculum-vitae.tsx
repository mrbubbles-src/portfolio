'use client';

import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Locale } from '@/i18n-config';
import CurriculumVitaeSkeleton from './curriculum-vitae-skeleton';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

const CurriculumVitae = ({ lang }: { lang: Locale }) => {
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="flex flex-col items-center my-2.5 p-2.5">
      <div className="w-full max-w-[calc(100%-2em)] my-4" ref={setContainerRef}>
        <Document
          className="flex flex-col items-center"
          file={`${process.env.NEXT_PUBLIC_APP_URL}/cv_manuel_fahrenholz_${lang}_view.pdf`}
          loading={<CurriculumVitaeSkeleton />}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}>
          {Array.from({ length: numPages ?? 0 }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              className="my-4 shadow-xl dark:shadow-primary/15"
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<CurriculumVitaeSkeleton />}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default CurriculumVitae;
