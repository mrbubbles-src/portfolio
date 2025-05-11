'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle({
  dictionary,
}: {
  dictionary: {
    screenreaderTitle: string;
    triggerTitle: string;
    contentTitle: string;
  };
}) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild title={dictionary.triggerTitle}>
        <Button
          variant="outline"
          size="icon"
          className="hover:text-primary transition-all duration-300 ease-in-out">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{dictionary.screenreaderTitle}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" title={dictionary.contentTitle}>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
