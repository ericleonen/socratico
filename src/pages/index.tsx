import Header from "@/components/Header";
import QuestionsSection from "@/components/QuestionsSection";
import TextSection from "@/components/TextSection";

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col">
        <Header />
        <TextSection />
      </div>
      <QuestionsSection />
    </div>
  );
}