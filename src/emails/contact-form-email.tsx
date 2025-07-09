import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  interest?: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  interest,
  message,
}) => (
  <html lang="en">
    <body style={{ backgroundColor: '#f6f9fc', fontFamily: 'sans-serif' }}>
      <div style={{ margin: '0 auto', padding: '20px 0 48px', width: '580px' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #f0f0f0', borderRadius: '4px', padding: '40px' }}>
          <h1 style={{ fontSize: '24px', lineHeight: '1.3', fontWeight: '700', color: '#484848' }}>
            New Contact Form Submission
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.4', color: '#484848' }}>
            You received a new message from your website's contact form.
          </p>
          <hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#484848' }}>
            Submission Details
          </h2>
          <p style={{ fontSize: '16px', color: '#484848', margin: '5px 0' }}>
            <strong>Name:</strong> {name}
          </p>
          <p style={{ fontSize: '16px', color: '#484848', margin: '5px 0' }}>
            <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{email}</a>
          </p>
          <p style={{ fontSize: '16px', color: '#484848', margin: '5px 0' }}>
            <strong>Subject:</strong> {subject}
          </p>
          {interest && (
            <p style={{ fontSize: '16px', color: '#484848', margin: '5px 0' }}>
              <strong>Interested In:</strong> {interest}
            </p>
          )}
          <hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#484848' }}>
            Message
          </h2>
          <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '15px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <p style={{ fontSize: '16px', color: '#484848', margin: 0 }}>
              {message}
            </p>
          </div>
          <hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <p style={{ color: '#8898aa', fontSize: '12px', lineHeight: '16px' }}>
            This email was sent from the contact form on siddas.co
          </p>
        </div>
      </div>
    </body>
  </html>
);
