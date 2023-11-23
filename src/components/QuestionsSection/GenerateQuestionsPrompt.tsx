import { useState } from "react"
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import QuestionsLoader from "./QuestionsLoader";

type GenerateQuestionsPromptType = {
    disabled: boolean,
    generateQuestions: () => void
}

export default function GenerateQuestionsPrompt(
    { disabled, generateQuestions }: GenerateQuestionsPromptType
) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-center h-full w-full px-10 items-center">{ 
            !loading ? (<>
                <GenerateQuestionsButton 
                    onClick={generateQuestions}
                    disabled={disabled} 
                />
                <p className="text-gray-200/50 text-center mt-3">You don't have any questions yet. Let's generate some with AI!</p>
            </>) : <QuestionsLoader />
        }</div>
    )
}