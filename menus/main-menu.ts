// types
import type { MenuItem } from '@/types';

const mainMenu: MenuItem[] = [
  {
    active: true,
    label: 'Our story',
    href: '/our-story',
  },
  {
    active: true,
    label: 'Our Products',
    href: '/products',
  },
  {
    active: true,
    label: `Women's Power Anti-Ageing Range (Peri/Menopausal Skin)`,
    href: '/products?category=anti-ageing',
  },
  {
    active: true,
    label: 'Customer Testimonials',
    href: '/testimonials',
  },
];

export default mainMenu;
