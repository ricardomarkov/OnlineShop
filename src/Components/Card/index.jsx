import {PlusCircleIcon}  from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) =>{
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (event, productData)=>{
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.addCartProducts([...context.cartProducts,productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('CART: ',context.cartProducts)
    }
    return(
        <div 
        className='flex-col items-center bg-white cursor-pointer w-32 h-32 mb-24'
        onClick={()=>showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-full'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                    <img className='ml-6 w-3/4 h-3/4 rounded-lg object-scale-down' src={data.data.image} alt='product-image' />
                    <div
                    className='absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full p-0.5'
                    onClick={(event) => {
                        addProductsToCart(event, data.data)
                    }}>
                        <PlusCircleIcon/>
                    </div>
            </figure>
            <p className='flex justify-center'>
                <span className='grow text-xs font-light'>{data.data.title}</span>
                <span className='flex-none text-sm font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card