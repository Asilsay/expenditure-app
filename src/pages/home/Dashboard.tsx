import { z } from 'zod';
import api from '../../utils/api';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import Layout from '@/components/Layout';
import { PencilLine, Shell, SquareLibrary } from 'lucide-react';
import TabsMain from '@/components/TabsMain';
import InputReu from '@/components/InputReu';
import { useState } from 'react';
import { buttons } from './Data';

const schema = z.object({
  code: z.string().min(1, { message: 'Kategori is required' }),
  cost: z.coerce.number().min(1, { message: 'Cost is required' }),
  desc: z.string().min(1, { message: 'Descirption is required' }),
});

const Dashboard = () => {
  return (
    <Layout>
      <TabsMain
        tabs={[
          {
            label: 'Today',
            value: 'today',
            icon: <Shell size={16} />,
            children: <Today />,
          },
          {
            label: 'Manual',
            value: 'manual',
            icon: <PencilLine size={16} />,
            children: <Manual />,
          },
          {
            label: 'Batch',
            value: 'batch',
            icon: <SquareLibrary size={16} />,
            children: <Batch />,
          },
        ]}
      />
    </Layout>
  );
};

export default Dashboard;

function Today() {
  const [cat, setcat] = useState('');

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      cost: 0,
      desc: '',
    },

    mode: 'onSubmit',
  });

  const onSubmit = (val: z.infer<typeof schema>) => {
    const formData = new FormData();
    formData.append('code', val.code);
    formData.append('cost', val.cost.toString());
    formData.append('desc', val.desc);

    api
      .PostTask(formData)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  };

  const handleBt = (str: string) => {
    setcat(str);

    if (str === 'l') {
      form.setValue('code', 'ben');
      form.setValue('desc', 'Pertalite');
    } else if (str === 'x') {
      form.setValue('code', 'ben');
      form.setValue('desc', 'Pertamax');
    } else {
      form.setValue('code', str);
      form.setValue('desc', '');
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full items gap-3 p-2"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {buttons.map((button, index) => (
              <Button
                key={index}
                className={button.color}
                variant={'secondary'}
                disabled={cat === button.cat}
                onClick={() => handleBt(button.cat)}
              >
                {button.icon}
                &nbsp; {button.label}
              </Button>
            ))}
          </div>
          {cat && (
            <>
              <InputReu
                name="cost"
                label="Biaya"
                control={form.control}
              />
              <InputReu
                name="desc"
                label="Deskripsi"
                control={form.control}
              />

              <Button type="submit">Submit</Button>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}
function Manual() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      cost: 0,
      desc: '',
    },

    mode: 'onSubmit',
  });

  const onSubmit = (val: z.infer<typeof schema>) => {
    const formData = new FormData();
    formData.append('code', val.code);
    formData.append('cost', val.cost.toString());
    formData.append('desc', val.desc);

    api
      .PostTask(formData)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-3  flex flex-col justify-center items-center"
        >
          <InputReu
            name="code"
            label="Kategori"
            control={form.control}
          />
          <InputReu
            name="cost"
            label="Biaya"
            control={form.control}
          />
          <InputReu
            name="desc"
            label="Deskripsi"
            control={form.control}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
function Batch() {
  return <div>Batch</div>;
}
