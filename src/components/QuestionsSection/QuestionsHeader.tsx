import { copyToClipboard } from "../../../utils/questions"
import CopyQuestionsButton from "./CopyQuestionsButton"

type QuestionsHeaderType = {
    questions: string[],
    answers: string[]
}

export default function QuestionsHeader({ questions, answers }: QuestionsHeaderType) {
    return (
        <div className="flex right-0 justify-center py-3 sticky top-0 w-full bg-black/90 opacity-95">
            <h2 className="text-xl font-bold text-ai-theme leading-6">Questions</h2>
            <CopyQuestionsButton 
                onClick={copyToClipboard(questions, answers)}
                disabled={questions.length === 0}
            />
        </div>
    )
}