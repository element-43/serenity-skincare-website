import Link from 'next/link';
import { type FC, useMemo } from 'react';

// menus
import mainMenu from '@/menus/main-menu';

// styles
import styles from './styles.module.css';

// utilities
import { randomAlphaNumericString } from '@/utilities/strings';

const HeroSection: FC = () => {
  const menuKeyPrefix = useMemo(() => randomAlphaNumericString(), []);

  return (
    <section className={styles.container}>
      <img
        alt="Skincare samples on a table."
        className={styles.image}
        loading="lazy"
        src="/images/hero_image@1672x941.png"
      />

      <nav className={styles.menu} aria-label="Main navigation">
        {mainMenu.map(({ href, label }, index) => <Link key={`${menuKeyPrefix}-${index}`} href={href}>{label}</Link>)}
      </nav>
    </section>
  );
};

export default HeroSection;
