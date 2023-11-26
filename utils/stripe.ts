import { Stripe as StripeType, loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

let stripePromise: Promise<StripeType | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_TEST!);
  }
  return stripePromise;
};

type ClientSecret = { clientSecret: string };

export function useUpdateClientSecret(text: string, numQuestions: number, setClientSecret: (clientSecret: string) => void) {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, numQuestions })
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])
}