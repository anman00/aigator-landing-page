import { ChevronDown, Mail, User, Loader2 } from 'lucide-react'
import { useState, useCallback } from 'react'

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
  
    const form = event.currentTarget;
    const formData = new FormData(form);
  
    try {
      const name = formData.get('name')?.toString() || '';
      const email = formData.get('email')?.toString() || '';
      const aiUseCase = formData.get('aiUseCase')?.toString() || '';
  
      const APPS_SCRIPT_URL = import.meta.env.VITE_FORM_URL || "";
  
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ name, email, aiUseCase }),
        redirect: "follow",
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }
  
      const result = await response.json();
      if (result.success) {
        setMessage({ text: 'Signed up successfully!', isError: false });
        form.reset();
      } else {
        setMessage({ text: result.message || 'Failed to append data.', isError: true });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ text: 'An unexpected error occurred. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} id='waitlist' className="space-y-6 relative p-8 max-w-[400px] text-white text-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Beta Waitlist</h2>
        <p className="opacity-60">
          Sign up for early access and get exclusive entry to our beta testing program.
        </p>
        
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20"
          />
        </div>

        <div className="relative">
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
          <select 
            name="aiUseCase"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20 appearance-none"
          >
            <option value="">What would you use AI for?</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>

      {message && (
        <div 
          className={`p-3 rounded-lg ${
            message.isError ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-[#9C3FE4] py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-70 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Signing up...
          </>
        ) : (
          'Sign me up!!'
        )}
      </button>
    </form>
  )
}
