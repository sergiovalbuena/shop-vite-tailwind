import {useState} from 'react'
import { Layout } from '../../Components/Layout'



import { PageHeader } from '../../Components/ToDoList/PageHeader'
import { InventoryForm } from '../../Components/ToDoList/InventoryForm'
import { InventoryList } from '../../Components/ToDoList/InventoryList'
import { InventoryItem } from '../../Components/ToDoList/InventoryItem'

const inventory = [
    {
        id: 1,
        name: 'Carnitas',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        id: 2,
        name: 'Birria de res',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: false
    },
    {
        id: 3,
        name: 'Churros',
        role: 'Boxes',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Baja Fish',
        role: 'Boxes',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        id: 5,
        name: 'Tinga de Pollo',
        role: 'grms',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        completed: true
    },
    {
        id: 6,
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


    //funcion para marcar como completado recibe un parametro id
    const itemChecked = (id ) => {
        //creamos una copia del [estado]
        const newInventoryItems = [...inventoryItems] 
        //buscamos el indice del item que queremos marcar como completado
        const itemIndex = newInventoryItems.findIndex((item) => item.id === id) 
        //cambiamos el estado del item
        newInventoryItems[itemIndex].completed = !newInventoryItems[itemIndex].completed 
        //actualizamos el estado
        setInventoryItems(newInventoryItems)
    }

    const deleteItem = (id) => {
        const newInventoryItems = [...inventoryItems]
        const itemIndex = newInventoryItems.findIndex((item) => item.id === id)
        newInventoryItems.splice(itemIndex, 1)
        setInventoryItems(newInventoryItems)
    }


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
                
                <InventoryList>
                {searchedItems.map((item) => (

                    <InventoryItem
                        key={item.id}
                        name={item.name}
                        role={item.role}
                        imageUrl={item.imageUrl}
                        completed={item.completed}
                        onCompleted={() => itemChecked(item.id)}
                        onDeleted={() => deleteItem(item.id)}
                    />
                ))}

                </InventoryList>

            </div>
        </Layout>
    )
}
