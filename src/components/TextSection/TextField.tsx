import { onChangeValue, useAutoSizeTextArea } from "@/utils/input";
import { useRef } from "react"

type TextFieldProps = {
    text: string,
    setText: (text: string) => void
}

export default function TextField({ text, setText }: TextFieldProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutoSizeTextArea(textAreaRef.current, text);

    return (
        <textarea
            value={text}
            onChange={onChangeValue(setText)}
            ref={textAreaRef}
            placeholder="Paste some interesting text here and generate questions over on the right."
            className="w-full resize-none bg-transparent focus:outline-none pt-16 pb-10 text-black/80"
        />
    )
}