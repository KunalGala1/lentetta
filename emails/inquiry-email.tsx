import * as React from 'react';

interface InquiryEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const InquiryEmail: React.FC<Readonly<InquiryEmailProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <p>
      New Inquiry from{' '}
      <strong>
        {firstName} {lastName}
      </strong>
      !
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

export default InquiryEmail;
