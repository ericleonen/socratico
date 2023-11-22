import { useEffect, useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import Questions from "./Questions";
import CopyQuestionsButton from "./CopyQuestionsButton";
import { formatQuestions } from "@/utils/format";

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

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(formatQuestions(questions, answers));

            // copied!
        } catch (err) {
            console.log(`Failed to copy: ${err}`);
        }
    };

    const generateQuestions = async () => {
        try {
            const res = await fetch(
                "/api/generate",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text })
                }
            );
            const data = await res.json()
            setQuestions(data.questions);
        } catch (err) {
            console.log(`Request failed - ${err}`)
        }
    }

    return (
        <div className="flex flex-col h-full w-1/4 overflow-hidden z-30 shadow-md shadow-black bg-black/95">
            <div className="flex justify-center py-3 fixed z-40 w-[25%] bg-black/90 opacity-95">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-indigo-500">Questions</h2>
                <CopyQuestionsButton 
                    onClick={copyToClipboard}
                    disabled={questions.length === 0}
                />
            </div>
            <div className="flex h-full flex-col px-6 overflow-y-scroll">
                {
                    !questions.length ? (
                        <div className="flex flex-col justify-center h-full w-full">
                            <GenerateQuestionsButton 
                                onClick={generateQuestions}
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
        </div>
    );
}