import { type FC } from 'react';

// components
import SectionLink from '@/components/content/SectionLink';
import SectionParagraph from '@/components/content/SectionParagraph';
import SectionTitle from '@/components/content/SectionTitle';

// styles
import styles from './styles.module.css';

const StorySection: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionTitle>
          Our Story
        </SectionTitle>

        <SectionParagraph>
          Serenity is a small collection of effective, uncomplicated essentials. We use considered botanicals, honest ingredients, and sensory textures to make the daily ritual feel like yours again.
        </SectionParagraph>

        <SectionLink
          href="/our-story"
          label="Read our story"
        />
      </div>

      <div className={styles.imageFrame}>
        <img
          alt="Green botanical leaves in a sunlit studio"
          loading="lazy"
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85"
        />
      </div>
    </section>
  );
};

export default StorySection;
