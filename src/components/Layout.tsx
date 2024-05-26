import { Notebook, NotebookPen, NotebookTabs } from 'lucide-react';
import React, { FC, useEffect, useState } from 'react';
import { Toaster } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutType {
  nav?: boolean;
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  const [nav, setNav] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const goto = (path: string) => {
    setNav(path);
    navigate(path);
  };

  useEffect(() => {
    setNav(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col bg-slate-700 items-center p-5 gap-3">
      <div className="flex gap-2 items-center justify-center text-3xl text-white font-bold tracking-wider py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(`${nav}`)}
            >
              {nav === '/' ? (
                <NotebookPen size={27} />
              ) : nav === '/review' ? (
                <Notebook size={27} />
              ) : (
                <NotebookTabs size={27} />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-max">
            <DropdownMenuRadioGroup
              value={nav}
              onValueChange={goto}
            >
              <DropdownMenuRadioItem value="/">write</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="/review">read</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="/category">cat</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>{' '}
          </DropdownMenuContent>
        </DropdownMenu>

        <p>CATAT!</p>
      </div>

      <div className="w-full h-max flex justify-center ">{children}</div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Layout;
