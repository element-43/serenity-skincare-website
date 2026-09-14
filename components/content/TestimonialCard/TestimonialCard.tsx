import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const TestimonialCard: FC<Props> = ({ item }) => {
  return (
    <article className={styles.container}>
      <span className={styles.quoteMark}>“</span>
      <blockquote>{item.quote}</blockquote>
      <footer>
        <strong>{item.name}</strong>
        <span>{item.role}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
