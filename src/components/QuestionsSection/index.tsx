import { useEffect, useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import QuestionsCountField from "./QuestionsCountField";
import Questions from "./Questions";
import CopyQuestionsButton from "./CopyQuestionsButton";
import { formatQuestions } from "@/utils/format";
import { stringify } from "querystring";

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
        <div className="flex flex-col h-full flex-grow bg-amber-200">
            <div className="flex justify-center py-3 bg-amber-300 relative shadow-md z-10">
                <h2 className="text-xl">Questions</h2>
                <CopyQuestionsButton 
                    onClick={copyToClipboard}
                    disabled={questions.length === 0}
                />
            </div>
            <div className="flex flex-grow flex-col py-3 px-6 overflow-y-scroll">
                {
                    !questions.length ? (<>
                        <QuestionsCountField {...{numQuestions, setNumQuestions}} />
                        <GenerateQuestionsButton onClick={generateQuestions} />
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