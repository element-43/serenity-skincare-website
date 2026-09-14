import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const TestimonialCard: FC<Props> = ({ item }) => {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <span className={cn(styles.quoteMark, styles.quoteMarkBegin)} aria-hidden="true">“</span>

        <blockquote className={styles.quote}>{item.quote}</blockquote>

        <span className={cn(styles.quoteMark, styles.quoteMarkEnd)} aria-hidden="true">”</span>
      </div>
    </article>
  );
};

export default TestimonialCard;
