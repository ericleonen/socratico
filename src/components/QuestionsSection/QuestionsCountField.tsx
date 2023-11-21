export default function QuestionsCountField() {
    return (
        <div className="flex">
            <span>How many questions?</span>
            <input 
                type="number" 
                value={5} 
                className="w-[50px] bg-transparent focus:outline-none ml-2"
            />
        </div>
    )
}