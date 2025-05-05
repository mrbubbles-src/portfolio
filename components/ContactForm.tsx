'use client';

import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions/send-mails';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);

    if (result?.success) {
      toast.success('Email sent successfully!');
      console.log('Email ID:', result.messageId);
    } else {
      toast.error('Email failed to send.');
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input name="name" required placeholder="Your Name" />
      <Input type="email" name="email" required placeholder="Your Email" />
      <Textarea name="message" required placeholder="Your Message" rows={5} />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}
