import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const TestimonialCard: FC<Props> = ({ item }) => {
  return (
    <article className={styles.container}>
      <span className={styles.quoteMark} aria-hidden="true">“</span>
      <blockquote>{item.quote}</blockquote>
      {item.name && (
        <footer>
          <strong>{item.name}</strong>
        </footer>
      )}
    </article>
  );
};

export default TestimonialCard;
