import { Check, ChevronsUpDown } from 'lucide-react';
import { Control, FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FC } from 'react';

interface Language {
  label: string;
  value: string;
}

interface ComboType<T extends FieldValues> {
  name: string;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  id?: string;
  label?: string;
  languages: Language[];
  form: {
    setValue: UseFormSetValue<T>;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ComboReu: FC<ComboType<any>> = ({ name, control, label, languages, form }) => {
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
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-full justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? languages.find((language) => language.value === field.value)?.label
                    : `Pilih ${label}`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Mencari..." />
                <CommandList>
                  <CommandEmpty>Tidak Ditemukan.</CommandEmpty>
                  <CommandGroup>
                    {languages.map((language) => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          form.setValue(name, language.value);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            language.value === field.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {language.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ComboReu;
