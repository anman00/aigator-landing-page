import React, { useState } from 'react';
import BlueBg from '../assets/blue-bg.png';
import { Mail } from 'lucide-react';
import LogoLight from '../assets/logo-white.png'


export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    console.log("ENV",import.meta.env)

    const APPS_SCRIPT_URL = import.meta.env.VITE_SUBS_URL || "";

    try {
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address.');
      }

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email }),
        redirect:'follow'
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again later.');
      }

      const result = await response.json();
      if (result.success) {
        setMessage({ text: result.message || 'Subscription successful!', isError: false });
        setEmail(''); // Clear the email input
      } else {
        setMessage({ text: result.message || 'Failed to subscribe.', isError: true });
      }
    } catch (error: any) {
      console.error('Error submitting subscription:', error);
      setMessage({ text: error.message, isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer className="bg-gray-900 text-white px-10 md:px-20 rounded-tl-[80px] relative overflow-hidden">
      <img src={BlueBg} className="absolute w-full h-full left-0 top-0" alt="Background" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between w-full pt-8 mb-8">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don’t Miss a Thing</h2>
            <p className="text-xl text-white">
              Subscribe to our newsletter and be the first to know about all updates
            </p>
          </div>
          <div className="flex">
            <form onSubmit={handleSubmit} className="w-full md:mx-auto mt-4 md:mt-auto">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-[#457DF3] px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p
                  className={`mt-4 ${
                    message.isError ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="flex border-t border-white pt-8 flex-col-reverse flex-start md:flex-row justify-between items-center pb-8">
         
        <div className="text-white text-2xl min-w-[180px] font-bold flex items-center justify-center gap-2">
          <img src={LogoLight} alt="" className='h-[42px] w-[42px]' />
          <h1> AI Gator</h1>
        </div>
          <div className="flex gap-6 flex-col md:flex-row text-center items-center md:items-start w-full">
            {/* <a href="#" className="bg-white/10 w-full p-2 rounded-xl hover:bg-white/50 transition-colors">
              Terms & Conditions
            </a> */}
            <a href="mailto:hello@aigator.xyz" className="min-w-[180px] mb-2 md: mb-0 bg-white/10 w-1/5 mb:ml-10 p-2 rounded-xl hover:bg-white/50 transition-colors">
              Contact Us
            </a>
            {/* <a href="#" className="bg-white/10 w-full p-2 rounded-xl hover:bg-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="bg-white/10 w-full p-2 rounded-xl hover:bg-white/50 transition-colors">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
