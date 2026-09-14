import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const PageTitle: FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <h1
      className={cn(
        styles.content,
        variant === 'secondary' && styles.secondary,
      )}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
