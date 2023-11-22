type GenerateQuestionsButtonType = {
    onClick: () => void,
    disabled: boolean
}

export default function GenerateQuestionsButton({ onClick, disabled }: GenerateQuestionsButtonType) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="transition-all hover:shadow-cyan-500/30 disabled:hover:shadow-transparent disabled:cursor-not-allowed disabled:opacity-50 py-2 px-3 bg-gradient-to-tr from-cyan-500 to-indigo-500 shadow-md w-full rounded-full text-white font-medium"
        >
            Generate
        </button>
    );
}