import { ChangeEvent, useEffect } from "react";

export function useAutoSizeTextArea(textAreaRef: HTMLTextAreaElement | null, value: string) {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;

            console.log(textAreaRef.style.height);
        }
    }, [textAreaRef, value]);
}

export function onChangeText(setText: (text: string) => void) {
    return (event: ChangeEvent) => {
        if (
            event.target instanceof HTMLTextAreaElement || 
            event.target instanceof HTMLInputElement
        ) {
            setText(event.target.value)
        }
    };
}