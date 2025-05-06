'use client';

import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions/send-mails';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const { pending } = useFormStatus();
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);

    if (result?.success) {
      toast.success('Email sent successfully!');
    } else {
      toast.error('Email failed to send.');
    }
  }

  return (
    <form action={handleSubmit} className="grid gap-4 md:grid-cols-2 h-full">
      <Input
        name="name"
        required
        placeholder="Your Name"
        className="w-full min-h-12 !text-lg"
      />
      <Input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full min-h-12 !text-lg"
      />
      <Textarea
        name="message"
        required
        placeholder="Your Message"
        className="md:col-span-2 w-full min-h-[12rem] md:min-h-[22rem] !text-lg"
      />
      <Button
        type="submit"
        disabled={pending}
        size={'lg'}
        className="md:col-span-2 md:mx-0 w-full max-w-[10rem] ">
        {pending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
