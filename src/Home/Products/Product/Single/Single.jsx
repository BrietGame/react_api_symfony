import React, {useEffect, useState} from "react";
import './Single.css';
import { useLocation } from "react-router-dom";
import RelatedProducts from "./Related/RelatedProducts";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import AddCart from "../Cart/Add/AddCart";

function Single(props) {
    const sampleLocation = useLocation();
    const [product, setProduct] = useState('');
    const User = JSON.parse(sessionStorage.getItem('user'));
    const token = User.token;

    useEffect(() => {
        const idProduct = sampleLocation.pathname.split('/')[2];
        fetch('https://localhost:8000/api/produits/' + idProduct + '.json',
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
                setProduct(data);
            });
    }, []);


    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                                                       src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                                                       alt="..."/></div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">{product.price}</span>
                                <span>{product.price}</span>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at
                                dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus
                                eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1"/>
                                <AddCart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProducts />
            <Footer />
        </>
    );
}

export default Single;
