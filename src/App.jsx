import ReactDOM from "react-dom/client";
import * as React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Home/Home";
import Single from "./Home/Products/Product/Single/Single";
import Add from "./Home/Products/Product/Add/Add";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Single />} />
                <Route path="/product/add" element={<Add />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);