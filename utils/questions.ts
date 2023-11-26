// useful functions for actions in the Questions Section

import { questionLoadingMessages } from "../params/loading";
import { formatQuestions } from "./format";

export function generateQuestions (
    text: string, 
    setQuestions: (questions: string[]) => void
) {
    return async () => {
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
}

export function copyToClipboard(questions: string[], answers: string[]) {
    return async () => {
        try {
            await navigator.clipboard.writeText(formatQuestions(questions, answers));
            // copied!
        } catch (err) {
            console.log(`Failed to copy: ${err}`);
        }
    }
};

export function generateLoadingMessage() {
    const r = Math.floor(Math.random() * questionLoadingMessages.length);
    return questionLoadingMessages[r];
}