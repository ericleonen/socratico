import { XMarkIcon } from "@heroicons/react/24/solid";
import Shadow from "./Shadow";
import ModalHeader from "./ModalHeader";

type ModalBaseProps = {
    title: string,
    close: () => void,
    children: React.ReactNode
}

export default function ModalBase({ title, close, children }: ModalBaseProps) {
    return (
        <Shadow close={close} >
            <div className="bg-gray-200 rounded-md w-min min-w-[40rem] shadow-md overflow-hidden pb-6 flex flex-col">
                <ModalHeader {...{title, close}} />
                <div className="flex grow w-full p-6">
                    {children}
                </div>
            </div>
        </Shadow>
    )
}