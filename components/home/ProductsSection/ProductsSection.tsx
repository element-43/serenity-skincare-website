import { type FC } from 'react';

// components
import ProductList from '@/components/content/ProductList';
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const ProductsSection: FC<Props> = ({ products }) => {
  return (
    <section className={styles.container}>
      <SectionTitle variant="secondary">
        Our Products
      </SectionTitle>

      <ProductList items={products.slice(0, 3)} />

      <SectionLink
        href="/products"
        label="See all products"
        variant="secondary"
      />

    </section>
  );
};

export default ProductsSection;
