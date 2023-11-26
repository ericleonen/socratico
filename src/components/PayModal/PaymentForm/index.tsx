import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import { RETURN_URL } from "../../../../params/stripe";
import { StripePaymentElementOptions } from "@stripe/stripe-js/types/stripe-js/elements";
import PayButton from "./PayButton";

type PaymentFormProps = {
    totalPrice: number
}

export default function PaymentForm({ totalPrice }: PaymentFormProps) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) return;
        
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) return;

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent?.status) {
                case "succeeded":
                    setMessage("Payment successful!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment failed. Please try again.");
                    break;
                default:
                    setMessage("Something went worng.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}`
            }
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message!);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions: StripePaymentElementOptions = {
        layout: "tabs"
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement options={paymentElementOptions} />
            <PayButton 
                disabled={isLoading || !stripe || !elements}
                totalPrice={totalPrice}
            />
            {message && <p>{message}</p>}
        </form>
    );
}