import { onChangeValue, useAutoSizeTextArea } from "@/utils/input";
import { useRef } from "react";

type QuestionProps = {
    question: string,
    answer: string,
    setAnswer: (answer: string) => void
}

export default function Question({ question, answer, setAnswer }: QuestionProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutoSizeTextArea(textAreaRef.current, answer);

    return (
        <div className="w-full mb-4">
            <p className="font-bold">{question}</p>
            <textarea 
                ref={textAreaRef}
                value={answer}
                onChange={onChangeValue(setAnswer)}
                placeholder="Your answer"
                className="bg-transparent focus:outline-none w-full resize-none"
            />
        </div>
    );
}