import { type Metadata, NextPage } from 'next';
import { Suspense } from 'react';

// components
import FilterableProductList from '@/components/content/FilterableProductList';
import Page from '@/components/content/Page';

// constants
import { TITLE } from '@/constants';

// data
import categories from '@/data/categories';
import products from '@/data/products';

export const metadata: Metadata = { title: `Products | ${TITLE}` };

const ProductsPage: NextPage = () => {
  return (
    <Page>
      <Page.Header />

      <Page.Title>
        Our Products
      </Page.Title>

      <Page.Content>
        <section aria-label="All products">
          <Suspense>
            <FilterableProductList
              categories={categories}
              products={products}
            />
          </Suspense>
        </section>
      </Page.Content>

      <Page.Footer />
    </Page>
  );
};

export default ProductsPage;
