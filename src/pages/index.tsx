import Header from "@/components/Header";
import QuestionsSection from "@/components/QuestionsSection";
import TextSection from "@/components/TextSection";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col flex-grow">
        <Header characterCount={text.length} />
        <div className="flex flex-col items-center flex-grow overflow-y-scroll w-full">
          <TextSection {...{text, setText}} />
        </div>
      </div>
      <QuestionsSection text={text} />
    </div>
  );
}