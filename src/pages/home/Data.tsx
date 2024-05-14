import { Coffee, Fuel, Users, Utensils } from 'lucide-react';
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
    color: 'text-sky-500',
    icon: (
      <Users
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
  {
    label: '',
    cat: 'pem',
    color: 'text-yellow-500',
    icon: (
      <Users
        size={16}
        strokeWidth={2.5}
      />
    ),
  },
];

export const allcode = [
  { label: 'Bensin', value: 'ben' },
  { label: 'Servis', value: 'srv' },
  { label: 'Parkir', value: 'pkr' },
  { label: 'Utang', value: 'utg' },
  { label: 'Nyumbang', value: 'nym' },
  { label: 'Tilik', value: 'til' },
  { label: 'Lelayu', value: 'lel' },
  { label: 'Infak', value: 'inf' },
  { label: 'Kucing', value: 'kuc' },
  { label: 'Indomart', value: 'idm' },
  { label: 'Alfamart', value: 'afm' },
  { label: 'Pamela', value: 'pam' },
  { label: 'Elektronik', value: 'elk' },
  { label: 'Bejo', value: 'bjo' },
  { label: 'Pakaian Atas', value: 'pak' },
  { label: 'Celana', value: 'cel' },
  { label: 'Aksesoris', value: 'aks' },
  { label: 'Sepatu', value: 'spt' },
  { label: 'Buku', value: 'buk' },
  { label: 'Arduino', value: 'ard' },
  { label: 'Kelas', value: 'kls' },
  { label: 'Jajan', value: 'jjn' },
  { label: 'Cafee', value: 'caf' },
  { label: 'Omah', value: 'omh' },
  { label: 'Makan', value: 'mkn' },
  { label: 'Kopi', value: 'kop' },
  { label: 'Pulsa', value: 'pul' },
  { label: 'Altera', value: 'alt' },
  { label: 'Fasya', value: 'pfs' },
  { label: 'Ema', value: 'pem' },
  { label: 'Periksa', value: 'pdr' },
  { label: 'Obat', value: 'obt' },
  { label: 'Suplemen', value: 'sup' },
  { label: 'Reksadana', value: 'rek' },
  { label: 'Darurat', value: 'dar' },
];
