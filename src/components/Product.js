import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/store/slice/cartSlice"

const Product = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);


    let [isAdding, setIsAdding] = useState(false);


    const addToCart = (e, props) => {

        e.preventDefault();


        dispatch(addItem(props.product))

        setTimeout(() => {
            setIsAdding(false);
        }, 1000)

        setIsAdding(true);

    }

    return (
        <Link to={`/products/${props.product._id}`}>
            <div>
                <img src={props.product.image} alt='pizza' />
                <div className="text-center">
                    <h2 className='text-sm md:text-lg font-bold py-2'>{props.product.name}</h2>
                    <span className='bg-gray-200 rounded-full text-sm py-1 px-4'>{props.product.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹ {props.product.price}</span>
                    <button className={`py-1 px-4 rounded-full text-sm font-bold hover:bg-amber-600 text-white  ${isAdding ? 'bg-green-500' : 'bg-amber-500'}`}
                        disabled={isAdding}
                        onClick={(e) => { addToCart(e, props) }}>ADD{isAdding ? 'ED' : ''}</button>
                </div>
            </div>
        </Link>
    )
};

export default Product;
