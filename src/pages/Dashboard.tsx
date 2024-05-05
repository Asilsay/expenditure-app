import { z } from 'zod';
import api from '../utils/api';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DevTool } from '@hookform/devtools';

const schema = z.object({
  code: z.string().min(1, { message: 'Kategori is required' }),
  cost: z.string().min(1, { message: 'Cost is required' }),
  desc: z.string().min(1, { message: 'Descirption is required' }),
});

const Dashboard = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      cost: '0',
      desc: '',
    },

    mode: 'onChange',
  });

  const onSubmit = (val: z.infer<typeof schema>) => {
    const formData = new FormData();
    formData.append('code', val.code);
    formData.append('cost', val.cost);
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
          className="space-y-8  flex flex-col justify-center items-center"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kategori"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biaya</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <DevTool control={form.control} />
    </div>
  );
};

export default Dashboard;
