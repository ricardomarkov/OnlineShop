import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 bg-white border border-black rounded-lg `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-small text-s'>My Order</h2>
                <div>
                <XMarkIcon className='h-4 w-4 text-black cursor-pointer'
                onClick={()=>context.closeCheckoutSideMenu()}
                />
                </div>
            </div>
            <div className='px-6'>
            {
                context.cartProducts.map(product =>(
                    <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu