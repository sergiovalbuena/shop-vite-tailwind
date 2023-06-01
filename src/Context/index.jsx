import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    //Product Detail - Open and Close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Chackout Side Menu  - Open and Close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)



    //Product Detail - Show Product 
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Count
    const [count, setCount] = useState(0)
    //Shoopping Cart - Add Products to cart
    const [cartProducts, setCartProducts] = useState([])
    console.log('COUNT:', count)

    //Shopping Cart - Order
    const [order, setOrder] = useState([])



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow, //leer la info
            setProductToShow, //enviar la info
            cartProducts,
            setCartProducts, 
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
