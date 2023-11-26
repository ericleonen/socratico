import { formatPrice } from "../../../../utils/format"

type PayButtonProps = {
    disabled: boolean,
    totalPrice: number
}

export default function PayButton({ disabled, totalPrice }: PayButtonProps) {
    return (
        <button 
            disabled={disabled}
            type="submit"
            className="w-full mt-6 bg-black/90 shadow-sm rounded-md text-gray-200/90 font-medium py-2 hover:bg-black/80"
        >
            Pay {formatPrice(totalPrice)}
        </button>
    );
}