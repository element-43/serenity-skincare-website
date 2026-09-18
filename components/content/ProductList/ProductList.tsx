'use client';
import { type FC, useMemo } from 'react';

// components
import ProductCard from '../ProductCard';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { randomAlphaNumericString } from '@/utilities/strings';

const ProductList: FC<Props> = ({ items }) => {
  const productKeyPrefix = useMemo(() => randomAlphaNumericString(), []);

  return (
    <div className={styles.container}>
      {items.map((product, index) => (
        <ProductCard
          key={`${productKeyPrefix}-${index}`}
          item={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
