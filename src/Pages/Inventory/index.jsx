import {useState} from 'react'
import { Layout } from '../../Components/Layout'


import { PlusIcon } from '@heroicons/react/20/solid'
import { PageHeader } from '../../Components/ToDoList/PageHeader'
import { InventoryForm } from '../../Components/ToDoList/InventoryForm'

const inventory = [
    {
        name: 'Carnitas',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Birria de res',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: false
    },
    {
        name: 'Churros',
        role: 'Boxes',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Baja Fish',
        role: 'Boxes',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Tinga de Pollo',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Tortillas Home 12"',
        role: 'Bags/Lbs',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: false
    },
]


export const InventoryPage = () => {

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    const [inventoryItems, setInventoryItems] = useState(inventory)

    //estado derivado
    const completedItems = inventoryItems.filter(item => !!item.completed).length
    const totalItems = inventoryItems.length


    //buscador 
    const searchedItems = inventoryItems.filter((item) => {
        //return item.name.toLowerCase().includes(inputValue.toLowerCase())
        const inventoryItem = item.name.toLowerCase()
        const searchText = inputValue.toLowerCase()
        return inventoryItem.includes(searchText)
    })


    return (
        <Layout>

            <div className="mx-auto max-w-md sm:max-w-3xl">
                <div>
                    <PageHeader
                        completedItems={completedItems}
                        totalItems={totalItems}
                    />   
                   <InventoryForm
                   inputValue={inputValue}
                   setInputValue={setInputValue}
                   />
                </div>
                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-500">Added items</h3>
                    <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {searchedItems.map((item, itemIdx) => (
                            <li key={itemIdx}>
                                <button
                                    type="button"
                                    className={`group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm ${item.completed ? 'hover:bg-gray-50' : 'hover:bg-pink-400'}   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                >
                                    <span className="flex min-w-0 flex-1 items-center space-x-3">
                                        <span className="block flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={item.imageUrl} alt="" />
                                        </span>
                                        <span className="block min-w-0 flex-1">
                                            <span className={`block truncate text-sm font-medium ${item.completed ? 'text-green-400' : 'text-orange-200'} `} >{item.name}</span>
                                            <span className="block truncate text-sm font-medium text-gray-500">{item.role}</span>
                                        </span>
                                    </span>
                                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                                        <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
