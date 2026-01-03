import React from 'react';
import { Seo } from './Seo';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <Seo
        title="Terms & Conditions | Gajkesari Digital Agency"
        description="Read the terms and conditions governing services, training, communication consent, payments, and liability."
        keywords="terms, conditions, policy, payments, liability, internship, training"
        canonical={`${window.location.origin}/terms`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Terms and Conditions — GAJKESARI Digital</h1>
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300">
          <p>By accessing and using this website and our services, you agree to the following terms.</p>
          <h2>1. Services</h2>
          <p>We provide digital marketing services including Social Media Marketing, Google & Meta Ads, SEO, Branding, Reels, and Analytics. Results depend on platform policies, audience behavior, and client cooperation.</p>
          <h2>2. Lead Submissions</h2>
          <p>Users must provide accurate details. Fake or misleading information may lead to service denial.</p>
          <h2>3. Communication Consent</h2>
          <p>By submitting forms, you agree to be contacted via email, phone, or WhatsApp regarding services, updates, or internship information.</p>
          <h2>4. Internships & Training</h2>
          <p>We provide live project access and mentorship. We do not guarantee job placement but ensure practical experience.</p>
          <h2>5. Payments & Refunds</h2>
          <p>All payments are non-refundable unless stated in a signed agreement.</p>
          <h2>6. Liability</h2>
          <p>We are not responsible for campaign rejections, marketing losses, or third-party algorithm changes.</p>
          <h2>7. Content & Asset Ownership</h2>
          <p>All website content, creatives, and workflows remain company property unless transferred under contract.</p>
          <h2>8. Policy Updates</h2>
          <p>Terms may update anytime. Continued use means acceptance.</p>
          <h3>Contact</h3>
          <p><a href="mailto:info@gkwebtech.cloud">info@gkwebtech.cloud</a></p>
        </div>
      </div>
    </div>
  );
}
