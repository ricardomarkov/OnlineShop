import {PlusCircleIcon}  from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) =>{
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    return(
        <div 
        className='bg-white cursor-pointer w-40 h-52'
        onClick={()=>showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                    <img className='w-full h-full rounded-lg object-scale-down' src={data.data.image} alt='product-image' />
                    <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => {
                        e.stopPropagation();
                        context.setCount(context.count + 1)
                    }}>
                        <PlusCircleIcon/>
                    </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-sm font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card