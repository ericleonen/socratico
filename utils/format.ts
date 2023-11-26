// useful formatters

export function formatQuestions(questions: string[], answers: string[]) {
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

export function formatPrice(price: number) {
    const formatted = `$${price / 100}`;

    if (!formatted.includes(".")) {
        return `${formatted}.00`;
    } else if (formatted.substring(formatted.indexOf(".")).length < 3) {
        return `${formatted}0`;
    } else {
        return formatted;
    }
}

export function roundInK(n: number) {
    if (n < 1000) {
        return n + "";
    } else {
        return Math.round(n / 1000) + "K";
    }
}