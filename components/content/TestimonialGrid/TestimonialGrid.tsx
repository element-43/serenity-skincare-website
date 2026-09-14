import { type FC } from 'react';
import { testimonials } from '@/lib/serenity-data';
import TestimonialCard from '../TestimonialCard';
import styles from './styles.module.css';

// types
import type { Props } from './types';

const TestimonialGrid: FC<Props> = ({ limit }) => {
  return (
    <div className={styles.container}>
      {testimonials.slice(0, limit).map((item) => (
        <TestimonialCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default TestimonialGrid;
