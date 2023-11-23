import { XMarkIcon } from "@heroicons/react/24/solid";

type ModalHeaderProps = {
    title: string,
    close: () => void
}

export default function ModalHeader({ title, close }: ModalHeaderProps) {
    return (
        <div className="flex py-3 justify-center bg-black/90 relative">
            <h3 className="font-medium text-gray-200/90">{title}</h3>
            <button 
                onClick={close}
                className="top-1/2 translate-y-[-50%] transition-all opacity-90 absolute right-3 text-gray-200/70 rounded-full p-[5px] flex justify-center items-center hover:bg-gray-200/10"
            >
                <XMarkIcon className="h-5 w-5"/>
            </button>
        </div>
    );
}