import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from '../../Components/OrdersCard'


export default function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
         <Link to='/my-orders' className='absolute left-0'>
        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
      <h1>My Orders</h1>

      </div>

      {
        context.order.map((order, index) => {
          <Link key={index} to='my-orders/${order.id}'>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        })
      }

    </Layout>
  )
}
