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

const loadingMessages = [
    "Thinking deep thoughts",
    "Contemplating concepts",
    "Querying inquiries",
    "Pondering possibilities",
    "Debating doubts"
]

export function generateLoadingMessage() {
    const r = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[r];
}