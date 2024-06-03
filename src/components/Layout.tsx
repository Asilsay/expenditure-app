import { ChevronDown, Notebook, NotebookPen, NotebookTabs } from 'lucide-react';
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
import { Separator } from './ui/separator';

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
      <div className="flex w-[420px] gap-2 items-center justify-between text-3xl text-white font-bold tracking-wider px-2.5">
        <div className="flex gap-2 items-center">
          {nav === '/' ? (
            <NotebookPen size={27} />
          ) : nav === '/review' ? (
            <Notebook size={27} />
          ) : (
            <NotebookTabs size={27} />
          )}
          <p>CATAT!</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(`${nav}`)}
            >
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-max "
            align="end"
          >
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
      </div>
      <Separator className="w-[420px]" />

      <div className="w-full h-max flex justify-center ">{children}</div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Layout;
