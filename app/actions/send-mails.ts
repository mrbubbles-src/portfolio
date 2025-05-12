'use server';

import { autoReply, senderMessage } from '@/data/email_replies';
import { Locale } from '@/i18n-config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY,
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const locale = formData.get('locale') as Locale;

  const autoReplyText = autoReply(locale, name);
  const senderText = senderMessage(name, email, message);

  try {
    await transporter.sendMail({
      from: 'Manuel Fahrenholz <contact@mrbubbles-src.dev>',
      to: 'contact@mrbubbles-src.dev',
      replyTo: email,
      subject: `New message from ${name}`,
      html: senderText,
    });

    await transporter.sendMail({
      from: 'Manuel Fahrenholz <contact@mrbubbles-src.dev>',
      to: email,
      replyTo: 'contact@mrbubbles-src.dev',
      subject: 'Thanks for your message! 📨',
      text: autoReplyText.plainText,
      html: autoReplyText.autoReply,
    });

    return { success: true };
  } catch (error) {
    console.error('SMTP error:', error);
    return { success: false, error };
  }
}
