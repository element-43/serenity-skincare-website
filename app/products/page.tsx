import { type Metadata, type NextPage } from 'next';

// components
import Page from '@/components/content/Page';
import ProductList from '@/components/content/ProductList';

// constants
import { TITLE } from '@/constants';

// data
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
          <ProductList items={products} />
        </section>
      </Page.Content>

      <Page.Footer />
    </Page>
  );
};

export default ProductsPage;
