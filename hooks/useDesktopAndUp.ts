'use client';
import { useMediaQuery } from 'react-responsive';

export default function useDesktopAndUp(): boolean {
  return useMediaQuery({
    query: '(min-width: 1024px)'
  });
}
