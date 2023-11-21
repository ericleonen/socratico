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

export function onChangeValue(setValue: (value: any) => void, parseAsInt: boolean = false) {
    return (event: ChangeEvent) => {
        if (
            event.target instanceof HTMLTextAreaElement || 
            event.target instanceof HTMLInputElement
        ) {
            if (parseAsInt) {
                setValue(parseInt(event.target.value))
            } else {
                setValue(event.target.value)
            }
        }
    };
}