import { type FC, useMemo } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

// constants
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from '@/constants';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const SocialMediaLinks: FC<Props> = ({ brandBackground = false, size }) => {
  const linkSize = useMemo(() => {
    switch (size) {
      case 'xs':
        return styles.linkXs;
      case 'sm':
        return styles.linkSm;
      case 'md':
        return styles.linkMd;
      default:
        break;
    }
  }, [size]);

  return (
    <nav
      aria-label="Social media links"
      className={cn(styles.container, brandBackground && styles.brandBackground)}
    >
      <a className={cn(styles.link, linkSize, styles.facebook)} href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF className={styles.icon} aria-hidden="true" focusable="false" />
      </a>
      <a className={cn(styles.link, linkSize, styles.whatsapp)} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp className={styles.icon} aria-hidden="true" focusable="false" />
      </a>
      <a className={cn(styles.link, linkSize, styles.instagram)} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className={styles.icon} aria-hidden="true" focusable="false" />
      </a>
      <a className={cn(styles.link, linkSize, styles.tiktok)} href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <FaTiktok className={styles.icon} aria-hidden="true" focusable="false" />
      </a>
    </nav>
  );
};

export default SocialMediaLinks;
