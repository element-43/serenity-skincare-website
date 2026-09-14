import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const SectionTitle: FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <h2
      className={cn(
        styles.content,
        variant === 'secondary' && styles.secondary,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
