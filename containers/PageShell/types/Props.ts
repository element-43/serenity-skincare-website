import type { PropsWithChildren } from 'react';

interface ComponentProps {
  overlay?: boolean;
}

type Props = PropsWithChildren<ComponentProps>;

export default Props;
