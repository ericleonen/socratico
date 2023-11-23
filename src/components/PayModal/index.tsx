import { useContext } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";
import NumQuestionsField from "./NumQuestionsField";

type PayModalProps = {
    numQuestions: number,
    setNumQuestions: (num: number) => void
}

export default function PayModal({ numQuestions, setNumQuestions }: PayModalProps) {
    const { setPayModalOpen } = useContext(ModalContext);

    return (
        <ModalBase 
            title="Checkout"
            close={() => setPayModalOpen(false)}
        >
            <div className="flex flex-col w-1/2 h-full px-12 relative">
                <p className="text-sm text-black/50">You pay</p>
                <p className="font-medium text-5xl mt-1 text-black/90">$0.75</p>
                <NumQuestionsField
                    {...{numQuestions, setNumQuestions}}
                />
                <div className="h-full w-[3px] bg-black/10 rounded-full absolute top-0 right-0" />
            </div>
        </ModalBase>
    )
}