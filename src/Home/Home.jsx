import React from "react";
import './Home.css';
import Header from "../Header/Header";
import Products from "./Products/Products";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <>
            <Header />
            <Products />
            <Footer />
        </>
    );
}

export default Home;
