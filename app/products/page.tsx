import { type Metadata, type NextPage } from 'next';

// components
import ProductList from '@/components/content/ProductList';

// constants
import { TITLE } from '@/constants';

// containers
import PageShell from '@/containers/PageShell';

// data
import products from '@/data/products';

// styles
import styles from './styles.module.css';

export const metadata: Metadata = { title: `Products | ${TITLE}` };

const ProductsPage: NextPage = () => {
  return (
    <PageShell>
      <main>
        <header className={styles.header}>
          <h1>Our Products</h1>
        </header>

        <section className={styles.products} aria-label="All products">
          <ProductList items={products} />
        </section>
      </main>
    </PageShell>
  );
};

export default ProductsPage;
