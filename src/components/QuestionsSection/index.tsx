import { useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import QuestionsCountField from "./QuestionsCountField";
import Questions from "./Questions";
import CopyQuestionsButton from "./CopyQuestionsButton";
import { formatQuestions } from "@/utils/format";

type QuestionSectionType = {
    text: string
}

export default function QuestionsSection({ text }: QuestionSectionType) {
    const [numQuestions, setNumQuestions] = useState<number>(5);
    const [questions, setQuestions] = useState<string[]>(["test question 1", "test question2"]);
    const [answers, setAnswers] = useState<string[]>(["answer 1", "answer 2"]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(formatQuestions(questions, answers));

            // copied!
        } catch (err) {
            console.log(`Failed to copy: ${err}`);
        }
    };

    return (
        <div className="flex flex-col h-full flex-grow bg-amber-200">
            <div className="flex justify-center py-3 bg-amber-300 relative">
                <h2 className="text-xl">Questions</h2>
                <CopyQuestionsButton onClick={copyToClipboard}/>
            </div>
            <div className="flex flex-grow flex-col py-3 px-6">
                {
                    !questions.length ? (<>
                        <QuestionsCountField {...{numQuestions, setNumQuestions}} />
                        <GenerateQuestionsButton />
                    </>) : (
                        <Questions 
                            questions={questions}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    )
                }
            </div>
        </div>
    );
}