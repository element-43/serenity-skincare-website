import { type FC } from 'react';

// components
import TestimonialCard from '@/components/content/TestimonialCard';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const TestimonialList: FC<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <TestimonialCard key={item.slug} item={item} />
      ))}
    </div>
  );
};

export default TestimonialList;
