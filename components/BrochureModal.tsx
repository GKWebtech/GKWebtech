import React, { useState, useEffect } from 'react';
import { X, Download, Mail, CheckCircle, FileText, Loader2, Phone } from 'lucide-react';
import { Button } from './Button';
import { servicesData } from '../data';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string; // Optional: If present, pre-selects this service
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, serviceName }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [brochureType, setBrochureType] = useState<'specific' | 'all'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'download' | 'email'>('email');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setIsLoading(false);
      setErrorMsg('');
      setFormData({ name: '', email: '', phone: '' });
      
      if (serviceName) {
        setBrochureType('specific');
        const service = servicesData.find(s => s.title === serviceName);
        setSelectedServiceId(service?.id || servicesData[0].id);
      } else {
        setBrochureType('all');
        setSelectedServiceId(servicesData[0].id);
      }
    }
  }, [isOpen, serviceName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brochureType,
        serviceId: selectedServiceId,
        deliveryMethod
      };

      // Updated to use relative path /api/brochure-request for Vercel
      const response = await fetch('/api/brochure-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // If download method and url provided
        if (deliveryMethod === 'download' && data.downloadUrl && data.downloadUrl !== '#') {
           // Create a temporary link to trigger download
           const link = document.createElement('a');
           link.href = data.downloadUrl; // Relative path handled by Vercel public directory
           link.setAttribute('download', 'Brochure.pdf');
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
        }
        setStep('success');
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setErrorMsg('Failed to connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up border border-gray-100 dark:border-gray-800">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
            <FileText size={20} className="text-secondary" />
            Get Brochure
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fill in your details to access our premium resources.
                </p>

                {/* Brochure Selection */}
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl space-y-3">
                  <label className="text-sm font-bold text-primary dark:text-white block mb-2">Select Document:</label>
                  
                  {/* Full Portfolio Option */}
                  <label className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-secondary transition-colors">
                    <input 
                      type="radio" 
                      name="brochureType" 
                      checked={brochureType === 'all'}
                      onChange={() => setBrochureType('all')}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span className="text-sm font-medium dark:text-gray-200">Full Agency Portfolio (PDF)</span>
                  </label>

                  {/* Specific Service Option */}
                  <div className={`p-3 bg-white dark:bg-gray-900 rounded-lg border transition-all ${brochureType === 'specific' ? 'border-secondary ring-1 ring-secondary/20' : 'border-gray-200 dark:border-gray-700'}`}>
                    <label className="flex items-center gap-3 cursor-pointer mb-2">
                        <input 
                          type="radio" 
                          name="brochureType" 
                          checked={brochureType === 'specific'}
                          onChange={() => setBrochureType('specific')}
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="text-sm font-medium dark:text-gray-200">Specific Service Brochure</span>
                    </label>
                    
                    {/* Dropdown for services */}
                    <div className={`transition-all duration-300 overflow-hidden ${brochureType === 'specific' ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <select 
                          value={selectedServiceId}
                          onChange={(e) => setSelectedServiceId(e.target.value)}
                          disabled={brochureType !== 'specific'}
                          className="w-full p-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer"
                      >
                          {servicesData.map(service => (
                              <option key={service.id} value={service.id}>{service.title}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                 <div className="grid grid-cols-2 gap-4">
                    <label 
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${deliveryMethod === 'email' ? 'border-secondary bg-secondary/5 text-primary' : 'border-gray-200 dark:border-gray-700 text-gray-400'}`}
                      onClick={() => setDeliveryMethod('email')}
                    >
                        <Mail size={20} className="mb-1" />
                        <span className="text-xs font-bold">Send to Email</span>
                        <input type="radio" name="method" className="hidden" />
                    </label>
                    <label 
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${deliveryMethod === 'download' ? 'border-secondary bg-secondary/5 text-primary' : 'border-gray-200 dark:border-gray-700 text-gray-400'}`}
                      onClick={() => setDeliveryMethod('download')}
                    >
                        <Download size={20} className="mb-1" />
                        <span className="text-xs font-bold">Download Now</span>
                        <input type="radio" name="method" className="hidden" />
                    </label>
                 </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">Mobile Number</label>
                  <div className="relative">
                    <input 
                        type="tel" 
                        required 
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 pl-10 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all dark:text-white"
                    />
                    <Phone size={16} className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg">
                    {errorMsg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {deliveryMethod === 'email' ? 'Send Brochure' : 'Download PDF'}
                    {deliveryMethod === 'email' ? <Mail size={18} /> : <Download size={18} />}
                  </>
                )}
              </button>

            </form>
          ) : (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">Success!</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">
                {deliveryMethod === 'email' 
                  ? `We've sent the ${brochureType === 'all' ? 'Full Portfolio' : 'requested brochure'} directly to your inbox.`
                  : "Your download should have started. Check your email for a backup copy."}
              </p>
              <Button onClick={onClose} variant="outline" className="min-w-[150px]">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};