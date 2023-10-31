import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if (index === 'last') index = context.order?.length - 1
    return (
    <Layout>
        <div className='flex w-80 relative items-center justify-center mb-4 mt-4 text-white'>
            <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-4 w-4 text-white cursor-pointer'/>
            </Link>
            <h1>
                My Order
            </h1>
        </div>
        <div className='flex flex-col w-auto bg-white rounded-lg'>
            {
                context.order?.[index]?.products.map(product =>(
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    />
                ))
            }
            </div>
    </Layout>
    )
}

export default MyOrder
