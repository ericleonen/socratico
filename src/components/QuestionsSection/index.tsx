import { useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import QuestionsCountField from "./QuestionsCountField";

type QuestionSectionType = {
    text: string
}

export default function QuestionsSection({ text }: QuestionSectionType) {
    const [numQuestions, setNumQuestions] = useState<number>(5);

    return (
        <div className="flex flex-col h-full flex-grow bg-amber-200">
            <div className="flex justify-center py-3 bg-amber-300">
                <h2 className="text-xl">Questions</h2>
            </div>
            <div className="flex flex-grow flex-col py-3 px-6">
                <QuestionsCountField {...{numQuestions, setNumQuestions}} />
                <GenerateQuestionsButton />
            </div>
        </div>
    );
}