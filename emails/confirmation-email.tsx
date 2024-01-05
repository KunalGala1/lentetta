import * as React from 'react';

interface ConfirmationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <p>Thank you for contacting me! I will be in touch shortly.</p>
    <p>You can also reply to this email to get in touch.</p>
    <p>Here is a record of your inquiry:</p>
    <p>
      Name:{' '}
      <strong>
        {firstName} {lastName}
      </strong>
    </p>
    <p>
      Email: <strong>{email}</strong>
    </p>
    <p>
      Phone: <strong>{phoneNumber}</strong>
    </p>
    <hr />

    <p>
      <strong>Message</strong>
    </p>
    <p>{message}</p>
  </div>
);

export default ConfirmationEmail;
