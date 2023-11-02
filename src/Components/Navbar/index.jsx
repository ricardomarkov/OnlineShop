import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar= () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle= 'underline underline-offset-4'
    return (
        <nav className='backdrop-blur-3xl bg-gradient-to-r from-indigo-950 flex justify-between items-center  fixed z-10 w-full py-7 px-8 top-0 shadow-2xl text-sm font-light'>
            <ul className='flex items-center gap-3 text-white'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        OnlineShop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={()=> context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={()=> context.setSearchByCategory("electronics")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelry'
                    onClick={()=> context.setSearchByCategory("jewelery")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mens-clothing'
                    onClick={()=> context.setSearchByCategory("men's clothing")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/womens-clothing'
                    onClick={()=> context.setSearchByCategory("women's clothing")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Women's Clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    user@example.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Sign-in
                    </NavLink>
                </li>
                <li className='flex items-center'>
                <ShoppingBagIcon className="h-6 w-6 text-black"/>
                {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;