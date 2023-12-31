import { ChangeEvent, useEffect } from "react";

// useful functions for handling input

export function useAutoSizeTextArea(textAreaRef: HTMLTextAreaElement | null, value: string) {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
        }
    }, [textAreaRef, value]);
}

export function useAutoSizeNumberInput(numberInputRef: HTMLInputElement | null, value: number) {
    useEffect(() => {
        if (numberInputRef) {
            numberInputRef.style.width = "0px";
            numberInputRef.style.width = `${numberInputRef.scrollWidth}px`;
        }
    }, [numberInputRef, value]);
}

export function setAnswerByIndex(
    setAnswers: (_: (prevAnswers: string[]) => string[]) => void, 
    index: number
) {
    return (answer: string) => {
        setAnswers((prevAnswers: string[]) => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = answer;

            return newAnswers;
        })
    };
}

export function onChangeValue(setValue: (value: any) => void, parseAsInt: boolean = false) {
    return (event: ChangeEvent) => {
        if (
            event.target instanceof HTMLTextAreaElement || 
            event.target instanceof HTMLInputElement
        ) {
            const val = event.target.value;

            if (parseAsInt) {
                setValue(parseInt(val));
            } else {
                setValue(val)
            }
        }
    };
}