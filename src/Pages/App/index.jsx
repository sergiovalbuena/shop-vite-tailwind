import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

import RickAndMortyCharacters from '../rickandmorty'

import './App.css'

import NavBar from '../../Components/NavBar'
import { InventoryPage } from '../Inventory'

//Router Funtion
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/inventory', element: <InventoryPage /> },
    { path: 'rickandmorty', element: <RickAndMortyCharacters /> },
    { path: '/*', element: <NotFound /> },

  ])
  return routes
}


const App = () => {
  return (
    <ShoppingCartProvider>

      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
      
    </ShoppingCartProvider>
  )
}

export default App
