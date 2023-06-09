import { XMarkIcon } from "@heroicons/react/24/solid"

export const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderxMarkIcon
    if (handleDelete) {
      renderxMarkIcon =   <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
    }


    return (
        <div className="flex justify-between items-center mb-3">
          <div className='flex items-center gap-2'>
            <div className='w-20 h-20'>
              <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
            </div>
            <p className='text-sm font-light'>{title}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            {renderxMarkIcon}
          </div>
        </div>
      )
}


