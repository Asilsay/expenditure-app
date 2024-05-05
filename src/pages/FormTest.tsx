import { z } from 'zod';
import api from '../utils/api';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
]import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';
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
import { useEffect } from 'react';

const schema = z.object({
  kategori: z.string().min(1, { message: 'Kategori is required' }),
  cost: z.number().min(1, { message: 'Cost is required' }),
});

const FormTest = () => {
  const form = useForm();
  const;

  const onSubmit = (val: z.infer<typeof schema>) => {
    console.log(val);

    const formData = new FormData();
    formData.append('kategori', val.kategori);
    formData.append('Name', val.kategori);

    api
      .PostTask(formData)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(form);
  }, []);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  flex flex-col justify-center items-center"
        >
          <FormField
            control={form.control}
            name="kategori"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <DevTool control={form.control} />
    </div>
  );
};

export default FormTest;
