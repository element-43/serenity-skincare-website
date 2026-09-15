import { type Metadata, type NextPage } from 'next';

// components
import Page from '@/components/content/Page';

// constants
import { TITLE } from '@/constants';

// styles
import styles from './styles.module.css';

export const metadata: Metadata = { title: `Our Story | ${TITLE}` };

const OurStoryPage: NextPage = () => {
  return (
    <Page>
      <Page.Header />
      <Page.Title>
        Our Story
      </Page.Title>

      <Page.Content>
        <section className={styles.sectionStory} aria-label="The sotry behind Serenity Skincare">
        </section>
      </Page.Content>

      <Page.Footer />
    </Page>
  );
};

export default OurStoryPage;
