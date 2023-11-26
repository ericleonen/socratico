import { roundInK } from "../../../utils/format"

type CharacterCountProps = {
    value: number
}

export default function CharacterCount({ value }: CharacterCountProps) {
    return value > 0 && (
        <p className="text-black/50 absolute left-1/2 translate-x-[-50%]">{roundInK(value)} character{value == 1 ? "" : "s"}</p>
    )
}