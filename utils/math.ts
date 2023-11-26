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

export function calculatePrices(text: string, numQuestions: number) {
    const textPrice = nearestCent(text.length * CENTS_PER_CHARACTER);
    const questionsPrice = nearestCent(numQuestions * CENTS_PER_QUESTION);
    const totalPrice = nearestCent(textPrice + questionsPrice + FIXED_RATE);

    return [textPrice, questionsPrice, totalPrice];
}

export function useUpdatePrices(
    text: string, numQuestions: number, 
    setTextPrice: (price: number) => void,
    setQuestionsPrice: (price: number) => void,
    setTotalPrice: (price: number) => void
) {
    useEffect(() => {
        const [textPrice, questionsPrice, totalPrice] = calculatePrices(text, numQuestions);
        setTextPrice(textPrice);
        setQuestionsPrice(questionsPrice);
        setTotalPrice(totalPrice);
    }, [text, numQuestions]);
}