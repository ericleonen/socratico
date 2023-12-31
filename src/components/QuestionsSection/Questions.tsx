import { setAnswerByIndex } from "../../../utils/input"
import Question from "./Question"

type QuestionsType = {
    questions: string[],
    answers: string[],
    setAnswers: (_: (prevAnswers: string[]) => string[]) => void
}

export default function Questions({ questions, answers, setAnswers }: QuestionsType) {
    return (
        <div className="mt-6 w-full px-6">{
            questions.map((question: string, index: number) => (
                <Question
                    key={`question_${index}`}
                    question={question}
                    answer={answers[index]}
                    setAnswer={setAnswerByIndex(setAnswers, index)}
                />
            ))
        }</div>
    )
}