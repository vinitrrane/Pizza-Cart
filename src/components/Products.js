import React, { useState, useEffect } from "react";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {

            const res = await fetch('https://star-spark-pasta.glitch.me/api/products');

            if (!res.ok) {
                throw new Error('something went wrong')
            }
            else {
                const products = res.json();
                return products;
            }
        }

        getProducts()
            .then(products => setProducts(products))
            .catch(error => console.log(error))

    }, []);


    return (

        <div className='container mx-auto pb-24 p-5 md:p-0'>
            <h1 className='text-lg font-bold my-8'>Products</h1>
            <div className='grid grid-cols-2 my-8 gap-24 md:grid-cols-5'>
                {products.map(product => <Product key={product._id} product={product} />)}
            </div>
        </div>

    )
};

export default Products;
