import { Stripe as StripeType, loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

let stripePromise: Promise<StripeType | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!);
  }
  return stripePromise;
};

export const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'Socratica',
      url: 'https://fe1b-50-46-140-208.ngrok-free.app/',
    },
  })

export type StripePaymentStatus = {
    status: "initial" | "processing" | "error"
}

export async function createPaymentIntent(
    data: { amount: number }
): Promise<{ client_secret: string }> {
    const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
        amount: data.amount * 100,
        automatic_payment_methods: { enabled: true },
        currency: "usd"
    });

    return { client_secret: paymentIntent.client_secret as string };
}