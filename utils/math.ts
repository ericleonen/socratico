// useful functions for handling math operations

import { useEffect } from "react";
import { CENTS_PER_QUESTION, CENTS_PER_CHARACTER, FIXED_RATE } from "../params/pricing";

export function parseIntMin(str: string, min: number) {
    const num = parseInt(str);

    if (isNaN(num) || num < min) {
        return min;
    } else {
        return num;
    }
}

export function nearestCent(cents: number) {
    return Math.round(cents);
}

export function useUpdatePrices(
    text: string, numQuestions: number, 
    setTextPrice: (price: number) => void,
    setQuestionsPrice: (price: number) => void,
    setTotalPrice: (price: number) => void
) {
    useEffect(() => {
        const newTextPrice = nearestCent(text.length * CENTS_PER_CHARACTER)
        let newQuestionsPrice = nearestCent(numQuestions * CENTS_PER_QUESTION);

        if (isNaN(newQuestionsPrice)) {
            newQuestionsPrice = 0;
        }

        const newTotalPrice = nearestCent(newTextPrice + newQuestionsPrice + FIXED_RATE);

        setTextPrice(newTextPrice);
        setQuestionsPrice(newQuestionsPrice);
        setTotalPrice(newTotalPrice);
    }, [text, numQuestions]);
}