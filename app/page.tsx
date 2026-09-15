import { type NextPage } from 'next';

// components
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import Page from '@/components/content/Page';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

// data
import products from '@/data/products';
import testimonials from '@/data/testimonials';

const HomePage: NextPage = () => {
  return (
    <Page>
      <Page.Header overlay={true} />

      <HeroSection />

      <StorySection />

      <ProductsSection products={products} />

      <TestimonialsSection testimonials={testimonials} />

      <Page.Footer />
    </Page>
  );
};

export default HomePage;
