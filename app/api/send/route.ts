import ConfirmationEmail from '@/emails/confirmation-email';
import InquiryEmail from '@/emails/inquiry-email';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Get data from contact form
  const data = await request.json();

  const { firstName, lastName, email, phoneNumber, message } = data;

  try {
    const [confirmationEmail, inquiryEmail] = await Promise.all([
      resend.emails.send({
        from: `Len Tetta's Website <onboarding@resend.dev>`,
        to: [email as string],
        subject: 'Thank you for contacting Len Tetta!',
        reply_to: 'Len Tetta <lentetta@gmail.com>',
        react: ConfirmationEmail({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
        }) as React.ReactElement,
      }),
      resend.emails.send({
        from: 'Website Contact Form <onboarding@resend.dev>',
        to: ['kunal.gala16@gmail.com', 'lentetta@gmail.com'],
        subject: `New Website Inquiry from ${firstName}`,
        reply_to: email,
        react: InquiryEmail({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
        }) as React.ReactElement,
      }),
    ]);

    return Response.json({
      success: true,
      confirmationEmail,
      inquiryEmail,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
