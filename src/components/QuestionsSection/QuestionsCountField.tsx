import { onChangeValue } from "@/utils/input"
import { parseIntMin } from "@/utils/math"

type QuestionsCountFieldType = {
    numQuestions: number,
    setNumQuestions: (numQuestions: number) => void
}

export default function QuestionsCountField({ numQuestions, setNumQuestions }: QuestionsCountFieldType) {
    return (
        <div className="flex">
            <span>How many questions?</span>
            <input 
                type="number" 
                value={numQuestions} 
                onChange={onChangeValue(setNumQuestions, true)}
                onBlur={({target}) => setNumQuestions(parseIntMin(target.value, 5))}
                className="w-[50px] bg-transparent focus:outline-none ml-2"
            />
        </div>
    )
}