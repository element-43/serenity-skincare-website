'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import Header from '@/components/layout/Header'
import footerStyles from '@/components/layout/Footer/styles.module.css'

export { Header }

export function Footer() { return <footer className={footerStyles.footer}><div><Link href="/" className="wordmark">serenity<span>.</span></Link><p>Skincare for coming back to yourself.</p></div><nav className={footerStyles.links} aria-label="Footer navigation"><Link href="/our-story">Our story</Link><Link href="/testimonials">Kind words</Link></nav><p className={footerStyles.copyright}>© 2026 Serenity Skincare</p></footer> }

export { default as ProductCard } from '@/components/content/ProductCard'

export { default as TestimonialCard } from '@/components/content/TestimonialCard'

export { default as ProductGrid } from '@/components/content/ProductList'

export { default as TestimonialGrid } from '@/components/content/TestimonialList'

export function SiteShell({ children, overlay = false }: { children: React.ReactNode; overlay?: boolean }) { return <><Header overlay={overlay} />{children}<Footer /></> }

export function AddToBag() { const [added, setAdded] = useState(false); return <button className="button button-dark" onClick={() => setAdded(true)}>{added ? 'Added to bag' : 'Add to bag'}<ArrowRight /></button> }
