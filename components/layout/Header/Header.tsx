import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import SocialMediaLinks from '@/components/social/SocialMediaLinks';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const Header: FC<Props> = ({ overlay }) => {
  return (
    <header
      className={cn(
        styles.container,
        overlay && styles.overlay,
      )}
    >
      <Link href="/" className={styles.logo} aria-label="Serenity home">
        <Image
          src="/images/banner_logo@1071x250.png"
          alt="Serenity Skincare"
          width={1071}
          height={250}
          className={styles.logoImage}
          sizes="(max-width: 420px) 55vw, 240px"
        />
      </Link>

      <SocialMediaLinks />

    </header>
  );
};

export default Header;
