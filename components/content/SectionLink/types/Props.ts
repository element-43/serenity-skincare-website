// types
import type { VariantProps } from '@/types/ui';

interface ComponentProps {
  href: string;
  label: string;
}

type Props = ComponentProps & VariantProps;

export default Props;
