import { useContext, useState } from "react";
import ModalBase from "../Modals/ModalBase";
import { ModalContext } from "../Modals/ModalContext";
import HelpNav from "./HelpNav";
import HelpPage from "./HelpPage";

export default function HelpModal() {
    const { setHelpModalOpen } = useContext(ModalContext);
    const [pageIndex, setPageIndex] = useState<number>(0);

    return (
        <ModalBase 
            title="Help"
            close={() => {
                setHelpModalOpen(false);
                setPageIndex(0);
            }}
        >
            <div className="h-full w-full flex flex-col">
                <HelpPage index={pageIndex} />
                <HelpNav {...{setPageIndex, pageIndex}} />
            </div>
        </ModalBase>
    )
}