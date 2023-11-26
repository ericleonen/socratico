import { Stripe as StripeType, loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

let stripePromise: Promise<StripeType | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!);
  }
  return stripePromise;
};

type ClientSecret = { clientSecret: string };

export async function useUpdateClientSecret(text: string, numQuestions: number, setClientSecret: (clientSecret: string) => void) {
  const res = await axios.post<ClientSecret>("/api/create-payment-intent", {
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, numQuestions })
  });
  setClientSecret(res.data.clientSecret);
}