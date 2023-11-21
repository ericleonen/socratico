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