import CharacterCount from "./CharacterCount";
import HelpButton from "./HelpButton";

type HeaderProps = {
    characterCount: number
}

export default function Header({ characterCount }: HeaderProps) {
    return (
        <div className="flex py-3 px-6 w-full z-10 sticky top-0 bg-gray-100 opacity-95">
            <h1 className="text-xl font-serif text-black/90 leading-6">Socratico</h1>
            <span className="ml-2 text-black/90">
                by 
                <a 
                    href="https://github.com/ericleonen"
                    className="ml-[6px] hover:text-ai-theme"
                >
                    Eric Leonen
                </a>
            </span>
            <CharacterCount value={characterCount} />
            <HelpButton />
        </div>
    );
}