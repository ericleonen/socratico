import Image from "next/image";
import { helpInstructions } from "../../../params/help";

type HelpPageProps = {
    index: number
}

export default function HelpPage({ index }: HelpPageProps) {
    return (
        <div className="w-full px-6 flex items-center flex-col">
            <p className="mb-4 font-medium px-6 flex"><span className="text-black/50 mr-1">{index + 1}.</span> {helpInstructions[index]}</p>
            <Image 
               src={`/socratico_help_${index}.png`}
               height={940}
               width={1919}
               alt="Location of text document"
               className="shadow-md"
            />
        </div>
    )
}