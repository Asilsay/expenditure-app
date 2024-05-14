import React, { FC } from 'react';
import { Toaster } from 'sonner';

interface LayoutType {
  nav?: boolean;
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-slate-700 items-center p-5 gap-3">
      <div className="flex gap-2 items-center justify-center text-3xl text-white font-bold tracking-wider ">
        {/* <BookOpenCheck size={27} /> */}
        <p>CATAT!</p>
      </div>

      <div className="w-full h-max flex justify-center ">{children}</div>
      <Toaster />
    </section>
  );
};

export default Layout;
