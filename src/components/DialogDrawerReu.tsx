import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { FC, ReactNode, useState } from 'react';
import Bowser from 'bowser';

interface DialogDrawerProps {
  childrenButton: ReactNode;
  childrenContent: ReactNode;
  title?: string;
  desc?: string;
}
const DialogDrawerReu: FC<DialogDrawerProps> = ({
  childrenButton,
  childrenContent,
  title,
  desc,
}) => {
  const [open, setOpen] = useState(false);
  const browser = Bowser.getParser(window.navigator.userAgent);
  const thisDevice = browser.getPlatformType();

  return (
    <>
      {thisDevice === 'desktop' ? (
        <Dialog
          open={open}
          onOpenChange={setOpen}
        >
          <DialogTrigger asChild>{childrenButton}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {desc ? (
                <>
                  <DialogDescription>{desc} </DialogDescription>
                </>
              ) : null}
            </DialogHeader>
            {childrenContent}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          open={open}
          onOpenChange={setOpen}
        >
          <DrawerTrigger asChild>{childrenButton}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              {title ? <DrawerTitle>{title}</DrawerTitle> : null}
              {desc ? (
                <>
                  <DrawerDescription>{desc} </DrawerDescription>
                </>
              ) : null}
            </DrawerHeader>
            {childrenContent}
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default DialogDrawerReu;
