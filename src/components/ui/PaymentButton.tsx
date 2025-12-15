// src/components/ui/PaymentButton.tsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_...');

interface PaymentButtonProps {
  buttonText?: string;
  buttonClassName?: string;
  arrow?: boolean;
}

const CheckoutForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (error) {
      setMessage(error.message || 'An error occurred');
    } else {
      onSuccess?.();
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <PaymentElement />
      <button
        disabled={isLoading || !stripe || !elements}
        className="mt-4 w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-secondary transition-colors"
      >
        {isLoading ? 'Processing...' : 'Complete Payment'}
      </button>
      {message && <div className="mt-4 text-red-500 text-center">{message}</div>}
    </form>
  );
};

const PaymentButton: React.FC<PaymentButtonProps> = ({
  buttonText = 'Pay Now',
  buttonClassName = '',
  arrow = false,
}) => {
  const [clientSecret, setClientSecret] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/v1/payments/create-intent', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Failed to create payment');

      const { data } = await res.json();
      setClientSecret(data.clientSecret);
      setShowForm(true);
    } catch (err) {
      setError('Unable to start payment. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!showForm ? (
        <button
          onClick={handleClick}
          disabled={loading}
          className={buttonClassName}
        >
          {loading ? 'Loading...' : buttonText}
          {arrow && <span className="ml-2 text-2xl">→</span>}
        </button>
      ) : (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Purchase</h2>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-sm text-gray-500 underline w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </>
  );
};

export default PaymentButton;