import { type FC } from 'react';

// components
import ProductCard from '../ProductCard';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const ProductList: FC<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((product) => (
        <ProductCard
          key={product.slug}
          item={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
