import CharacterCount from "./CharacterCount";
import HelpButton from "./HelpButton";

type HeaderProps = {
    characterCount: number
}

export default function Header({ characterCount }: HeaderProps) {
    return (
        <div className="flex py-3 px-6 w-[75%] z-10 fixed bg-[whitesmoke] opacity-95">
            <h1 className="text-xl font-bold font-serif">Socratico</h1>
            <span className="ml-2">by ericleonen</span>
            <CharacterCount value={characterCount} />
            <HelpButton />
        </div>
    );
}