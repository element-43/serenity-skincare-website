'use client';
import { useMediaQuery } from 'react-responsive';

export default function useDesktopAndUp(): boolean {
  return useMediaQuery({
    query: '(max-width: 767px)'
  });
}
