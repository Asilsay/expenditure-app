import { z } from 'zod';
import api from '../../utils/api';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import Layout from '@/components/Layout';
import { Loader2, PencilLine, Shell, SquareLibrary } from 'lucide-react';
import TabsMain from '@/components/TabsMain';
import InputReu from '@/components/InputReu';
import { useState } from 'react';
import { allcode, buttons } from './Data';
import { toast } from 'sonner';
import ComboReu from '@/components/ComboReu';
import DatePickReu from '@/components/DatePickReu';

const schema = z.object({
  date: z.coerce.date({
    required_error: 'date is Required.',
  }),
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
  const [loadSubmit, setLoadSubmit] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      cost: 0,
      desc: '',
      date: new Date(),
    },

    mode: 'onSubmit',
  });

  const onSubmit = (val: z.infer<typeof schema>) => {
    setLoadSubmit(true);
    const formData = new FormData();
    formData.append('code', val.code);
    formData.append('cost', val.cost.toString());
    formData.append('desc', val.desc);
    formData.append('date', val.date.toISOString());

    api
      .PostTask(formData, 'td')
      .then((response) => {
        const { message } = response.data;
        toast(message);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoadSubmit(false);
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

    form.setValue('date', new Date());
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

              {loadSubmit ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Loading
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!form.formState.isValid}
                >
                  Submit
                </Button>
              )}
            </>
          )}
        </form>
      </Form>
    </div>
  );
}

function Manual() {
  const [loadSubmit, setLoadSubmit] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      cost: 0,
      desc: '',
      date: new Date(),
    },

    mode: 'onSubmit',
  });

  const onSubmit = (val: z.infer<typeof schema>) => {
    setLoadSubmit(true);
    const formData = new FormData();
    formData.append('code', val.code);
    formData.append('cost', val.cost.toString());
    formData.append('desc', val.desc);
    formData.append('date', val.date.toISOString());

    api
      .PostTask(formData, 'td')
      .then((response) => {
        const { message } = response.data;
        toast(message);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoadSubmit(false);
      });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-3  flex flex-col justify-center items-center"
        >
          <DatePickReu
            name="date"
            label={'Tanggal'}
            control={form.control}
          />
          <ComboReu
            form={form}
            languages={allcode}
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
          {loadSubmit ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Loading
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!form.formState.isValid}
            >
              Submit
            </Button>
          )}{' '}
        </form>
      </Form>
    </div>
  );
}
function Batch() {
  return <div>Batch</div>;
}
