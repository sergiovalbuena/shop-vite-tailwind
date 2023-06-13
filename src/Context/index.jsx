import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}


export const ShoppingCartProvider = ({ children }) => {
    // My account
    const [account, setAccount] = useState({})

    // Sign out
    const [signOut, setSignOut] = useState(false)

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
    //console.log('COUNT:', count)
    //Shopping Cart - Order
    const [order, setOrder] = useState([])
    //Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
   // console.log('searchByTitle:', searchByTitle)
    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)


    //Craeting Local Storage




    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json()) // Convertir a JSON
          .then(data => setItems(data))
      }, [])


      const filteredItemsByTitle = (items, serachByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(serachByTitle.toLowerCase()))
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE') return filteredItemsByTitle(items, searchByTitle)
        if(searchType === 'BY_CATEGORY') return filteredItemsByCategory(items, searchByCategory)
        if(searchType === 'BY_TITLE_AND_CATEGORY') return filteredItemsByCategory(items, searchByTitle).filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
        if(!searchType) return items
    }


      useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy( 'BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy( 'BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory ) setFilteredItems(filterBy('BY_CATEGORY', items, searchByCategory, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])
      //console.log('filteredItems:', filteredItems)


   


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
            setSearchByTitle,
            filteredItems,
            searchByCategory, 
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
