import Layout from '@/components/Layout';
import TabsMain from '@/components/TabsMain';
import api from '@/utils/api';
import { ChevronsUp, Disc3, EyeIcon, Loader2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useEffect, useState } from 'react';
import DialogDrawerReu from '@/components/DialogDrawerReu';
import { Button } from '@/components/ui/button';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Review() {
  return (
    <Layout>
      <TabsMain
        tabs={[
          {
            label: 'Recap',
            value: 'recap',
            icon: <Disc3 size={16} />,
            children: <Recap />,
          },

          {
            label: 'Latest',
            value: 'latest',
            icon: <ChevronsUp size={16} />,
            children: <Latest />,
          },
        ]}
      />
    </Layout>
  );
}

export default Review;

interface Entry {
  TANGGAL: string;
  KATEGORI: string;
  KEPERLUAN: string;
  DESKRIPSI: string;
  PENJUAL: string;
  BIAYA: string;
}
interface recapProps {
  month: number;
  today: number;
  week: number;
  year: number;
}

function Latest() {
  const [latestData, setLatestData] = useState<Entry[]>([]);
  const [loadGet, setLoadGet] = useState(false);

  const onGet = () => {
    setLoadGet(true);

    api
      .GetTask('latest')
      .then((response) => {
        const { data } = response.data;
        setLatestData(data);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoadGet(false);
      });
  };

  useEffect(() => {
    onGet();
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full items-start justify-center p-2 text-white ">
        <Table>
          <TableCaption>Latest data Entries</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="text-white text-center ">Tanggal</TableHead>
              <TableHead className="text-white text-left">Deskripsi</TableHead>
              <TableHead className="text-white text-right">Biaya</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loadGet ? (
              <TableRow>
                <TableCell colSpan={4}>
                  {' '}
                  <div className="flex justify-center">
                    <Loader2 className="animate-spin text-center" />
                  </div>
                </TableCell>

                <div className="w-full h-full "></div>
              </TableRow>
            ) : (
              latestData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {new Date(entry.TANGGAL).toLocaleDateString('id-ID', {
                      year: '2-digit',
                      month: '2-digit',
                      day: 'numeric',
                    })}
                  </TableCell>
                  <TableCell className="text-left  inline-flex gap-2 items-center">
                    <span className=" truncate w-16 md:w-full">{entry.DESKRIPSI}</span>

                    <DialogDrawerReu
                      childrenButton={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0"
                        >
                          <EyeIcon size={16} />
                        </Button>
                      }
                      title="Detail"
                      childrenContent={
                        <div className="px-4">
                          <p className="font-normal">
                            Kategori:{' '}
                            <span className="font-semibold">{entry.KATEGORI} </span>
                          </p>
                          <p className="font-normal">
                            Keperluan:{' '}
                            <span className="font-semibold">{entry.KEPERLUAN} </span>
                          </p>
                          {entry.PENJUAL ? (
                            <p className="font-normal">
                              Toko:{' '}
                              <span className="font-semibold">{entry.PENJUAL} </span>
                            </p>
                          ) : null}
                          <p className="font-normal">
                            Deskripsi:{' '}
                            <span className="font-semibold">{entry.DESKRIPSI} </span>
                          </p>{' '}
                        </div>
                      }
                    />
                    {/* 
                    <Popover>
                      <PopoverTrigger>
                        <EyeIcon size={16} />
                      </PopoverTrigger>
                      <PopoverContent className="w-full capitalize ">
                        <p className="font-normal">
                          Kategori:{' '}
                          <span className="font-semibold">{entry.KATEGORI} </span>
                        </p>
                        <p className="font-normal">
                          Keperluan:{' '}
                          <span className="font-semibold">{entry.KEPERLUAN} </span>
                        </p>
                        {entry.PENJUAL ? (
                          <p className="font-normal">
                            Toko: <span className="font-semibold">{entry.PENJUAL} </span>
                          </p>
                        ) : null}

                        <p className="font-normal">
                          Deskripsi:{' '}
                          <span className="font-semibold">{entry.DESKRIPSI} </span>
                        </p>
                      </PopoverContent>
                    </Popover> */}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0,
                    }).format(parseInt(entry.BIAYA))}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>{' '}
    </div>
  );
}

function Recap() {
  const [recap, setRecap] = useState<recapProps>();
  const [loadGet, setLoadGet] = useState(false);

  const onGet = () => {
    setLoadGet(true);

    api
      .GetTask('recap')
      .then((response) => {
        const { data } = response.data;
        setRecap(data);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoadGet(false);
      });
  };

  useEffect(() => {
    onGet();
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full items-start justify-center p-2 text-white ">
        {loadGet ? (
          <div className="flex justify-center w-full">
            <Loader2 className="animate-spin text-center" />
          </div>
        ) : (
          <div className="flex w-full flex-col gap-2">
            <p className="font-normal">
              Hari ini:{' '}
              <span className="font-semibold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(recap?.today || 0)}
              </span>
            </p>
            <p className="font-normal">
              Pekan ini:{' '}
              <span className="font-semibold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(recap?.week || 0)}
              </span>
            </p>
            <p className="font-normal">
              Bulan ini:{' '}
              <span className="font-semibold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(recap?.month || 0)}
              </span>
            </p>
            <p className="font-normal">
              Tahun ini:{' '}
              <span className="font-semibold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(recap?.year || 0)}
              </span>
            </p>
          </div>
        )}
      </div>{' '}
      <Line
        options={options}
        data={data}
      />
    </div>
  );
}
