type CopyQuestionsButtonType = {
    onClick: () => void,
    disabled: boolean
}

export default function CopyQuestionsButton({ onClick, disabled }: CopyQuestionsButtonType) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
             className="absolute right-6"
        >
            Copy
        </button>
    );
}