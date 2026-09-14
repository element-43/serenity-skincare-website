import { type FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

// types
import type { Props } from './types';

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className={styles.container}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <div>
          <p className={styles.eyebrow}>{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <span>{product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
