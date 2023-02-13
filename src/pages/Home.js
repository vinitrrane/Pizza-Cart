import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../images/pizza.png'



const Home = () => {
    return (
        <>
            <div className='hero py-16'>
                <div className='container mx-auto flex flex-col justify-between items-center md:flex-row md:justify-between'>

                    <div className='md:w-full w-full flex flex-col my-5 justify-between items-stretch text-center md:text-start' >
                        <h6 className='text-lg mb-5'><em>Are you hungry ?</em></h6>
                        <h1 className='text-3xl md:text-6xl font-bold mb-5'>Don't Wait !</h1>
                        <Link to="/products">
                            <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-amber-500 hover:bg-amber-600'>Order Now</button>
                        </Link>

                    </div>
                    <div className='md:w-full w-full my-5 p-5 md:p-0'>
                        <img src={Pizza} className='w-full md:w-4/5 ' alt='pizza' />
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;
