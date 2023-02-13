import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import Cart from '../images/cart.png'
import Logo from '../images/logo.png'

const Navigation = () => {

    const items = useSelector(state => state.cart);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-center py-4 px-4 md:px-0 justify-between">
                <Link to='/'>
                    <img style={{ height: '45px' }} src={Logo} alt="logo"></img>
                </Link>
                <ul className="flex items-center justify-between text-sm md:text-base">
                    <li className='ml-6'><Link to='/' className="hover:text-amber-500">Home</Link></li>
                    <li className='ml-6'><Link to='/products' className="hover:text-amber-500">Products</Link></li>
                    <li className='ml-6'>
                        <Link to='/cart'>
                            <div className='flex py-2 px-5  items-center rounded-full text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white'>
                                <span className="text-sm md:text-base">{items.length}</span>
                                <img className='ml-2' src={Cart} alt='cart-icon' />
                            </div>
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    )
};

export default Navigation;
