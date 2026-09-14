import { type FC } from 'react';
import { products } from '@/lib/serenity-data';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

// types
import type { Props } from './types';

const ProductGrid: FC<Props> = ({ limit }) => {
  return (
    <div className={styles.container}>
      {products.slice(0, limit).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
