import { type Metadata, type NextPage } from 'next';

// components
import PageTitle from '@/components/content/PageTitle';

// constants
import { TITLE } from '@/constants';

// containers
import PageShell from '@/containers/PageShell';

// styles
import styles from './styles.module.css';

export const metadata: Metadata = { title: `Our Story | ${TITLE}` };

const OurStoryPage: NextPage = () => {
  return (
    <PageShell>
      <main className={styles.main}>
        <header className={styles.header}>
          <PageTitle>Our Story</PageTitle>
        </header>

        <section className={styles.sectionStory} aria-label="The sotry behind Serenity Skincare">
        </section>
      </main>
    </PageShell>
  );
};

export default OurStoryPage;
