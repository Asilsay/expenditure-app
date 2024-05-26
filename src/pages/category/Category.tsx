import Layout from '@/components/Layout';
import TabsMain from '@/components/TabsMain';
import api from '@/utils/api';
import { ArrowUp10, Loader2 } from 'lucide-react';
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

function Category() {
  return (
    <Layout>
      <TabsMain
        tabs={[
          {
            label: 'Top Category',
            value: 'top',
            icon: <ArrowUp10 size={16} />,
            children: <Recap />,
          },
        ]}
      />
    </Layout>
  );
}

export default Category;

interface Entry {
  category: string;
  count: string;
}

function Recap() {
  const [latestData, setLatestData] = useState<Entry[]>([]);
  const [loadGet, setLoadGet] = useState(false);

  const onGet = () => {
    setLoadGet(true);

    api
      .GetTask('topCat')
      .then((response) => {
        const { data } = response.data;
        console.log(data);
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
              <TableHead className="text-white text-left ">Rank</TableHead>
              <TableHead className="text-white text-left">Kategori</TableHead>
              <TableHead className="text-white text-right">Jumlah</TableHead>
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
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-left  inline-flex gap-2 items-center">
                    <span className=" w-full">{entry.category}</span>
                  </TableCell>
                  <TableCell className="text-right">{entry.count}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>{' '}
    </div>
  );
}
