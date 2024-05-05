import React, { FC } from 'react';

interface LayoutType {
  nav?: boolean;
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="w-full h-max flex flex-grow">{children}</div>
    </section>
  );
};

export default Layout;
