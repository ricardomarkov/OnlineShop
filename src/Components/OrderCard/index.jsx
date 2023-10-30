import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props =>{
    const { id, title, imageUrl, price, handleDelete} =  props
    let renderXMarkIcon
    if(handleDelete){
        <XMarkIcon onClick={() => handleDelete(id)} className='h-4 w-4 text-black cursor-pointer'/>
    }

    return(
        <div className='flex justify-between items-center mb-3 '>
            <div className='flex items-center gap-2'>
                <figure className='w-12 h-20'>
                    <img className='w-full h-full rounded-lg object-contain' src={imageUrl} alt={title} />
                </figure>
                <p className='text-xs font-extralight'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-medium'>${price}</p>
            {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard