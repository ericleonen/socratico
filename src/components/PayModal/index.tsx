import { useContext, useEffect, useState } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";
import NumQuestionsField from "./NumQuestionsField";
import { PriceCalculator } from "./PriceCalculator";
import { roundInK } from "../../../utils/math";
import { formatPrice, roundToCents } from "../../../utils/format";

type PayModalProps = {
    text: string, 
    numQuestions: number,
    setNumQuestions: (num: number) => void
}

export default function PayModal({ text, numQuestions, setNumQuestions }: PayModalProps) {
    const { setPayModalOpen } = useContext(ModalContext);
    const [questionsPrice, setQuestionsPrice] = useState(0);
    const [textPrice, setTextPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTextPrice = roundToCents(text.length * 4e-5)
        let newQuestionsPrice = roundToCents(numQuestions * 2e-2);

        if (isNaN(newQuestionsPrice)) {
            newQuestionsPrice = 0;
        }

        const newTotalPrice = roundToCents(newTextPrice + newQuestionsPrice + 0.40);

        setTextPrice(newTextPrice);
        setQuestionsPrice(newQuestionsPrice);
        setTotalPrice(newTotalPrice);
    }, [text, numQuestions])

    return (
        <ModalBase 
            title="Checkout"
            close={() => setPayModalOpen(false)}
        >
            <div className="flex flex-col w-1/2 h-full px-12 relative">
                <p className="text-sm text-black/40 font-medium">Your total is</p>
                <p className="font-medium text-5xl mt-1 text-black/90">{formatPrice(totalPrice)}</p>
                <div className="border-2 border-black/10 p-3 rounded-md shadow-lg mt-4 bg-gray-100/30">
                    <NumQuestionsField {...{text, numQuestions, setNumQuestions, questionsPrice}} />
                    <div className="text-black/90 font-medium mt-2 flex">
                        <p>Characters: {roundInK(text.length)}</p>
                        <p className="ml-auto">{formatPrice(textPrice)}</p>
                    </div>
                    <div className="text-black/90 font-medium mt-2 flex">
                        <p>Fixed rate</p>
                        <p className="ml-auto">$0.40</p>
                    </div>
                    <div className="text-black/90 font-medium mt-2 pt-2 flex border-t-2 border-black/10">
                        <p>Total due</p>
                        <p className="ml-auto">{formatPrice(totalPrice)}</p>
                    </div>
                </div>
                <div className="h-full w-[3px] bg-black/10 rounded-full absolute top-0 right-0" />
            </div>
        </ModalBase>
    )
}