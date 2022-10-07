import React, {useEffect, useState} from "react";
import './Products.css';
import Product from "./Product/Product";

function Products() {

    const [products, setProducts] = useState([]);
    const User = JSON.parse(sessionStorage.getItem('user'));
    const token = User.token;

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        console.log(User.token);
        fetch('https://localhost:8000/api/produits.json',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.map((post) => {
                            return (
                                <Product data={post} />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default Products;


