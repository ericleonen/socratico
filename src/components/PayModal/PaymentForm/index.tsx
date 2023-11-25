import { ExpressCheckoutElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { formatPrice } from "../../../../utils/format";
import { StripeExpressCheckoutElementOptions } from "@stripe/stripe-js/types/stripe-js/elements/express-checkout";

type PaymentFormProps = {
    totalPrice: number
}

const expressCheckoutOptions: StripeExpressCheckoutElementOptions = {
    buttonType: {
        googlePay: "plain"
    }
}

export default function PaymentForm({ totalPrice }: PaymentFormProps) {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
            const { data } = await axios.post("api/create-payment-intent", {
                data: {
                    amount: totalPrice
                }
            });
            const clientSecret = data;

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement }
            });
        } catch (err) {
            console.log(err);
        }
    }

    const onConfirm = () => {
        console.log("Confirmed!")
    }

    return (
        <div className="flex flex-grow flex-col px-12 w-[30rem]">
            <ExpressCheckoutElement 
                onConfirm={onConfirm} 
                options={expressCheckoutOptions}
            />
            <form 
                onSubmit={onSubmit}
                className="w-full h-full"
            >
                <CardElement />
                <button className="bg-black/90 w-full text-gray-200/90 py-2 font-medium rounded-md mt-auto">Pay {formatPrice(totalPrice)}</button>
            </form>
        </div>
    );
}