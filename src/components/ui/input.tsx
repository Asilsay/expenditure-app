import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface CurrencyInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  allowNegative?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value = 0,
  onChange,
  className = '',
  allowNegative = true,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawText = e.target.value;
    const numberText = rawText.replace(/\D/g, '');
    let result = numberText;

    if (allowNegative) {
      result = handleNegativeValue(rawText, numberText);
    }

    onChange(Number(result));
  };

  return (
    <>
      <input
        value={_renderCurrency(value)}
        onChange={handleChange}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
      <input
        max={100000000}
        ref={inputRef}
        hidden
        value={value}
        onChange={() => {}}
      />
    </>
  );
};

Input.displayName = 'CurrencyInput';

export { Input, CurrencyInput };

const handleNegativeValue = (rawText: string, numberText: string): string => {
  let textNumber = numberText;
  let result = textNumber;

  if (rawText.includes('-')) {
    textNumber = `-${textNumber}`;
  }

  if (rawText.includes('-0') || rawText.includes('-0-') || rawText.includes('0-')) {
    textNumber = `-1`;
  }

  if (isNaN(Number(textNumber)) || textNumber === '' || !textNumber) {
    textNumber = '0';
  }
  result = textNumber;

  return result;
};

const _renderCurrency = (value: number | string): string => {
  const number = Number(value);
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
};
