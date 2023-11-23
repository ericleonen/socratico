import { generateLoadingMessage } from "@/utils/questions";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function QuestionsLoader() {
    return (
        <>
            <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-gray-200/50 animate-bounce" />
            <p className="text-gray-200/50 text-center font-bold">{generateLoadingMessage()}</p>
        </>
    );
}