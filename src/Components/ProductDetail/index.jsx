import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';


export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log('PRORUCT TO SHOW:', context.productToShow)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div
            className='cursor-pointer'
            onClick={()=> context.closeProductDetail()}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </div>

        </div>
    </aside>
  )
}
