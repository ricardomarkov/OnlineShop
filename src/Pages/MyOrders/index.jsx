import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import Layout from '../../Components/Layout'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (

    <Layout>
        <div className='flex w-80 relative items-center justify-center'>
            <h1>
                My Orders
            </h1>
        </div>
        {
            context.order.map((order, index)=>(
                <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}/>
                </Link>
                ))
        }
    </Layout>
    )
}

export default MyOrders
