import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setShowPopup(true); // show popup on success
        setTimeout(() => setShowPopup(false), 4000); // auto hide popup
        setFormData({ name: '', email: '', phone: '', service: '', details: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-secondary dark:bg-gray-900 transition-colors" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-12 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-4 bg-primary dark:bg-secondary"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-secondary">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary dark:text-white">
                Let's Grow <span className="text-white dark:text-secondary">Your Business</span>
              </h2>
            </div>

            <p className="text-primary dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Ready to take your digital presence to the next level? Contact us today for a free consultation and audit.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary dark:text-secondary shadow-sm">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary dark:text-gray-200 font-bold">+91 9971944676</span>
                  <span className="text-primary dark:text-gray-200 font-bold">+31 620508410</span>
                </div>
                </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary dark:text-secondary shadow-sm">
                  <Mail size={20} />
                </div>
                <span className="text-primary dark:text-gray-200 font-bold">info@ayurvedastro.com</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary dark:text-secondary shadow-sm flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-primary dark:text-gray-200 font-bold leading-tight">
                  Tiwari Clinic, Mahatma Jyotiba Fule Circle, Sch. No. 7, Alwar 301001, Rajasthan, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary dark:text-secondary">Your Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Ex. John Doe"
                    className="w-full bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary dark:text-secondary">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="example@company.com"
                    className="w-full bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all placeholder-gray-400 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary dark:text-secondary">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    placeholder="Enter Phone Number"
                    className="w-full bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary dark:text-secondary">Service Interested in</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all text-gray-500 dark:text-gray-300"
                  >
                    <option value="">Select Service (Optional)</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Strategy</option>
                    <option value="ppc">PPC Advertising</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary dark:text-secondary">Project Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your goals (Optional)..."
                  className="w-full bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition-all placeholder-gray-400 dark:text-white"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We will contact you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary dark:bg-white text-white dark:text-primary rounded-full pl-8 pr-2 py-2 flex items-center gap-4 hover:bg-primary-dark dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="font-medium">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-secondary dark:bg-primary text-primary dark:text-secondary flex items-center justify-center">
                    {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CONFIRMATION POPUP MODAL (SUCCESS ONLY) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-80">
            <div className="flex flex-col items-center text-center">
              <CheckCircle size={36} className="text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Submission Received</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Thanks for contacting Gajkesri Webtech. We'll reach out shortly.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
