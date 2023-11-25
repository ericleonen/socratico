import { useEffect } from "react";
import { roundToCents } from "./format";

export function roundInK(n: number) {
    if (n < 1000) {
        return n + "";
    } else {
        return Math.round(n / 1000) + "K";
    }
}

export function parseIntMin(str: string, min: number) {
    const num = parseInt(str);

    if (isNaN(num) || num < min) {
        return min;
    } else {
        return num;
    }
}

export function useUpdatePrices(
    text: string, numQuestions: number, 
    setTextPrice: (price: number) => void,
    setQuestionsPrice: (price: number) => void,
    setTotalPrice: (price: number) => void
) {
    useEffect(() => {
        const newTextPrice = roundToCents(text.length * 4e-5)
        let newQuestionsPrice = roundToCents(numQuestions * 2e-2);

        if (isNaN(newQuestionsPrice)) {
            newQuestionsPrice = 0;
        }

        const newTotalPrice = roundToCents(newTextPrice + newQuestionsPrice + 0.40);

        setTextPrice(newTextPrice);
        setQuestionsPrice(newQuestionsPrice);
        setTotalPrice(newTotalPrice);
    }, [text, numQuestions]);
}