import { SectionIntro, SiteShell, TestimonialGrid } from '@/components/serenity-site'
export const metadata = { title: 'Kind words' }
export default function TestimonialsPage() { return <SiteShell><main><section className="page-hero"><p className="eyebrow">Kind words</p><h1>What a little<br />space can hold.</h1></section><section className="section"><SectionIntro eyebrow="From our community" title="The best part is hearing how Serenity becomes part of your day." /><TestimonialGrid /></section></main></SiteShell> }
