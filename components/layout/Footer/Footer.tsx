import { type FC, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import SocialMediaLinks from '@/components/social/SocialMediaLinks';

// data
import mainMenu from '@/data/main-menu';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

const Footer: FC<Props> = () => {
  const year = useMemo(() => (new Date().getFullYear()), []);

  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>© {year} Serenity Skincare</p>

      <nav aria-label="Footer navigation" className={styles.links}>
        {mainMenu.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <SocialMediaLinks brandBackground={true} />
    </footer>
  );
};

export default Footer;
