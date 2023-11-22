import Header from "@/components/Header";
import QuestionsSection from "@/components/QuestionsSection";
import TextSection from "@/components/TextSection";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col h-full flex-grow overflow-y-scroll items-center relative">
        <Header characterCount={text.length} />
        <TextSection {...{text, setText}} />
      </div>
      <QuestionsSection text={text} />
    </div>
  );
}