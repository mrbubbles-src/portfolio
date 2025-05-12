'use server';

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

  const htmlContent = `
    <div style="font-family: 'Montserrat', sans-serif; background-color: #14121a; padding: 0; margin: 0; width: 100%;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #14121a; width: 100%">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 1200px; padding: 64px 24px">
              <tr>
                <td style="background-color: #18181b; padding: 48px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); text-align: center;">
                  <img src="https://www.mrbubbles-src.dev/logo-og.png" alt="mrbubbles-src logo" width="280" height="auto" style="display: block; margin: 0 auto 48px auto" />
                  <h2 style="font-size: 36px; font-weight: 800; color: #efb100; margin-bottom: 24px;">
                    New message from:<br />${name}
                  </h2>
                  <hr style="border: none; border-top: 1px solid #333; margin: 36px 0;" />
                  <p style="font-size: 22px; color: #e5e5e5; line-height: 1.6; margin-bottom: 36px;">
                    Sender E-mail:<br />${email}
                  </p>
                  <hr style="border: none; border-top: 1px solid #333; margin: 36px 0;" />
                  <p style="font-size: 22px; color: #e5e5e5; line-height: 1.6; margin-bottom: 36px;">
                    Sender Message:<br />${message}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from: 'Manuel Fahrenholz <contact@mrbubbles-src.dev>',
      to: 'contact@mrbubbles-src.dev',
      replyTo: email,
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    await transporter.sendMail({
      from: 'Manuel Fahrenholz <contact@mrbubbles-src.dev>',
      to: email,
      replyTo: 'contact@mrbubbles-src.dev',
      subject: 'Thanks for your message! 📨',
      text: `Hi ${name},

Thanks for reaching out via my portfolio site. I’ve received your message and will get back to you shortly.

Check out my site: https://mrbubbles-src.dev

Contact: contact@mrbubbles-src.dev
GitHub: https://github.com/mrbubbles-src
LinkedIn: https://linkedin.com/in/manuel-fahrenholz

Best regards,
Manuel Fahrenholz`,
      html: `
        <div style="font-family: 'Montserrat', sans-serif; background-color: #14121a; padding: 0; margin: 0; width: 100%;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #14121a; width: 100%">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 1200px; padding: 64px 24px">
                  <tr>
                    <td style="background-color: #18181b; padding: 48px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); text-align: center;">
                      <img src="https://www.mrbubbles-src.dev/logo-og.png" alt="mrbubbles-src logo" width="280" height="auto" style="display: block; margin: 0 auto 48px auto" />
                      <h2 style="font-size: 36px; font-weight: 800; color: #efb100; margin-bottom: 24px;">
                        Thank you for your message!
                      </h2>
                      <p style="font-size: 22px; color: #e5e5e5; line-height: 1.6; margin-bottom: 36px;">
                        I've received your message and will get back to you as soon as possible.
                      </p>
                      <hr style="border: none; border-top: 1px solid #333; margin: 36px 0;" />
                      <p style="font-size: 20px; margin-bottom: 24px; color: #cccccc">
                        In the meantime, check out my work:
                      </p>
                      <a href="https://mrbubbles-src.dev" style="display: inline-block; padding: 18px 36px; font-size: 20px; font-weight: 600; background-color: #ffb800; color: #14121a; text-decoration: none; border-radius: 10px; margin-bottom: 32px;">
                        <img src="https://www.mrbubbles-src.dev/srcicon.png" alt="" width="30" height="30" style="vertical-align: middle; margin-right: 2px" />
                        Visit My Portfolio
                      </a>
                      <div style="margin: 16px 0; font-size: 18px">
                        <a href="mailto:contact@mrbubbles-src.dev" style="color: #efb100; text-decoration: none">
                          📬 contact@mrbubbles-src.dev
                        </a>
                      </div>
                      <hr style="border: none; border-top: 1px solid #333; margin: 36px 0;" />
                      <div style="font-size: 18px; color: #cccccc; text-align: left; max-width: 640px; margin: auto; line-height: 1.75;">
                        <p style="margin-bottom: 6px">Best regards,</p>
                        <p style="font-size: 20px; font-weight: bold; margin-bottom: 6px;">Manuel Fahrenholz</p>
                        <p style="margin-bottom: 16px">Fullstack Web Developer</p>
                        <p style="margin: 6px 0">
                          <img src="https://www.mrbubbles-src.dev/srcicon.png" alt="" width="20" height="20" style="vertical-align: middle; margin-right: 5px" />
                          <a href="https://mrbubbles-src.dev" style="color: #ffb800; text-decoration: none">mrbubbles-src.dev</a>
                        </p>
                        <p style="margin: 6px 0">
                          <span style="margin-right: 5px">📧</span>
                          <a href="mailto:contact@mrbubbles-src.dev" style="color: #ffb800; text-decoration: none">contact@mrbubbles-src.dev</a>
                        </p>
                        <p style="margin: 6px 0">
                          <span style="margin-right: 5px">👨‍💻</span>
                          <a href="https://github.com/mrbubbles-src" style="color: #ffb800; text-decoration: none">github.com/mrbubbles-src</a>
                        </p>
                        <p style="margin: 6px 0">
                          <span style="margin-right: 5px">🧑‍🏫</span>
                          <a href="https://linkedin.com/in/manuel-fahrenholz" style="color: #ffb800; text-decoration: none">linkedin.com/in/manuel-fahrenholz</a>
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>`,
    });

    return { success: true };
  } catch (error) {
    console.error('SMTP error:', error);
    return { success: false, error };
  }
}
