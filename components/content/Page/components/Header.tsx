'use client';
import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import SocialMediaLinks from '@/components/social/SocialMediaLinks';

// constants
import { WHATSAPP_URL } from '@/constants';

// hooks
import { useMobile } from '@/hooks';

// styles
import styles from '../styles.header.module.css';

// types
import type { HeaderProps as Props } from '../types';

// utilities
import { cn } from '@/utilities';

const Header: FC<Props> = ({ overlay }) => {
  const isMobile = useMobile();

  return (
    <header
      className={cn(
        styles.header,
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

      <div className={styles.tabletContainer}>
        <a
          aria-label="WhatsApp"
          className={styles.enquiryLink}
          href={WHATSAPP_URL}
          rel="noopener noreferrer"
          target="_blank">
          Ready to order or have a question?
        </a>

        <SocialMediaLinks
          brandBackground={true}
          {...(isMobile && {
            size: 'xs', // force small size for mobiles
          })}
        />
      </div>

    </header>
  );
};

export default Header;
