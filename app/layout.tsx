import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, PT_Mono, PT_Serif } from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';

// constants
import { TAGLINE, TITLE } from '@/constants';

// styles
import './globals.css';

// utilities
import { cn } from '@/utilities';

const fontHeading = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const fontSans = PT_Serif({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const fontMono = PT_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: '400',
})

const metadata: Metadata = {
  title: TITLE,
  description: TAGLINE,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: TITLE,
    description: TAGLINE,
    type: 'website',
  },
};
const viewport: Viewport = {
  colorScheme: 'light',
  initialScale: 1,
  themeColor: '#666b5e',
  width: 'device-width',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      className={cn(
        fontHeading.variable,
        fontSans.variable,
        fontMono.variable
      )}
      data-scroll-behavior="smooth"
      lang="en"
    >
    <body>
    {children}
    </body>
    </html>
  );
};

export default RootLayout;
export { metadata, viewport };
