import { useContext } from "react";
import { ModalContext } from "../Modals/ModalContext";

export default function HelpButton() {
    const { setHelpModalOpen } = useContext(ModalContext);

    return (
        <button
            onClick={() => setHelpModalOpen(true)} 
            className="text-black/90 hover:cursor-help ml-auto transition-all rounded-full py-[5px] px-2 hover:bg-gray-300/90"
        >
            Help
        </button>
    );
}