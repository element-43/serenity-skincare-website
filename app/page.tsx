import { type NextPage } from 'next';

// components
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

// data
import products from '@/data/products';
import testimonials from '@/data/testimonials';

// containers
import PageShell from '@/containers/PageShell';

const HomePage: NextPage = () => {
  return (
    <PageShell overlay={true}>
      <main>
        <HeroSection />

        <StorySection />

        <ProductsSection products={products} />

        <TestimonialsSection testimonials={testimonials} />

      </main>
    </PageShell>
  );
};

export default HomePage;
