'use client';
import { type FC, useCallback, useMemo } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';
import type { Category } from '@/types/dtos';

// utilities
import { randomAlphaNumericString } from '@/utilities/strings';
import { cn } from '@/utilities/styles';

const CategoryFilter: FC<Props> = ({ activeItem, items, onSelect }) => {
  // memos
  const categoryKeyPrefix = useMemo(() => randomAlphaNumericString(), []);
  // callbacks
  const handleOnClick = useCallback((category: Category | null) => () => onSelect(category), [onSelect]);

  return (
    <div className={styles.container} role="group" aria-label="Filter products by category">
      <button
        aria-pressed={!activeItem}
        className={cn(styles.filter, !activeItem && styles.active)}
        onClick={handleOnClick(null)}
        type="button"
      >
        All
      </button>

      {items.sort((a, b) => a.order - b.order).map((category, index) => {
        const isActive = activeItem === category.slug;

        return (
          <button
            aria-pressed={isActive}
            className={cn(styles.filter, isActive && styles.active)}
            key={`${categoryKeyPrefix}-${index}`}
            onClick={handleOnClick(category)}
            type="button"
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
