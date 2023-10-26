import {PlusCircleIcon, CheckCircleIcon}  from '@heroicons/react/24/solid'
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
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length>0
        if(isInCart){
            return(
                <div
                        className='bg-white absolute -top-6 right-2 justify-center items-center w-6 h-6 rounded-full m-2 p-0'>
                            <CheckCircleIcon className='h-6 w-6 text-green-400'/>
                        </div>
            )
        }else{
            return(
                <div
                    className='absolute bg-white -top-6 right-2 items-center w-6 h-6 rounded-full m-2 p-0 group-hover:animate-bounce'
                    onClick={(event) => {
                    addProductsToCart(event, data.data)
                    }}>
                    <PlusCircleIcon className='h-6 w-6 text-black group-hover:animate-bounce'/>
                </div>
            )
        }
    }

    return(
        <div
        className='group cursor-pointer bg-white w-56 h-60 shadow-2xl rounded-lg'
        onClick={()=>showProduct(data.data)}>
            <figure className='relative mt-8 mb-2 w-full h-3/5'>
                <span className='absolute -top-8 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5 invisible group-hover:visible animate-bounce'>{data.data.category}</span>
                <img className='w-full h-full object-scale-down rounded-lg group-hover:animate-pulse' src={data.data.image} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='truncate md:text-ellipsis content-stretch group flex flex-col text-center'>
                <span className='text-lg font-light group-hover:font-medium '>{data.data.title}</span>
                <span className='invisible text-xl font-medium group-hover:visible'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card