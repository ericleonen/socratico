import { FormEvent, useState } from "react";
import { formatPrice } from "../../../../utils/format";
import { StripePaymentStatus, createPaymentIntent } from "../../../../utils/stripe";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { onChangeValue } from "../../../../utils/input";

type PaymentFormProps = {
    totalPrice: number
}

export default function PaymentForm({ totalPrice }: PaymentFormProps) {
    const [cardholderName, setCardholderName] = useState<string>("");
    const [paymentType, setPaymentType] = useState<string>("");
    const [payment, setPayment] = useState<StripePaymentStatus>({ status: "initial" });
    const [errorMessage, setErrorMessage] = useState<string>("");

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!e.currentTarget.reportValidity()) return;
            if (!elements || !stripe) return;

            setPayment({ status: "processing" });

            const { error: submitError } = await elements.submit();

            if (submitError) {
                setPayment({ status: "error" });
                setErrorMessage(submitError.message ?? "An unknown error occurred");
                
                return;
            }

            const { client_secret: clientSecret } = await createPaymentIntent({ 
                amount: totalPrice 
            });

            const { error: confirmError } = await stripe!.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: "https://000b-50-46-140-208.ngrok-free.app/",
                    payment_method_data: {
                        billing_details: {
                            name: cardholderName
                        }
                    }
                }
            });
            
            if (confirmError) {
                setPayment({ status: "error" });
                setErrorMessage(confirmError.message ?? "An unknown error occurred");
            }
        } catch (err) {
            const { message } = err as StripeError;

            setPayment({ status: "error" });
            setErrorMessage(message ?? "An unknown error occurred");
        }
    }

    return (
        <form className="flex flex-grow flex-col px-12 w-[30rem]">
            <fieldset>
                {
                    paymentType === "card" &&
                    <>
                        <label 
                            htmlFor="Cardholder name"
                            className="text-sm text-black/90 font-medium"
                        >
                            Cardholder name
                        </label>
                        <input 
                            placeholder="Cardholder name"
                            type="text"
                            onChange={onChangeValue(setCardholderName)}
                            name="Cardholder name"
                            required
                            className="w-full rounded-md px-3 py-2 mt-1 shadow-sm mb-4 placeholder-black/50"
                        />
                    </>
                }
                <PaymentElement 
                    onChange={(e) => setPaymentType(e.value.type)}
                />
                <button 
                    type="submit"
                    className="w-full mt-6 bg-black/90 shadow-sm rounded-md text-gray-200/90 font-medium py-2 hover:bg-black/80"
                >
                    Pay {formatPrice(totalPrice)}
                </button>
            </fieldset>
        </form>
    );
}