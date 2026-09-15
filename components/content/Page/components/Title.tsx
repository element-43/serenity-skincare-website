import { type FC } from 'react';

// styles
import styles from '../styles.title.module.css';

// types
import type { TitleProps as Props } from '../types';

// utilities
import { cn } from '@/utilities';

const Title: FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <div className={styles.container}>
      <h1
        className={cn(
          styles.title,
          variant === 'secondary' && styles.secondary,
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
