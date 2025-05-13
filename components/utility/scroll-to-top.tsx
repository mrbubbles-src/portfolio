'use client';

import { ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [threshold, setThreshold] = useState(300);

  useEffect(() => {
    const updateThreshold = () => {
      if (window.matchMedia('(max-width: 425px)').matches) {
        setThreshold(1625);
      } else if (window.matchMedia('(max-width: 768px)').matches) {
        setThreshold(1365);
      } else {
        setThreshold(734);
      }
    };
    updateThreshold();

    window.addEventListener('resize', updateThreshold);

    return () => window.removeEventListener('resize', updateThreshold);
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleVisibility);

    return () => window.removeEventListener('scroll', handleVisibility);
  }, [threshold]);

  const handleScroll = () => {
    return document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <Button
        variant={'default'}
        size={'icon'}
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-md transition-all bg-primary/50 duration-300 ease-in-out hover:bg-primary p-6"
        onClick={handleScroll}
        id="scroll-to-top"
        aria-label="Scroll to top"
        title="Scroll to top">
        <ChevronUp className="size-8" />
      </Button>
    )
  );
};

export default ScrollToTop;
