import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import type { Props } from './types';

// utilities
import { cn } from '@/utilities';

const SectionLink: FC<Props> = ({ href, label, variant = 'primary' }) => {
  return (
    <Link
      className={cn(
        styles.link,
        variant === 'secondary' && styles.linkSecondary
      )}
      href={href}
    >
      {label}<ArrowRight />
    </Link>
  );
};

export default SectionLink;
