import { type FC } from 'react';

// components
import ProductGrid from '@/components/content/ProductGrid';
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';

// styles
import styles from './styles.module.css';

const ProductsSection: FC = () => {
  return (
    <section className={styles.container}>
      <SectionTitle variant="secondary">
        Our Products
      </SectionTitle>

      <ProductGrid limit={3} />

      <SectionLink
        href="/products"
        label="See all products"
        variant="secondary"
      />

    </section>
  );
};

export default ProductsSection;
