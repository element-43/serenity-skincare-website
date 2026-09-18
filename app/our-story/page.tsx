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
      <Page.Content className={styles.content}>
        <section className={styles.sectionStory} aria-label="The story behind Serenity Skincare">
          <div className={styles.image}>
            <img
              alt="The story behind Serenity Skincare"
              src="/images/our_story.jpg"
            />
          </div>
        </section>
      </Page.Content>

      <Page.Footer />
    </Page>
  );
};

export default OurStoryPage;
