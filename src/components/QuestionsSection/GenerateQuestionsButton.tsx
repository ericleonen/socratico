type GenerateQuestionsButtonType = {
    onClick: () => void
}

export default function GenerateQuestionsButton({ onClick }: GenerateQuestionsButtonType) {
    return (
        <button
            onClick={onClick}
             className="py-2 px-3 bg-gray-400 w-full"
        >
            Generate
        </button>
    );
}