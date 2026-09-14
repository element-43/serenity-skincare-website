import { type FC } from 'react';

// components
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';
import TestimonialList from '@/components/content/TestimonialList';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const TestimonialsSection: FC<Props> = ({ testimonials }) => {
  return (
    <section className={styles.container}>
      <SectionTitle>
        Our Testimonials
      </SectionTitle>

      <TestimonialList items={testimonials.slice(0, 3)} />

      <SectionLink
        href="/testimonials"
        label="Read the testimonials"
      />
    </section>
  );
};

export default TestimonialsSection;
