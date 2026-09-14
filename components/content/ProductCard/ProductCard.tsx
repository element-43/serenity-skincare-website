import { type FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

// types
import type { Props } from './types';

const ProductCard: FC<Props> = ({ item }) => {
  return (
    <Link href={`/product/${item.slug}`} className={styles.container}>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>

      <div className={styles.meta}>
        {item.category && (
          <p className={styles.eyebrow}>{item.category}</p>
        )}

        <h3>{item.name}</h3>

      </div>

    </Link>
  );
};

export default ProductCard;
