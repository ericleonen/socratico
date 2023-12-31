import { useContext, useEffect, useState } from "react";
import GenerateQuestionsButton from "./GenerateQuestionsButton";
import Questions from "./Questions";
import { generateQuestions } from "../../../utils/questions";
import QuestionsHeader from "./QuestionsHeader";
import GenerateQuestionsPrompt from "./GenerateQuestionsPrompt";
import { ModalContext } from "../Modals/ModalContext";
import { MIN_QUESTIONS } from "../../../params/questions";

type QuestionSectionType = {
    text: string
}

export default function QuestionsSection({ text }: QuestionSectionType) {
    const [numQuestions, setNumQuestions] = useState<number>(MIN_QUESTIONS);
    const [questions, setQuestions] = useState<string[]>([]);
    const [answers, setAnswers] = useState<string[]>([]);

    const { setPayModalOpen } = useContext(ModalContext);

    useEffect(() => {
        setAnswers(questions?.map(() => ""));
    }, [questions, setAnswers]);

    return (
        <div className="flex flex-col h-full w-1/4 overflow-hidden z-10 shadow-md shadow-black bg-black/95 overflow-y-scroll">
            <QuestionsHeader {...{questions, answers}} />
            {
                !questions.length ? (
                    <GenerateQuestionsPrompt 
                        disabled={text.length === 0}
                        generateQuestions={() => setPayModalOpen(true)}
                        // generateQuestions={generateQuestions(text, setQuestions)}
                    />
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