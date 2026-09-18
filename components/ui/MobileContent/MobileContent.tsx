'use client';
import { type FC, type PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

// hooks
import { useMobile } from '@/hooks';

const MobileContent: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMobile();

  if (!isMobile) {
    return null;
  }

  return children;
};

export default MobileContent;
