import TextField from "./TextField";

type TextSectionProps = {
    text: string,
    setText: (text: string) => void
}

export default function TextSection({ text, setText }: TextSectionProps) {
    return (
        <div className="mt-6 flex w-[80%] px-20 h-min flex-grow bg-gray-50 border-[2px] border-b-0 shadow-sm">
            <TextField {...{text, setText}} />
        </div>
    );
}