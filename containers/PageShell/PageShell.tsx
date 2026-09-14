import { type FC } from 'react';

// components
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// types
import type { Props } from './types';

const PageShell: FC<Props> = ({ children, overlay = false }) => {
  return (
    <>
      <Header overlay={overlay} />

      {children}

      <Footer />

    </>
  );
};

export default PageShell;
