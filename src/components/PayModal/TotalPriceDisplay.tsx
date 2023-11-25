import { formatPrice } from "../../../utils/format";

type TotalPriceDisplayProps = {
    totalPrice: number
}

export default function TotalPriceDisplay({ totalPrice }: TotalPriceDisplayProps) {
    return (<>
        <p className="text-sm text-black/40 font-medium">Your total is</p>
        <p className="font-medium text-5xl mt-1 text-black/90">{formatPrice(totalPrice)}</p>
    </>)
}