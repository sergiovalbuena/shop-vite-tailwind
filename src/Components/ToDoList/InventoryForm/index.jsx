import React from 'react'

export const InventoryForm = ({
    inputValue,
    setInputValue,
}) => {
  return (
    <form className="mt-6 sm:flex sm:items-center" action="#">
    <label htmlFor="inventory_item" className="sr-only">
        Enter item name
    </label>
    <div className="grid grid-cols-1 sm:flex-auto">
        <input
            type="text"
            name="inventory_item"
            id="inventory_item"
            className="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Enter items name"
            value={inputValue}
            onChange={(event) => {
                // console.log(event)
                // console.log(event.target)
                // console.log(event.target.value)
                setInputValue(event.target.value)
            }}
        />
        <div
            className="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600"
            aria-hidden="true"
        />
        <div className="col-start-2 row-start-1 flex items-center">
            <span className="h-4 w-px flex-none bg-gray-200" aria-hidden="true" />
            <label htmlFor="item_measure" className="sr-only">
                Quantity
            </label>
            <select
                id="item_measure"
                name="item_measure"
                className="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option>Grms</option>
                <option>Lts</option>
                <option>Kgs</option>
                <option>Boxes</option>
            </select>
        </div>

        
  
        
    </div>
    <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <button
            //type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={(event) => {
                event.preventDefault()
                // console.log('le diste click')
                // console.log(event)
                // console.log(event.target)
            }
            }
        >
            Add
        </button>
    </div>


    
</form>
  )
}
