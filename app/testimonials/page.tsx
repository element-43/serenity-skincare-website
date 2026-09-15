import { type Metadata, type NextPage } from 'next';

// components
import Page from '@/components/content/Page';

// constants
import { TITLE } from '@/constants';

// data
import testimonials from '@/data/testimonials';

// styles
import styles from './styles.module.css';

export const metadata: Metadata = { title: `Testimonials | ${TITLE}` };

const TestimonialsPage: NextPage = () => {
  return (
    <Page>
      <Page.Header />
        <Page.Title>
          Our Testimonials
        </Page.Title>

        <Page.Content>
          <section className={styles.testimonials} aria-label="Customer testimonials">
            {testimonials.map((item) => (
              <article key={item.slug} id={`testimonial-${item.slug}`} className={styles.testimonial}>
                {item.image && (
                  <div className={styles.image}>
                    <img
                      src={item.image}
                      alt={item.name ? `Photo accompanying ${item.name}'s testimonial` : 'Photo accompanying this customer testimonial'}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className={styles.content}>
                  {item.quote && <blockquote className={styles.quote}>{item.quote}</blockquote>}

                  {item.content && (
                    <div className={styles.story}>
                      {item.content.split(/\n\s*\n/).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {item.name && <footer className={styles.name}>{item.name}</footer>}
                </div>
              </article>
            ))}
          </section>
        </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default TestimonialsPage;
