import Header from "@/components/Header";
import { ModalContext } from "@/components/Modals/ModalContext";
import PayModal from "@/components/PayModal";
import QuestionsSection from "@/components/QuestionsSection";
import TextSection from "@/components/TextSection";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");

  const [payModalOpen, setPayModalOpen] = useState<boolean>(false);
  const [helpModalOpen, setHelpModalOpen] = useState<boolean>(false);
  const [numQuestions, setNumQuestions] = useState<number>(5);

  return (
    <ModalContext.Provider value={{ setPayModalOpen, setHelpModalOpen }}>
        <div className="flex h-screen w-screen">
          <div className="flex flex-col h-full flex-grow overflow-y-scroll items-center relative">
            <Header characterCount={text.length} />
            <TextSection {...{text, setText}} />
          </div>
          <QuestionsSection text={text} />
        </div>
        { 
          payModalOpen && 
          <PayModal 
            {...{numQuestions, setNumQuestions}} 
          /> 
        }
    </ModalContext.Provider>
  );
}