import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

type HelpNavProps = {
    setPageIndex: (_: (pageIndex: number) => number) => void,
    pageIndex: number
}

export default function HelpNav({ setPageIndex, pageIndex }: HelpNavProps) {
    const nextPage = () => {
        setPageIndex((currPageIndex) => {
            if (currPageIndex < 3) {
                return currPageIndex + 1;
            } else {
                return currPageIndex;
            }
        })
    }

    const prevPage = () => {
        setPageIndex((currPageIndex) => {
            if (currPageIndex > 0) {
                return currPageIndex - 1;
            } else {
                return currPageIndex;
            }
        })
    }

    return (
        <div className="flex w-full px-6 mt-4">
            {
                pageIndex > 0 &&
                <button 
                    onClick={prevPage}
                    className="text-black/90 mr-auto transition-all rounded-full py-[5px] pr-2 hover:bg-gray-300/90 flex font-medium"
                >
                    <ChevronLeftIcon className="h-6 text-black/50" />
                    Back
                </button>
            }
            {
                pageIndex < 3 &&
                <button
                    onClick={nextPage}
                    className="text-black/90 transition-all rounded-full py-[5px] pl-2 hover:bg-gray-300/90 ml-auto flex font-medium"
                >
                    Next
                    <ChevronRightIcon className="h-6 text-black/50" />
                </button>
            }
        </div>
    )
}