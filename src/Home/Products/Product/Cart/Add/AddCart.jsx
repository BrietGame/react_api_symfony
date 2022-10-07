import React, {useState} from "react";
import { useLocation } from "react-router-dom";

function AddCart() {

    const sampleLocation = useLocation();
    // TODO: Récupérer l'id de l'utilisateur connecté
    const User = JSON.parse(sessionStorage.getItem('user'));
    const token = User.token;
    const userId = User.user.id;

    const [cart, setCart] = useState([]);

    const addProductIntoCart = async () => {
        await fetch('https://localhost:8000/api/cart/add', {
            method: 'POST',
            body: JSON.stringify({
                userId: {
                    id: userId
                },
                produits: [
                    {
                        id: 1
                    }
                ]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            },
        })
            .then((response) => response.json())
            .then(
                (data) => {
                    setCart((posts) => [data, ...posts]);
                }
            )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProductIntoCart(userId);
    }

    return (
        <button onClick={handleSubmit}>
            <i className="bi-cart-fill me-1"></i>
            Add to cart</button>
    )
}

export default AddCart;