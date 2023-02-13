import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from '../images/empty-cart.png'
import { removeAll, removeItem } from "../redux/store/slice/cartSlice";

const Cart = () => {

    const items = useSelector(state => state.cart);
    const dispacth = useDispatch();
    const total = items.reduce((a, b) => a + b.price, 0)

    const removeHandler = (itemId) => {
        dispacth(removeItem(itemId))
    }
    const orderNowHandler = () => {
        alert("Order placed successfully!")
        dispacth(removeAll());
    }


    return (

        <>
            {items.length === 0 ? <img src={EmptyCart} className="mx-auto w-1/2 mt-12" alt="cart" /> :

                <div className="container mx-auto lg:w-1/2 w-full pb-24 p-5 md:p-0">
                    <h1 className="my-12 font-bold">Cart items</h1>
                    <ul>{
                        items.map((item, id) => {
                            return <li key={id} className="mb-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center  w-1/2 md:w-1/2 ">
                                        <img className="h-16" src={item.image} alt="pizaa" />
                                        <span className="font-bold text-xs md:text-base ml-2 md:ml-4 ">{item.name}</span>
                                    </div>
                                    {/* <div className="flex items-center justify-between">
                                        <button className="bg-amber-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none hover:bg-amber-600 text-white" > - </button>
                                        <b className="px-2 py-2 md:px-5 text-xs md:text-base"></b>
                                        <button className="bg-amber-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none hover:bg-amber-600 text-white" onClick={incrementHandler}> + </button>
                                    </div> */}
                                    <span className="text-xs md:text-base">₹ {item.price}</span>
                                    <button className="bg-red-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none text-white hover:bg-red-600 hover:text-white text-xs md:text-base" onClick={() => removeHandler(item._id)}>Delete</button>
                                </div>
                            </li>
                        })}
                    </ul>
                    <hr className="my-6" />
                    <div className="text-right text-xs md:text-base">
                        <b>Grand Total :</b> ₹ {total}
                    </div>
                    <div className=" w-full flex justify-between text-right mt-6">

                        <button className="bg-red-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none text-white hover:bg-red-500 text-xs md:text-base" onClick={() => dispacth(removeAll())}>Delete All</button>
                        <button className="bg-amber-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none text-white hover:bg-amber-600 text-xs md:text-base" onClick={orderNowHandler}>Order Now</button>
                    </div>
                </div>

            }
        </>

    )
};

export default Cart;
