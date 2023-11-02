import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.addCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '10.25.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.addOrder([...context.order,orderToAdd])
        context.addCartProducts([])
        context.setSearchByTitle(null)
    }
    return (
        <aside
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 mt-4 bg-white shadow-2xl`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-small text-s'>My Order</h2>
                <div>
                <XMarkIcon className='h-4 w-4 text-black cursor-pointer'
                onClick={()=>context.closeCheckoutSideMenu()}
                />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product =>(
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center text-xl mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button disabled={context.cartProducts.length === 0} onClick={()=>handleCheckout()} className='bg-black py-3 w-full text-white rounded-lg mb-6'>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu