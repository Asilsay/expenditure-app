import { Coffee, Droplet, Fuel, Sun, Utensils } from 'lucide-react';
import React from 'react';

export interface ButtonData {
  label: string;
  cat: string;
  color: string;
  icon: React.ReactNode;
}

export const buttons: ButtonData[] = [
  {
    label: 'X',
    cat: 'x',
    color: 'text-blue-500',
    icon: (
      <Fuel
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: 'LT',
    cat: 'l',
    color: 'text-green-500',
    icon: (
      <Fuel
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: '',
    cat: 'mkn',
    color: 'text-red-500',
    icon: (
      <Utensils
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: '',
    cat: 'caf',
    color: 'text-brown-500',
    icon: (
      <Coffee
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: '',
    cat: 'pfs',
    color: 'text-purple-500',
    icon: (
      <Sun
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: '',
    cat: 'pem',
    color: 'text-cyan-500',
    icon: (
      <Droplet
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
];
