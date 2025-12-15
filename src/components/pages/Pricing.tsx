// src/pages/PricingPage.tsx
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// --- Configuration ---
const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(STRIPE_KEY);

// --- Components ---

const CheckIcon = () => (
  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage('');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (error) setMessage(error.message || 'Payment failed');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement options={{ layout: 'tabs' }} />
      
      <button
        disabled={isLoading || !stripe || !elements}
        className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {!isLoading && (
            <svg className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
        </span>
        {isLoading ? 'Processing...' : 'Pay Now – $20'}
      </button>
      
      {message && (
        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center font-medium border border-red-100">
          {message}
        </div>
      )}
      
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
        <span>Secured by Stripe</span>
      </div>
    </form>
  );
};

// --- Main Page ---

const PricingPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [animateText, setAnimateText] = useState(false);

  const features = [
    'Unlimited carbon credit tracking',
    'Real-time transparency dashboard',
    'Xpansiv Connect integration',
    'Priority email support',
    'Custom reporting & API access',
  ];

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/payments/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setClientSecret(data.data.clientSecret))
      .catch(() => setErrorMessage('Service unavailable.'));

    const timer = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // FIX: Added 'overflow-x-hidden' to prevent the blob from causing horizontal scroll
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 relative flex items-center justify-center overflow-x-hidden">
      
      {/* Decorative background blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Marketing Copy */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 transition-all duration-1000 ease-out transform ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Simple, Transparent <br /> Pricing
            </h1>
            
            <p 
              className={`text-lg text-secondary mb-8 leading-relaxed transition-all duration-1000 delay-100 ease-out transform ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              One plan. Unlimited access. Built for enterprises serious about climate impact. No hidden fees.
            </p>

            <div 
              className={`space-y-4 mb-8 inline-block text-left transition-all duration-1000 delay-200 ease-out transform ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-700">
                  <CheckIcon />
                  <span className="text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div 
              className={`hidden lg:block pt-8 border-t border-gray-100 transition-all duration-1000 delay-300 ease-out transform ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
                <p className="text-sm text-gray-400 font-medium">Trusted by leading green enterprises</p>
            </div>
          </div>

          {/* RIGHT SIDE: Payment Card */}
          <div 
            className={`w-full flex justify-center lg:justify-end transition-all duration-1000 delay-500 ease-out transform ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                
                {/* Header of Card */}
                <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">Enterprise Plan</h3>
                    <p className="text-gray-500 text-sm mt-1">Instant Activation</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-primary">$20</span>
                    <span className="text-gray-400 text-sm ml-1 font-medium">/one-time</span>
                  </div>
                </div>

                {/* Body of Card */}
                {errorMessage ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <p className="text-red-500 mb-4 font-medium">{errorMessage}</p>
                      <button onClick={() => window.location.reload()} className="text-sm text-primary hover:underline">Reload Page</button>
                    </div>
                ) : clientSecret ? (
                  <Elements 
                    stripe={stripePromise} 
                    options={{ 
                      clientSecret,
                      appearance: { 
                        theme: 'stripe',
                        variables: {
                          colorPrimary: '#0f172a',
                          borderRadius: '12px',
                        }
                      } 
                    }}
                  >
                    <CheckoutForm />
                  </Elements>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center space-y-4">
                    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <p className="text-gray-400 text-sm animate-pulse">Preparing checkout...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PricingPage;