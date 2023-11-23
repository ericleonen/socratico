import Image from "next/image";

type HelpPageProps = {
    index: number
}

export default function HelpPage({ index }: HelpPageProps) {
    const instructions = [
        "Paste your text in the document on the left",
        "Hit \"Generate\" on the right",
        "Specify how many questions you want and make the payment",
        "Answer the AI generated questions and copy your answers with the top-right button"
    ];

    return (
        <div className="w-full px-6 flex items-center flex-col">
            <p className="mb-4 font-medium px-6 flex"><span className="text-black/50 mr-1">{index + 1}.</span> {instructions[index]}</p>
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