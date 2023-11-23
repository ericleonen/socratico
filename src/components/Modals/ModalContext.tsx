import { createContext } from "react";

type ModalContextType = {
    setPayModalOpen: (open: boolean) => void,
    setHelpModalOpen: (open: boolean) => void
}

export const ModalContext = createContext<ModalContextType>({
    setPayModalOpen: (open: boolean) => {},
    setHelpModalOpen: (open: boolean) => {}
});