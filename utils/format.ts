function formatQuestions(questions: string[], answers: string[]) {
    let formatted = "";

    questions.forEach((question: string, index: number) => {
        formatted += `Q: ${question}\n`;

        if (index < answers.length - 1) {
            formatted += `A: ${answers[index]}\n\n`;
        } else {
            formatted += `A: ${answers[index]}`;
        }
    });

    return formatted;
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

export function roundToCents(price: number) {
    return Math.floor(price * 100) / 100;
}

export function formatPrice(price: number) {
    const formatted = `$${price}`;

    if (!formatted.includes(".")) {
        return `${formatted}.00`;
    } else if (formatted.substring(formatted.indexOf(".")).length < 3) {
        return `${formatted}0`;
    } else {
        return formatted;
    }
}