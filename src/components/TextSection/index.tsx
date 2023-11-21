import CharacterCount from "./CharacterCount";
import TextField from "./TextField";

type TextSectionProps = {
    text: string,
    setText: (text: string) => void
}

export default function TextSection({ text, setText }: TextSectionProps) {
    return (
        <div className="flex flex-grow flex-col w-full px-12 py-3">
            <CharacterCount />
            <TextField {...{text, setText}} />
        </div>
    );
}