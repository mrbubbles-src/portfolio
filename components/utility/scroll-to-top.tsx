'use client';

import { ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const startObserver = () => {
      const sentinel = document.querySelector('#scroll‑sentinel');
      if (!sentinel) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              setIsVisible(true);
              setShouldBounce(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: '400px 0px 0px 0px',
        },
      );

      const delay = window.location.hash.length > 1 ? 500 : 100;
      const timerId = setTimeout(() => observer.observe(sentinel), delay);

      return () => {
        clearTimeout(timerId);
        observer.disconnect();
      };
    };

    const cleanup = startObserver();

    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [pathname]);

  useEffect(() => {
    if (shouldBounce) {
      const bounceTimer = setTimeout(() => setShouldBounce(false), 2511);
      return () => clearTimeout(bounceTimer);
    }
  }, [shouldBounce]);

  const handleScroll = () => {
    return document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      id="scroll-to-top"
      aria-label="Scroll to top"
      title="Scroll to top"
      variant={'default'}
      size={'icon'}
      className={`fixed bottom-4 right-4 z-50 rounded-full transition-all duration-300 ease-in-out bg-primary/50 hover:bg-primary p-6 ${shouldBounce ? 'animate-bounce shadow-md shadow-destructive' : 'shadow-md'} ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={handleScroll}>
      <ChevronUp className="size-8" />
    </Button>
  );
};

export default ScrollToTop;
export { ScrollToTop };
