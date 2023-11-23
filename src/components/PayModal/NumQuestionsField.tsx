import { useAutoSizeNumberInput, onChangeValue } from "@/utils/input";
import { useRef } from "react";

type NumQuestionsFieldProps = {
    numQuestions: number,
    setNumQuestions: (num: number) => void
}

export default function NumQuestionsField({ numQuestions, setNumQuestions }: NumQuestionsFieldProps) {
    const numQuestionsInputRef = useRef<HTMLInputElement>(null);
    useAutoSizeNumberInput(numQuestionsInputRef.current, numQuestions);

    return (
        <p className="flex mt-2 text-black/90">
            For
            <input 
                ref={numQuestionsInputRef}
                value={numQuestions}
                onChange={onChangeValue(setNumQuestions, true)}
                onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                        e.preventDefault();
                    }
                }}
                type="number"
                min={1}
                step={1}
                className="text-black/90 min-w-[20px] w-[20px] bg-gray-300/70 rounded-sm mx-1 focus:outline-none text-center px-[5px] focus:bg-gray-300"
            />
            questions
        </p>
    )
}