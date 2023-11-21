import { onChangeValue, useAutoSizeNumberInput } from "@/utils/input"
import { parseIntMin } from "@/utils/math"
import { useRef } from "react"

type QuestionsCountFieldType = {
    numQuestions: number,
    setNumQuestions: (numQuestions: number) => void
}

export default function QuestionsCountField({ numQuestions, setNumQuestions }: QuestionsCountFieldType) {
    const questionsCountInputRef = useRef<HTMLInputElement>(null);
    useAutoSizeNumberInput(questionsCountInputRef.current, numQuestions);

    return (
        <div className="flex">
            <span>How many questions?</span>
            <input 
                ref={questionsCountInputRef}
                type="number" 
                value={numQuestions} 
                onChange={onChangeValue(setNumQuestions, true)}
                onBlur={({target}) => setNumQuestions(parseIntMin(target.value, 5))}
                className="w-[30px] bg-transparent focus:outline-none ml-2"
            />
        </div>
    )
}