import {useState} from 'react'
import { Layout } from '../../Components/Layout'


import { PlusIcon } from '@heroicons/react/20/solid'
import { PageHeader } from '../../Components/ToDoList/PageHeader'
import { InventoryForm } from '../../Components/ToDoList/InventoryForm'

const people = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: false
    },
    {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        name: 'Floyd Miles',
        role: 'Principal Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: false
    },
]


export const InventoryPage = () => {

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)


    return (
        <Layout>

            <div className="mx-auto max-w-md sm:max-w-3xl">
                <div>
                    <PageHeader/>   
                   <InventoryForm
                   inputValue={inputValue}
                   setInputValue={setInputValue}
                   />
                </div>
                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-500">Added items</h3>
                    <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {people.map((person, personIdx) => (
                            <li key={personIdx}>
                                <button
                                    type="button"
                                    className={`group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm ${person.completed ? 'hover:bg-gray-50' : 'hover:bg-pink-400'}   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                >
                                    <span className="flex min-w-0 flex-1 items-center space-x-3">
                                        <span className="block flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                        </span>
                                        <span className="block min-w-0 flex-1">
                                            <span className={`block truncate text-sm font-medium ${person.completed ? 'text-green-400' : 'text-orange-200'} `} >{person.name}</span>
                                            <span className="block truncate text-sm font-medium text-gray-500">{person.role}</span>
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
