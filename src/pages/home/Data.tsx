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
  { label: 'bensin', value: 'ben' },
  { label: 'servis', value: 'srv' },
  { label: 'parkir', value: 'pkr' },
  { label: 'nyumbang', value: 'nym' },
  { label: 'tilik', value: 'til' },
  { label: 'lelayu', value: 'lel' },
  { label: 'infak', value: 'inf' },
  { label: 'kado', value: 'kdo' },
  { label: 'pasokan', value: 'pas' },
  { label: 'angpau', value: 'ang' },
  { label: 'kucing', value: 'kuc' },
  { label: 'elektronik', value: 'elk' },
  { label: 'peralatan', value: 'prl' },
  { label: 'belanja', value: 'blj' },
  { label: 'pakaian atas', value: 'pak' },
  { label: 'celana', value: 'cel' },
  { label: 'aksesoris', value: 'aks' },
  { label: 'sepatu', value: 'spt' },
  { label: 'buku', value: 'buk' },
  { label: 'arduino', value: 'ard' },
  { label: 'kelas', value: 'kls' },
  { label: 'olahraga', value: 'olr' },
  { label: 'jajan', value: 'jjn' },
  { label: 'cafee', value: 'caf' },
  { label: 'omah', value: 'omh' },
  { label: 'makan', value: 'mkn' },
  { label: 'kopi', value: 'kop' },
  { label: 'utang', value: 'utg' },
  { label: 'pulsa', value: 'pul' },
  { label: 'altera', value: 'alt' },
  { label: 'langganan', value: 'lan' },
  { label: 'game', value: 'gam' },
  { label: 'listrik', value: 'lst' },
  { label: 'ibuk', value: 'ibk' },
  { label: 'pajek', value: 'paj' },
  { label: 'fasya uang', value: 'pfs' },
  { label: 'ema uang', value: 'pem' },
  { label: 'periksa', value: 'pdr' },
  { label: 'obat', value: 'obt' },
  { label: 'suplemen', value: 'sup' },
  { label: 'reksadana', value: 'rek' },
  { label: 'darurat', value: 'dar' },
  { label: 'emas', value: 'ems' },
  { label: 'haji', value: 'haj' },
  { label: 'qurban', value: 'qur' },
  { label: 'shodaqoh', value: 'sho' },
  { label: 'zakat', value: 'zak' },
];
