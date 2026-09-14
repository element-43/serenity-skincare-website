import { ProductGrid, SiteShell } from '@/components/serenity-site'
export const metadata = { title: 'Products' }
export default function ProductsPage() { return <SiteShell><main><section className="page-hero"><p className="eyebrow">The collection</p><h1>Small rituals,<br />thoughtfully made.</h1></section><section className="section"><ProductGrid /></section></main></SiteShell> }
