import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const SectionParagraph: FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <p
      className={cn(
        styles.content,
        variant === 'secondary' && styles.secondary,
      )}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
