'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Send the email to YOU
    const res = await resend.emails.send({
      from: 'Portfolio Contact <contact@contact.mrbubbles-src.dev>',
      to: 'contact@mrbubbles-src.dev',
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    // 2. Auto-response to THEM
    await resend.emails.send({
      from: 'Portfolio Contact <contact@contact.mrbubbles-src.dev>',
      to: email,
      subject: 'Thanks for your message! 📨',
      text: `Hi ${name},

Thanks for reaching out via my portfolio site. I’ve received your message and will get back to you shortly.

Check out my site: https://mrbubbles-src.dev

Contact: contact@mrbubbles-src.dev
GitHub: https://github.com/mrbubbles-src
LinkedIn: https://linkedin.com/in/manuelfahrenholz

Best regards,
Manuel Fahrenholz`,
      html: `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb; padding: 32px; text-align: center;">
    <div style="background: white; padding: 24px; max-width: 520px; margin: auto; border-radius: 8px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #111827;">Thanks for your message, ${name}!</h2>
      <p style="color: #374151;">I've received your message and will get back to you as soon as I can.</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="margin-bottom: 12px;">In the meantime, you can check out:</p>
      <a href="https://mrbubbles-src.dev" style="display: inline-block; padding: 10px 18px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin-bottom: 12px;">🌐 Visit My Portfolio</a><br/>
      <a href="mailto:contact@mrbubbles-src.dev" style="color: #2563eb;">📬 contact@mrbubbles-src.dev</a>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <div style="text-align: left; color: #6b7280; font-size: 13px;">
        <p style="margin: 0 0 4px;">Best regards,</p>
        <p style="margin: 0 0 4px;"><strong>Manuel Fahrenholz</strong></p>
        <p style="margin: 0;">Fullstack Developer</p>
        <p style="margin: 0;">🌐 <a href="https://mrbubbles-src.dev" style="color: #2563eb;">mrbubbles-src.dev</a></p>
        <p style="margin: 0;">📫 <a href="mailto:contact@mrbubbles-src.dev" style="color: #2563eb;">contact@mrbubbles-src.dev</a></p>
        <p style="margin: 0;">💼 <a href="https://github.com/mrbubbles-src" style="color: #2563eb;">github.com/mrbubbles-src</a></p>
        <p style="margin: 0;">🔗 <a href="https://linkedin.com/in/manuelfahrenholz" style="color: #2563eb;">linkedin.com/in/manuelfahrenholz</a></p>
      </div>
    </div>
  </div>
      `,
    });

    console.log('Resend response:', res);
    return { success: true, messageId: res.data?.id };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error };
  }
}
