import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Siddas Technologies',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground text-lg mb-8">Last Updated: October 26, 2023</p>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the https://siddas.co website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
          <p>
            Siddas Technologies provides users with access to information and resources related to software development, cloud consultancy, and other technology services. You are responsible for obtaining access to the Service, and that access may involve third-party fees (such as Internet service provider or airtime charges). You are responsible for those fees.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Siddas Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Siddas Technologies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. User Conduct</h2>
          <p>
            You agree not to use the Service to:
          </p>
          <ul>
            <li>Upload, post, email, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
            <li>Impersonate any person or entity, including, but not limited to, a Siddas Technologies official, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies, or regulations of networks connected to the Service.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclaimer of Warranties</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Siddas Technologies expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Siddas Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Kerala, India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
