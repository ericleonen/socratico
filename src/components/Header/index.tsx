import HelpButton from "./HelpButton";

export default function Header() {
    return (
        <div className="flex px-6 py-3 w-full items-center">
            <h1 className="text-xl font-bold">Socratico</h1>
            <span className="ml-2">by ericleonen</span>
            <HelpButton />
        </div>
    );
}