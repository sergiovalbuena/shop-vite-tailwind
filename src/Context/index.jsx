import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart - Count
    const [count, setCount] = useState(0)

    //Product Detail - Open and Close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false) 

    //Product Detail - Show Product 
    const [productToShow, setProductToShow] = useState({})

    console.log('COUNT:', count)


    return (
        <ShoppingCartContext.Provider value ={{
            count, 
            setCount, 
            openProductDetail,
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow, //leer la info
            setProductToShow, //enviar la info 
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
