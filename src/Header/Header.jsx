import React from "react";
import './Header.css';
import Menu from "./Menu/Menu";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <Menu />
            <div className="row">
                <div className="col">
                    <Link to="/product/add">Ajouter un produit</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
