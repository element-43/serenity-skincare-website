import { type FC, useMemo } from 'react';
import Link from 'next/link';

// components
import SocialMediaLinks from '@/components/social/SocialMediaLinks';

// menus
import footerMenu from '@/menus/footer-menu';

// styles
import styles from '../styles.footer.module.css';

// types
import type { FooterProps as Props } from '../types';

// utilities
import { randomAlphaNumericString } from '@/utilities/strings';

const Footer: FC<Props> = () => {
  const menuKeyPrefix = useMemo(() => randomAlphaNumericString(), []);
  const year = useMemo(() => (new Date().getFullYear()), []);

  return (
    <footer className={styles.footer}>
      <div className={styles.allergyNotice}>
        <img
          alt="Allergy notice: Serenity Skincare products may contain nut derivites. Please review the ingredients arefully before purchasing."
          loading="lazy"
          src="/images/allergy_notice@1241x616.png"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.copyright}>© {year} Serenity Skincare</p>

        <nav aria-label="Footer navigation" className={styles.menu}>
          {footerMenu.map((item, index) => (
            <Link key={`${menuKeyPrefix}-${index}`} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialMediaLinks brandBackground={true} />
      </div>
    </footer>
  );
};

export default Footer;
