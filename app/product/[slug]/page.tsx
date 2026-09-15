import { type Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { type ReactElement } from 'react';

// components
import Page from '@/components/content/Page';
import ProductList from '@/components/content/ProductList';
import SectionLink from '@/components/content/SectionLink';
import SectionTitle from '@/components/content/SectionTitle';

// constants
import { TITLE } from '@/constants';

// data
import products from '@/data/products';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return { title: `${product.name} | ${TITLE}` };
}

const ProductPage: (params: Props) => Promise<ReactElement> = async ({ params }: Props) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <Page>
      <Page.Header />

      <Page.Title>
        {product.name}
      </Page.Title>

      <Page.Content>
        <section className={styles.details} aria-labelledby="product-name">
          <div className={styles.image}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              preload
            />
          </div>

          <SectionLink href="/products" label="See all products" />

        </section>

        {relatedProducts.length > 0 && (
          <section className={styles.related} aria-label="Related products">
            <SectionTitle>You may also like</SectionTitle>

            <ProductList items={relatedProducts} />

          </section>
        )}
      </Page.Content>

      <Page.Footer />
    </Page>
  );
};

export default ProductPage;
