import { onChangeText, useAutoSizeTextArea } from "@/utils/textUtils";
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
            onChange={onChangeText(setText)}
            ref={textAreaRef}
            placeholder="Paste text here"
            className="w-full resize-none bg-transparent focus:outline-none py-3"
        />
    )
}