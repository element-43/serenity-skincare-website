// types
import type { Category } from '@/types/dtos';

interface Props {
  activeItem?: string;
  items: Category[];
  onSelect: (item: Category | null) => void;
}

export default Props;
