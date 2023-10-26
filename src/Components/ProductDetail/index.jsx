import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 mt-4 bg-white shadow-lg `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-small text-s'>{context.productToShow.title}</h2>
                <div>
                <XMarkIcon className='h-4 w-4 text-black cursor-pointer'
                onClick={()=>context.closeProductDetail()}
                />
                </div>
            </div>
            <figure className='plex justify-center items-center px-12'>
                <img className='w-full h-32 rounded-lg object-scale-down'
                src={context.productToShow.image}
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-4'>
                <span className='font-medium text-xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'></span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail