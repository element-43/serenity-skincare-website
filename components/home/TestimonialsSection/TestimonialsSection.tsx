import { type FC } from 'react';

// components
import TestimonialGrid from '@/components/content/TestimonialGrid';
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';

import styles from './styles.module.css';

const TestimonialsSection: FC = () => {
  return (
    <section className={styles.container}>
      <SectionTitle>
        Our Testimonials
      </SectionTitle>

      <TestimonialGrid limit={3} />

      <SectionLink
        href="/testimonials"
        label="Read the testimonials"
      />
    </section>
  );
};

export default TestimonialsSection;
