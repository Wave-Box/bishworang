
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Pagination({ setPage, paginate, page }) {
    const scroll = ()=> {
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    ;
    return (
        <div className=" px-4 py-3 flex items-center justify-between sm:px-6">
            {/* <div className="flex-1 flex justify-between sm:hidden">
                <p
                    onClick={() => paginate?.links?.prev ? setPage(paginate?.links?.prev) : null}
                    className={`${paginate?.links?.prev ? "cursor-pointer bg-white text-gray-700  hover:bg-gray-50" : "cursor-not-allowed opacity-50 "} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md `}
                >
                    Previous
                </p>
                <p
                    onClick={() => paginate?.links?.next ? setPage(paginate?.links?.next) : null}

                    className={`${paginate?.links?.next ? "cursor-pointer" : "cursor-not-allowed opacity-50"} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
                >
                    Next
                </p>
            </div> */}
            <div className=" flex-1 flex items-center justify-center">

                <div>
                    <nav className="relative z-0 inline-flex flex-wrap rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                        {
                            paginate?.meta?.links?.map((item, id) => {
                                return (
                                    <p key={id} onClick={() => {setPage(item?.url) ; scroll()}} aria-current="page" className={`${item?.active ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"} ${item?.url ? "cursor-pointer" : "cursor-not-allowed opacity-50"}  relative inline-flex items-center px-4 py-2 border text-sm font-medium`} > {item.label.includes('Previous') ? <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> : item.label.includes('Next') ? <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> : item?.label}
                                    </p>
                                )
                            })
                        }

                    </nav>
                </div>
            </div>
        </div>
    )
}
