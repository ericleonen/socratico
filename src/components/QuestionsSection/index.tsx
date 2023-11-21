import GenerateQuestionsButton from "./GenerateQuestionsButton";
import QuestionsCountField from "./QuestionsCountField";

export default function QuestionsSection() {
    return (
        <div className="flex flex-col h-full flex-grow bg-amber-200">
            <div className="flex justify-center py-3 bg-amber-300">
                <h2 className="text-xl">Questions</h2>
            </div>
            <div className="flex flex-grow flex-col py-3 px-6">
                <QuestionsCountField />
                <GenerateQuestionsButton />
            </div>
        </div>
    );
}