import CharacterCount from "./CharacterCount";
import HelpButton from "./HelpButton";

type HeaderProps = {
    characterCount: number
}

export default function Header({ characterCount }: HeaderProps) {
    return (
        <div className="flex px-6 py-3 w-full items-center relative shadow-md z-10">
            <h1 className="text-xl font-bold">Socratico</h1>
            <span className="ml-2">by ericleonen</span>
            <CharacterCount value={characterCount} />
            <HelpButton />
        </div>
    );
}