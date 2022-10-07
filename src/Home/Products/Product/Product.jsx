import React from "react";
import './Product.css';
import { Link } from 'react-router-dom'

function Product(props) {
    return (
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{props.data.name}</h5>
                {props.data.price}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <Link className="btn btn-outline-dark mt-auto" to={`/product/${props.data.id}`}>Voir le produit</Link>
            </div>
        </div>
    </div>
    );
}

export default Product;
