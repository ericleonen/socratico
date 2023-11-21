type CopyQuestionsButtonType = {
    onClick: () => void
}

export default function CopyQuestionsButton({ onClick }: CopyQuestionsButtonType) {
    return (
        <button
            onClick={onClick}
             className="absolute right-6"
        >
            Copy
        </button>
    );
}