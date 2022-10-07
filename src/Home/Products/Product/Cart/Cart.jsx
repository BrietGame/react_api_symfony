import React, {useEffect, useState} from "react";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";

function Cart() {
    var idUser = sessionStorage.getItem("user");
    const [cart, setCart] = useState([]);
    useEffect(() => {
        return () => {
            console.log(idUser);
        };
    }, []);

    function getCartByIdUser() {
        fetch('https://localhost:8000/api/cart/' + idUser + '.json')
            .then((response) => response.json())
            .then(
                (data) => {
                    setCart(data);
                }
            )
    }

    return (
        <>
            <Header />
            <h1>Cart</h1>
            {
                cart.map((post) => {
                    return (
                        <div>
                            <p>{post.userId}</p>

                        </div>
                    );
                })
            }
            <Footer />
        </>
    )
}

export default Cart;