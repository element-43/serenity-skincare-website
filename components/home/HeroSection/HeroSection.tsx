import { type FC } from 'react';

// menus
import mainMenu from '@/menus/main-menu';

// styles
import styles from './styles.module.css';

const HeroSection: FC = () => {
  return (
    <section className={styles.container}>
      <img
        alt="Skincare samples on a table."
        className={styles.image}
        src="/images/hero_image@1672x941.png"
      />

      <nav className={styles.menu} aria-label="Main navigation">
        {mainMenu.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
      </nav>
    </section>
  );
};

export default HeroSection;
