import { type FC, useMemo } from 'react';

// components
import ProductList from '@/components/content/ProductList';
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { randomAlphaNumericString } from '@/utilities/strings';
import SocialMediaLinks from '@/components/social/SocialMediaLinks';

const ProductsSection: FC<Props> = ({ products }) => {
  const otherRangeListPrefix = useMemo(() => randomAlphaNumericString(), []);

  return (
    <section className={styles.container}>
      <SectionTitle variant="secondary">
        Our Products
      </SectionTitle>

      <ProductList items={products.slice(0, 4)} />

      <SectionLink
        href="/products"
        label="See all products"
        variant="secondary"
      />

      <div className={styles.otherRangesContainer}>
        <div className={styles.otherRangesContent}>
          <p>
            Please visit our socials for further information on our other ranges, including:
          </p>

          <ul className={styles.otherRangesList}>
            {[
              `Girl's healthy range (18-35 years)`,
              'Teenage range (12+ years)',
              'The gentlemen, anti-aging range',
              'Speciality skincare ranges: acne, Eczema, Psoriasis and Rosacea',
              'Well-being range',
            ].map((value, index) => (
              <li
                className={styles.otherRangesItem}
                key={`${otherRangeListPrefix}-${index}`}
              >
                {value}
              </li>
            ))}
          </ul>

          <div className={styles.otherRangesSocialMediaLinksContainer}>
            <SocialMediaLinks brandBackground={true} />
          </div>
        </div>
      </div>


    </section>
  );
};

export default ProductsSection;
