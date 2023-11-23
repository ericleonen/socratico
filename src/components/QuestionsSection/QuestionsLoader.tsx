import { generateLoadingMessage } from "@/utils/questions";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function QuestionsLoader() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if (message.length === 0) {
            setMessage(generateLoadingMessage());
        }
    }, []);

    return (
        <>
            <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-gray-200/50 animate-bounce" />
            <p className="text-gray-200/50 text-center font-bold">{message}</p>
        </>
    );
}