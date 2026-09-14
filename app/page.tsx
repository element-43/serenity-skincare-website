import { ArrowRight } from 'lucide-react';
import { type NextPage } from 'next';
import Link from 'next/link';

// components
import HeroSection from '@/components/home/HeroSection';
import { ProductGrid, SectionIntro, TestimonialGrid } from '@/components/serenity-site';

// containers
import PageShell from '@/containers/PageShell';

const HomePage: NextPage = () => {
  return (
    <PageShell overlay={true}>
      <main>
        <HeroSection />

        <section className="section split-section"><SectionIntro eyebrow="A gentler approach" title="Skin care, slowed down." text="Serenity is a small collection of effective, uncomplicated essentials. We use considered botanicals, honest ingredients, and sensory textures to make the daily ritual feel like yours again." link={{ href: '/our-story', label: 'Read our story' }} /><div className="image-frame"><img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85" alt="Green botanical leaves in a sunlit studio" loading="lazy" /></div></section>

        <section className="section"><SectionIntro eyebrow="The essentials" title="A quiet shelf of good things." /><ProductGrid limit={3} /><Link className="text-link essentials-link" href="/products">Shop all products <ArrowRight /></Link></section>

        <section className="section band"><SectionIntro eyebrow="Kind words" title="The ritual is personal. The feeling is shared." link={{ href: '/testimonials', label: 'Read all kind words' }} /><TestimonialGrid limit={3} /></section>

      </main>
    </PageShell>
  );
};

export default HomePage;
