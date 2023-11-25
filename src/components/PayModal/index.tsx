import { useContext, useEffect, useState } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";
import NumQuestionsField from "./NumQuestionsField";
import { roundInK, useUpdatePrices } from "../../../utils/math";
import { formatPrice, roundToCents } from "../../../utils/format";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import FeeTable from "./FeeTable";
import TotalPriceDisplay from "./TotalPriceDisplay";

type PayModalProps = {
    text: string, 
    numQuestions: number,
    setNumQuestions: (num: number) => void
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!
);

export default function PayModal({ text, numQuestions, setNumQuestions }: PayModalProps) {
    const { setPayModalOpen } = useContext(ModalContext);
    const [questionsPrice, setQuestionsPrice] = useState(0);
    const [textPrice, setTextPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useUpdatePrices(text, numQuestions, setTextPrice, setQuestionsPrice, setTotalPrice);

    return (
        <ModalBase 
            title="Checkout"
            close={() => setPayModalOpen(false)}
        >
            <div className="flex flex-col w-[20rem] h-full px-12 relative">
                <TotalPriceDisplay {...{totalPrice}} />
                <FeeTable 
                    {...{numQuestions, setNumQuestions, questionsPrice, textPrice, totalPrice }}
                    characterCount={text.length} 
                />
                <div className="h-full w-[3px] bg-black/10 rounded-full absolute top-0 right-0" />
            </div>
            <Elements stripe={stripePromise}>
                <PaymentForm {...{totalPrice}} />
            </Elements>
        </ModalBase>
    )
}