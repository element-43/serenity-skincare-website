'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { navLinks, products, testimonials } from '@/lib/serenity-data'

import Header from '@/components/layout/Header'
import footerStyles from '@/components/layout/Footer/styles.module.css'

export { Header }

export function Footer() { return <footer className={footerStyles.footer}><div><Link href="/" className="wordmark">serenity<span>.</span></Link><p>Skincare for coming back to yourself.</p></div><nav className={footerStyles.links} aria-label="Footer navigation"><Link href="/our-story">Our story</Link><Link href="/testimonials">Kind words</Link></nav><p className={footerStyles.copyright}>© 2026 Serenity Skincare</p></footer> }

export function ProductCard({ product }: { product: typeof products[number] }) { return <Link href={`/product/${product.slug}`} className="product-card"><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></div><div className="product-meta"><div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3></div><span>{product.price}</span></div></Link> }

export function TestimonialCard({ item }: { item: typeof testimonials[number] }) { return <article className="testimonial-card"><span className="quote-mark">“</span><blockquote>{item.quote}</blockquote><footer><strong>{item.name}</strong><span>{item.role}</span></footer></article> }

export function SectionIntro({ eyebrow, title, text, link }: { eyebrow: string; title: string; text?: string; link?: { href: string; label: string } }) { return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="intro-copy">{text}</p>}{link && <Link className="text-link" href={link.href}>{link.label}<ArrowRight /></Link>}</div> }

export function ProductGrid({ limit }: { limit?: number }) { return <div className="product-grid">{products.slice(0, limit).map((product) => <ProductCard key={product.slug} product={product} />)}</div> }

export function TestimonialGrid({ limit }: { limit?: number }) { return <div className="testimonial-grid">{testimonials.slice(0, limit).map((item) => <TestimonialCard key={item.name} item={item} />)}</div> }

export function SiteShell({ children, overlay = false }: { children: React.ReactNode; overlay?: boolean }) { return <><Header overlay={overlay} />{children}<Footer /></> }

export function AddToBag() { const [added, setAdded] = useState(false); return <button className="button button-dark" onClick={() => setAdded(true)}>{added ? 'Added to bag' : 'Add to bag'}<ArrowRight /></button> }
