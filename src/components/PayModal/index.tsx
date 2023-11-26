import { useContext, useEffect, useState } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";
import { useUpdatePrices } from "../../../utils/math";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import FeeTable from "./FeeTable";
import TotalPriceDisplay from "./TotalPriceDisplay";
import { getStripe, useUpdateClientSecret } from "../../../utils/stripe";
import { StripeElementsOptionsClientSecret } from "@stripe/stripe-js/types/stripe-js";

type PayModalProps = {
    text: string, 
    numQuestions: number,
    setNumQuestions: (num: number) => void
}

export default function PayModal({ text, numQuestions, setNumQuestions }: PayModalProps) {
    const { setPayModalOpen } = useContext(ModalContext);
    const [questionsPrice, setQuestionsPrice] = useState(0);
    const [textPrice, setTextPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(40);
    const [clientSecret, setClientSecret] = useState("");

    useUpdatePrices(text, numQuestions, setTextPrice, setQuestionsPrice, setTotalPrice);
    useUpdateClientSecret(text, numQuestions, setClientSecret);

    const options: StripeElementsOptionsClientSecret = {
        clientSecret,
        appearance: { theme: "stripe" }
    };

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
            {
                clientSecret && 
                <Elements 
                    stripe={getStripe()}
                    options={options}
                >
                    <PaymentForm {...{totalPrice}} />
                </Elements>   
            }
        </ModalBase>
    )
}