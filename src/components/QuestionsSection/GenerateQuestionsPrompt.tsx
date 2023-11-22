import GenerateQuestionsButton from "./GenerateQuestionsButton"

type GenerateQuestionsPromptType = {
    disabled: boolean,
    generateQuestions: () => void
}

export default function GenerateQuestionsPrompt(
    { disabled, generateQuestions }: GenerateQuestionsPromptType
) {
    return (
        <div className="flex flex-col justify-center h-full w-full px-10">
            <GenerateQuestionsButton 
                onClick={generateQuestions}
                disabled={disabled} 
            />
            <p className="text-gray-200/50 text-center mt-3">You don't have any questions yet. Let's generate some with AI!</p>
        </div>
    )
}