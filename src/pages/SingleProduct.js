import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/store/slice/cartSlice"

const SingleProduct = () => {

    const [product, setProduct] = useState([]);
    let [isAdding, setIsAdding] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        const getProduct = async () => {

            const res = await fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)

            if (!res.ok) {
                throw new Error('something went wrong')
            }
            else {
                const product = res.json();
                return product;
            }
        }

        getProduct()
            .then(product => setProduct(product))
            .catch(error => console.log(error))
        // issue
    }, [params._id])


    const addToCart = (e, props) => {

        e.preventDefault();

        dispatch(addItem(product))

        setTimeout(() => {
            setIsAdding(false);
        }, 1000)

        setIsAdding(true);

    }

    return (
        <div className="container mx-auto mt-12 p-5 md:p-0">
            <button className="mb-12 font-bold" onClick={() => { navigate(-1) }}>Back</button>
            <div className="flex flex-col md:flex-row">
                <img src={product.image} alt="pizza-img" />
                <div className="md:ml-16 text-center">
                    <h1 className="text-md md:text-xl font-bold">{product.name}</h1>
                    <div className="mt-2">
                        <span className=" bg-gray-200 rounded-full text-sm py-1 px-4">
                            {product.size}
                        </span>
                    </div>
                    <div className="font-bold mt-2">₹ {product.price}</div>
                    <button className={`mt-2 py-1 px-4 rounded-full text-sm font-bold hover:bg-amber-600 text-white ${isAdding ? 'bg-green-500' : 'bg-amber-500'}`}
                        disabled={isAdding}
                        onClick={addToCart}>{isAdding ? 'ADDED' : 'Add to cart'}</button>
                </div>
            </div>
        </div>
    )
};

export default SingleProduct;
