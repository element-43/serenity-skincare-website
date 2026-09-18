'use client';
import { type FC, type PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

// hooks
import { useDesktopAndUp } from '@/hooks';

const DesktopContent: FC<PropsWithChildren> = ({ children }) => {
  const isDesktopAndUp = useDesktopAndUp();

  if (!isDesktopAndUp) {
    return null;
  }

  return children;
};

export default DesktopContent;
