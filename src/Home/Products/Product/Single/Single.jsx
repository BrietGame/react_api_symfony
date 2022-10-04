import React, {useEffect, useState} from "react";
import './Single.css';
import {useParams} from "react-router-dom";

function Single() {

    const [product, setProduct] = useState('');
    const { productId } = useParams()
    useEffect(() => {
        fetch('https://localhost:8000/api/produits/' + productId + '.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    }, []);

    return (
        <>
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <span>Page single</span>
        </>
    );
}

export default Single;
