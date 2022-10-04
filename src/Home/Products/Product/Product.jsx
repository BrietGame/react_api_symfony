import React, {useEffect, useState} from "react";
import './Product.css';
import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <div>
            <h2>{props.data.name}</h2>
            <span>{props.data.price}</span>
            <Link to={`/product/${props.data.id}`}>Voir le produit</Link>
        </div>
    );
}

export default Product;
