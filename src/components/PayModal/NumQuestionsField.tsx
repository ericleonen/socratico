import { MAX_QUESTIONS, MIN_QUESTIONS } from "../../../params/questions";
import { formatPrice } from "../../../utils/format";
import { useAutoSizeNumberInput, onChangeValue } from "../../../utils/input";
import { useRef } from "react";

type NumQuestionsFieldProps = {
    numQuestions: number,
    setNumQuestions: (num: number) => void,
    questionsPrice: number,
}

export default function NumQuestionsField(
    { numQuestions, setNumQuestions, questionsPrice }: NumQuestionsFieldProps
) {
    const numQuestionsInputRef = useRef<HTMLInputElement>(null);
    useAutoSizeNumberInput(numQuestionsInputRef.current, numQuestions);

    return (
        <div className="flex text-black/90 font-medium">
            <p>Questions:</p>
            <input 
                autoFocus
                ref={numQuestionsInputRef}
                value={numQuestions}
                onChange={onChangeValue(setNumQuestions, true)}
                onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                        e.preventDefault();
                    }
                }}
                onBlur={() => {
                    if (numQuestions > MAX_QUESTIONS) {
                        setNumQuestions(MAX_QUESTIONS);
                    }
                }}
                type="number"
                min={MIN_QUESTIONS}
                max={MAX_QUESTIONS}
                step={1}
                className="text-black/90 min-w-[20px] w-[20px] bg-gray-300/70 rounded-sm ml-1 focus:outline-none text-center px-[5px] focus:bg-gray-300"
            />
            <p className="ml-auto">{formatPrice(questionsPrice)}</p>
        </div>
    )
}