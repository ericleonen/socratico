import { useContext } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";

export default function PayModal() {
    const { setPayModalOpen } = useContext(ModalContext);

    return (
        <ModalBase 
            title="Checkout"
            close={() => setPayModalOpen(false)}
        >
            hi
        </ModalBase>
    )
}