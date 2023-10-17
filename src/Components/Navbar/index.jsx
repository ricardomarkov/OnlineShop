import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar= () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle= 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center  fixed z-10 w-full py-5 px-8 top-0 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        OnlineShop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({ isActive }) =>
                    isActive ? activeStyle : ""
                    }>
                        Others
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
                {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;