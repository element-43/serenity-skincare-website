import { type FC } from 'react';

// styles
import styles from '../styles.content.module.css';

// types
import type { ContentProps as Props } from '../types';

// utilities
import { cn } from '@/utilities/styles';

const Content: FC<Props> = ({ children, className }) => {
  return (
    <main className={cn(styles.content, className)}>
      {children}
    </main>
  );
};

export default Content;
