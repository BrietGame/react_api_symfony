import ReactDOM from "react-dom/client";
import * as React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Home/Home";
import Single from "./Home/Products/Product/Single/Single";
import Add from "./Home/Products/Product/Add/Add";
import './App.css';
import Login from "./Auth/Login/Login";
import Cart from "./Home/Products/Product/Cart/Cart";
import Register from "./Auth/Register/Register";

export default function App() {

    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Single />} />
                <Route path="/product/add" element={<Add />} />
                <Route path='/register' element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);