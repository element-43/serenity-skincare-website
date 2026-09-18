'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type FC, useCallback, useEffect, useState } from 'react';

// components
import CategoryFilter from '@/components/content/CategoryFilter';
import ProductList from '@/components/content/ProductList';

// constants
import { CATEGORY_PARAM } from '@/constants';

// types
import type { Props } from './types';
import type { Category, Product } from '@/types/dtos';

const FilterableProductList: FC<Props> = ({ categories, products }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get(CATEGORY_PARAM);
  // states
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  // callbacks
  const handleOnSelect = useCallback((category: Category | null) => {
    const params = new URLSearchParams(searchParams.toString());
    const _category = categories.find(({ slug }) => slug === category?.slug) || null;

    params.delete(CATEGORY_PARAM);

    if (_category) {
      params.set(CATEGORY_PARAM, _category.slug);
    }


    return router.push(
      `${pathname}?${params.toString()}`,
      {
        scroll: false,
      },
    );
  }, [categories, pathname, router, searchParams]);

  useEffect(() => {
    if (activeCategory) {
      return setFilteredProducts(products.filter(({ categories }) => categories?.some((slug) => slug === activeCategory)));
    }

    return setFilteredProducts(products);
  }, [activeCategory, products, categories]);

  return (
    <>
      <CategoryFilter
        items={categories.sort((a, b) => a.order - b.order)}
        onSelect={handleOnSelect}
        {...(activeCategory && {
          activeItem: activeCategory,
        })}
      />

      <ProductList items={filteredProducts.sort((a, b) => a.order - b.order)} />
    </>

  );
};

export default FilterableProductList;
