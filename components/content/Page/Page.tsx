import { type PropsWithChildren } from 'react';

// components
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';

// types
import type { Component } from './types';

const Page: Component<PropsWithChildren> = ({ children }) => children;

Page.Content = Content;
Page.Footer = Footer;
Page.Header = Header;
Page.Title = Title;

export default Page;
