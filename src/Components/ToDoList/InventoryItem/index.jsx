import { PlusIcon } from '@heroicons/react/20/solid'

export const InventoryItem = ({imageUrl, completed, name, role }) => {
  return (
        <li>
            <button
                type="button"
                className={`group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm ${completed ? 'hover:bg-gray-50' : 'hover:bg-pink-400'}   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                    <span className="block flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
                    </span>
                    <span className="block min-w-0 flex-1">
                        <span className={`block truncate text-sm font-medium ${completed ? 'text-green-400' : 'text-orange-200'} `} >{name}</span>
                        <span className="block truncate text-sm font-medium text-gray-500">{role}</span>
                    </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                    <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </span>
            </button>
        </li>
  )
}
