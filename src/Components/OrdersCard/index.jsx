import { ChevronRightIcon } from "@heroicons/react/24/solid"

export const OrdersCard = props => {
    const {totalPrice, totalProducts} = props
 

    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                <span className="font-light">01.02.2023</span>
                <span className="font-light">{totalProducts} Articles</span>
                </p>
                <p className="flex otems-center gap-2 ">
                <span className="font-medium text-2xl">$ {totalPrice}</span>
                <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer mt-1" />                 
                </p>
            </div>
        </div>
      )
}


