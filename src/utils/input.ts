import { ChangeEvent, useEffect } from "react";

export function useAutoSizeTextArea(textAreaRef: HTMLTextAreaElement | null, value: string) {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
        }
    }, [textAreaRef, value]);
}

export function useAutoSizeNumberInput(numberInputRef: HTMLInputElement | null, value: number, buffer: number = 20) {
    useEffect(() => {
        if (numberInputRef) {
            numberInputRef.style.width = "0px";
            numberInputRef.style.width = `${numberInputRef.scrollWidth + buffer}px`;

            console.log(numberInputRef.style.width);
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
            if (parseAsInt) {
                setValue(parseInt(event.target.value))
            } else {
                setValue(event.target.value)
            }
        }
    };
}