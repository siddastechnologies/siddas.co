import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Siddas Technologies',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-lg mb-8">Last Updated: October 26, 2023</p>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p>
            Siddas Technologies ("us", "we", or "our") operates the https://siddas.co website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Company Name</li>
            <li>Website URL</li>
            <li>Usage Data</li>
          </ul>
          
          <h4>Contact Form Data</h4>
           <p>
            When you submit our contact form, we collect the information you provide, such as your name, email address, subject, and message content, to respond to your inquiries and provide you with the requested information or services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Data</h2>
          <p>
            Siddas Technologies uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To respond to your inquiries and fulfill your requests</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Service Providers</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by visiting the contact page on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
