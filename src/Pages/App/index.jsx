import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import SignIn from '../SignIn'
import NotFound from '../NotFound'

import './App.css'

import NavBar from '../../Components/NavBar'

//Router Funtion
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},

  ])
  return routes
}


const App = () =>  {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
