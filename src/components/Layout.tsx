import React, { FC } from 'react';

interface LayoutType {
  nav?: boolean;
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-slate-700 items-center p-5 gap-3">
      <p className="text-3xl text-white font-bold tracking-wider ">CATAT!</p>

      <div className="w-full h-max flex justify-center ">{children}</div>
    </section>
  );
};

export default Layout;
