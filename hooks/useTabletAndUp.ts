'use client';
import { useMediaQuery } from 'react-responsive';

export default function useTabletAndUp(): boolean {
  return useMediaQuery({
    query: '(min-width: 768px)'
  });
}
