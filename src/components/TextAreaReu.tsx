/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { Textarea } from './ui/textarea';

interface InputType<T extends FieldValues> {
  placeholder?: string;
  name: string;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  id?: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  bordered?: boolean;
  disabled?: boolean;
}

const TextAreaReu: FC<InputType<any>> = ({ name, control, label, disabled }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize text-white">{label}</FormLabel>
          <FormControl>
            <Textarea
              className="resize-none"
              disabled={disabled}
              placeholder={label}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaReu;
