import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

type CopyQuestionsButtonType = {
    onClick: () => void,
    disabled: boolean
}

export default function CopyQuestionsButton({ onClick, disabled }: CopyQuestionsButtonType) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="transition-all opacity-90 absolute right-6 text-gray-200/70 rounded-full p-[5px] flex justify-center items-center hover:bg-gray-200/10 disabled:text-gray-200/20 disabled:hover:cursor-not-allowed disabled:hover:bg-transparent"
        >
            <ClipboardDocumentListIcon className="w-5 h-5 mr-[0.5px]" />
        </button>
    );
}