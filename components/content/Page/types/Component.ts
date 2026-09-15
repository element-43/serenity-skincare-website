import type { FC } from 'react';

// types
import ContentProps from './ContentProps';
import FooterProps from './FooterProps';
import HeaderProps from './HeaderProps';
import TitleProps from './TitleProps';

interface Component<Props> extends FC<Props> {
  Content: FC<ContentProps>;
  Footer: FC<FooterProps>;
  Header: FC<HeaderProps>;
  Title: FC<TitleProps>;
}

export default Component;
