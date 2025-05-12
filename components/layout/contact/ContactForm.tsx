'use client';

import { useForm } from 'react-hook-form';

import { useState } from 'react';
import Turnstile from 'react-turnstile';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { sendEmail } from '@/app/actions/send-mails';
import { getDictionary } from '@/get-digtionary';
import { Locale } from '@/i18n-config';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  website?: string;
}

export default function ContactForm({
  dictionary,
  language,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['contact'];
  language: Locale;
}) {
  const [captchaToken, setCaptchaToken] = useState('');

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      website: '',
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormValues) {
    if (!captchaToken) {
      toast.error(
        dictionary.captchaMissing || 'Captcha failed. Please try again.',
      );
      return;
    }
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);
    formData.append('locale', language);
    formData.append('captcha', captchaToken);

    const result = await sendEmail(formData);

    if (result?.success) {
      toast.success(dictionary.toastSuccess);
    } else {
      toast.error(dictionary.toastError);
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
          rules={{ required: dictionary.form.nameRequired }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                {dictionary.form.nameLabel}
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full min-h-12 !text-lg font-semibold shadow-md"
                  placeholder={dictionary.form.namePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {dictionary.form.nameDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{ required: dictionary.form.emailRequired }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                {dictionary.form.emailLabel}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="w-full min-h-12 !text-lg font-semibold shadow-md"
                  placeholder={dictionary.form.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {dictionary.form.emailDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          rules={{ required: dictionary.form.messageRequired }}
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-lg">
                {dictionary.form.messageLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full min-h-[12rem] md:min-h-[22rem] !text-lg font-semibold shadow-md"
                  placeholder={dictionary.form.messagePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {dictionary.form.messageDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Turnstile
          sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken('')}
          refreshExpired="auto"
          fixedSize={true}
          className="my-4"
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          aria-busy={isSubmitting}
          className="md:col-span-2 md:mx-0 w-full max-w-[10rem]">
          {isSubmitting
            ? `${dictionary.form.submitLabelAlt}`
            : `${dictionary.form.submitLabel}`}
        </Button>
        {form.formState.isSubmitSuccessful && (
          <p className="sr-only" role="status">
            {dictionary.successMessage}
          </p>
        )}
      </form>
    </Form>
  );
}
