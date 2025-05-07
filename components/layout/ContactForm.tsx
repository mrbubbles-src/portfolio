'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { sendEmail } from '@/app/actions/send-mails';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormValues) {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    const result = await sendEmail(formData);

    if (result?.success) {
      toast.success('Email sent successfully!');
    } else {
      toast.error('Email failed to send.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-2 h-full">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg" htmlFor="name">
                Your Name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full min-h-12 !text-lg font-semibold shadow-md"
                  placeholder="Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg" htmlFor="email">
                Your Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="w-full min-h-12 !text-lg font-semibold shadow-md"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-lg" htmlFor="message">
                Your Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full min-h-[12rem] md:min-h-[22rem] !text-lg font-semibold shadow-md"
                  placeholder="Your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          aria-busy={isSubmitting}
          className="md:col-span-2 md:mx-0 w-full max-w-[10rem]">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        {form.formState.isSubmitSuccessful && (
          <p className="sr-only" role="status">
            Email sent successfully!
          </p>
        )}
      </form>
    </Form>
  );
}
