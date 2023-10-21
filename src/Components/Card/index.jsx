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
        className='group flex-col bg-white cursor-pointer w-full h-28 mb-24'
        onClick={()=>showProduct(data.data)}>
            <figure className='justify-items-center relative mb-2 px-8 w-full h-full '>
                <span className='absolute p-2 text-center inset-x-0 -top-6 bg-black/20 rounded-lg text-black text-xs capitalize py-0.5 invisible group-hover:visible'>{data.data.category}</span>
                    <img className='my-8 px-8  h-full w-full max-w-lg rounded-lg object-contain' src={data.data.image} alt='product-image' />
                    <div
                    className='absolute top-0 right-0 items-center bg-white w-6 h-6 rounded-full p-0.5'
                    onClick={(event) => {
                        addProductsToCart(event, data.data)
                    }}>
                        <PlusCircleIcon/>
                    </div>
            </figure>
            <p className='group flex'>
                <span className='basis-36 text-xs font-light group-hover:font-semibold text-ellipsis group-hover: '>{data.data.title}</span>
                <span className='invisible text-sm font-medium group-hover:visible'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card