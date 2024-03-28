'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';

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
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { ComboboxField } from './combobox-field';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { IAuthor } from '@/types';
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary';

const authorFormSchema = z.object({
  name: z.string(),
  bio: z.string().max(160).min(10),
  avatar: z.string().optional(),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      })
    )
    .optional(),
});

const defaultValues: Partial<formValues> = {
  // name,
};

type formValues = z.infer<typeof authorFormSchema>;

export default function AuthorForm() {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [resource, setResource] = useState<
    CloudinaryUploadWidgetInfo | undefined
  >();

  const form = useForm<formValues>({
    resolver: zodResolver(authorFormSchema),
    defaultValues,
    mode: 'onChange',
  });
  const router = useRouter();
  const { toast } = useToast();

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  });

  async function onSubmit(formValues: formValues) {
    const formData = {
      ...formValues,
      avatar: resource?.url,
    };
    console.log(formData);

    const { data } = await axios.post('/api/author', formData);
    if (data.success) {
      router.push('/admin-dashboard/create-blog');
      toast({ title: 'Successfully created!' });
    } else {
      toast({ title: data.message, variant: 'destructive' });
    }
  }

  useEffect(() => {
    const getAuthors = async () => {
      const { data } = await axios.get<IAuthor[]>('/api/author');
      setAuthors(data);
    };

    getAuthors();
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex gap-6 flex-col md:flex-row my-4">
          <div className="w-full md:w-2/3 space-y-4">
            <ComboboxField
              form={form}
              data={authors}
              name="name"
              label="Select Author"
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Bio <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CldUploadWidget
              options={{ sources: ['local', 'url', 'unsplash'] }}
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) => {
                setResource(result.info as CloudinaryUploadWidgetInfo);
                widget.close();
              }}
            >
              {({ open }) => {
                function handleOnClick() {
                  setResource(undefined);
                  open();
                }
                return (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleOnClick}
                  >
                    Upload an Image
                  </Button>
                );
              }}
            </CldUploadWidget>
          </div>
          <div className="w-full md:w-1/3 space-y-4">
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                      Add links to blogger social media profiles.
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: '' })}
            >
              Add URL
            </Button>
          </div>
        </div>
        <Button type="submit" className="self-end w-32">
          Next
        </Button>
      </form>
    </Form>
  );
}
