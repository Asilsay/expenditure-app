import { CalendarIcon } from 'lucide-react';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { id } from 'date-fns/locale/id';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FC } from 'react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';

interface DatePickType<T extends FieldValues> {
  name: string;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  id?: string;
  label?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePickReu: FC<DatePickType<any>> = ({ name, control, label }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full gap-1 pt-[6px]">
          <FormLabel className="capitalize text-white">{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP', { locale: id })
                  ) : (
                    <span>Pilih Tanggal</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Calendar
                mode="single"
                locale={id}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DatePickReu;
