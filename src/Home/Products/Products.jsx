import React, {useEffect, useState} from "react";
import './Products.css';
import Product from "./Product/Product";

function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        fetch('https://localhost:8000/api/produits.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }

    return (
        <>
            {products.map((post) => {
                return (
                    <Product data={post} />
                );
            })}
        </>
    );
}

export default Products;
