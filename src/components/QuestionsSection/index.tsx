import { useEffect, useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import Questions from "./Questions";
import { generateQuestions } from "@/utils/questions";
import QuestionsHeader from "./QuestionsHeader";

type QuestionSectionType = {
    text: string
}

export default function QuestionsSection({ text }: QuestionSectionType) {
    const [numQuestions, setNumQuestions] = useState<number>(5);
    const [questions, setQuestions] = useState<string[]>([]);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        setAnswers(questions.map(() => ""));
    }, [questions, setAnswers]);

    return (
        <div className="flex flex-col h-full w-1/4 overflow-hidden z-10 shadow-md shadow-black bg-black/95 overflow-y-scroll">
            <QuestionsHeader {...{questions, answers}} />
            {
                !questions.length ? (
                    <div className="flex flex-col justify-center h-full w-full">
                        <GenerateQuestionsButton 
                            onClick={generateQuestions(text, setQuestions)}
                            disabled={text.length === 0} 
                        />
                        <p className="text-gray-200/50 text-center mt-3">You don't have any questions yet. Let's generate some with AI!</p>
                    </div>
                ) : (
                    <Questions 
                        questions={questions}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )
            }
        </div>
    );
}