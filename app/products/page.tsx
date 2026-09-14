import { type Metadata, type NextPage } from 'next';

// components
import PageTitle from '@/components/content/PageTitle';
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
      <main className={styles.main}>
        <header className={styles.header}>
          <PageTitle>Our Products</PageTitle>
        </header>

        <section className={styles.products} aria-label="All products">
          <ProductList items={products} />
        </section>
      </main>
    </PageShell>
  );
};

export default ProductsPage;
