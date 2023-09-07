import React from 'react';

import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
