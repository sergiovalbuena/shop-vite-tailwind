import { createContext, useState, useEffect } from "react"

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

    //Get Products
    const [items, setItems] = useState(null)

    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState('')
    console.log('searchByTitle:', searchByTitle)


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json()) // Convertir a JSON
          .then(data => setItems(data))
      }, [])



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
            setOrder, 
            items, 
            setItems, 
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
