import { FIXED_RATE } from "../../../params/pricing";
import { formatPrice } from "../../../utils/format";
import { roundInK } from "../../../utils/format";
import NumQuestionsField from "./NumQuestionsField";

type FeeTableProps =  {
    numQuestions: number, 
    setNumQuestions: (num: number) => void, 
    questionsPrice: number, 
    characterCount: number, 
    textPrice: number, 
    totalPrice: number
}

export default function FeeTable({ 
    numQuestions, setNumQuestions, questionsPrice, characterCount, textPrice, totalPrice 
}: FeeTableProps) {
    return (
        <div className="border-2 border-black/10 p-3 rounded-md shadow-lg mt-4 bg-gray-100">
            <NumQuestionsField {...{numQuestions, setNumQuestions, questionsPrice}} />
            <div className="text-black/90 font-medium mt-2 flex">
                <p>Characters: {roundInK(characterCount)}</p>
                <p className="ml-auto">{formatPrice(textPrice)}</p>
            </div>
            <div className="text-black/90 font-medium mt-2 flex">
                <p>Fixed rate</p>
                <p className="ml-auto">{formatPrice(FIXED_RATE)}</p>
            </div>
            <div className="text-black/90 font-medium mt-2 pt-2 flex border-t-2 border-black/10">
                <p>Total due</p>
                <p className="ml-auto">{formatPrice(totalPrice)}</p>
            </div>
        </div>
    )
}