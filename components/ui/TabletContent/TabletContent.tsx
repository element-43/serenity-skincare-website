'use client';
import { type FC, type PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

// hooks
import { useTabletAndUp } from '@/hooks';

const TabletContent: FC<PropsWithChildren> = ({ children }) => {
  const isTabletAndUp = useTabletAndUp();

  if (!isTabletAndUp) {
    return null;
  }

  return children;
};

export default TabletContent;
