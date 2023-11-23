type PriceCalculatorProps = {
    text: string,
    numQuestions: number
}

export function PriceCalculator({ text, numQuestions }: PriceCalculatorProps) {
    return (<>
        <p className="text-sm text-black/40 font-medium">Your total is</p>
        <p className="font-medium text-5xl mt-1 text-black/90">$0.75</p>
    </>)
}