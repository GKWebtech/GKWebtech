import React from 'react';
import { Seo } from './Seo';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <Seo
        title="Privacy Policy | Gajkesari Digital Agency"
        description="Learn how we collect, use, and protect your data, and your rights regarding communication and deletion."
        keywords="privacy policy, data protection, user rights, cookies, analytics"
        canonical={`${window.location.origin}/privacy`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
      /> 
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Privacy Policy — GAJKESARI Digital</h1>
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300">
          <p>Your privacy matters to us. This policy explains how we collect, use, and protect your data.</p>
          <h2>1. Data We Collect</h2>
          <ul>
            <li>Name, email, phone, and business details (via forms)</li>
            <li>Analytics data (device, interactions, behavior)</li>
            <li>Cookies for tracking performance</li>
          </ul>
          <h2>2. How We Use Data</h2>
          <ul>
            <li>To respond to inquiries and deliver leads</li>
            <li>To send confirmation emails</li>
            <li>To optimize UX, SEO, and campaigns</li>
          </ul>
          <h2>3. Data Storage</h2>
          <ul>
            <li>Leads stored in MongoDB and email inbox</li>
            <li>Analytics processed via Google/Meta (not sold or misused)</li>
          </ul>
          <h2>4. Data Protection</h2>
          <p>We secure systems using encrypted servers, strong passwords, and 2FA where available.</p>
          <h2>5. Third-Party Processing</h2>
          <p>Data may be processed by marketing platforms like Google, Meta, LinkedIn, YouTube, and automation tools we use.</p>
          <h2>6. We Do NOT</h2>
          <ul>
            <li>Sell your data</li>
            <li>Share personal details publicly</li>
            <li>Send spam without consent</li>
          </ul>
          <h2>7. Your Rights</h2>
          <p>You may request access or deletion of submitted lead data or opt-out from communications.</p>
          <h2>8. Policy Updates</h2>
          <p>This policy may update anytime. Continued use means acceptance.</p>
          <h3>Contact</h3>
          <p><a href="mailto:info@gkwebtech.cloud">info@gkwebtech.cloud</a></p>
        </div>
      </div>
    </div>
  );
}
