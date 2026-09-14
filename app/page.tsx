import { type NextPage } from 'next';

// components
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

// containers
import PageShell from '@/containers/PageShell';

const HomePage: NextPage = () => {
  return (
    <PageShell overlay={true}>
      <main>
        <HeroSection />

        <StorySection />

        <ProductsSection />

        <TestimonialsSection />

      </main>
    </PageShell>
  );
};

export default HomePage;
