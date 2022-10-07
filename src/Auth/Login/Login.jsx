import React, {useState} from 'react';
import {redirect, useNavigate} from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Login() {

    const [login, setLogin] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const addLogin = async () => {
        await fetch('https://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setLogin((posts) => [data, ...posts]);
                setEmail('');
                setPassword('');
                setToken(data.token);
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
                navigate('/');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    // const getUserFromToken = token => {
    //     if (token) {
    //         const base64Url = token.split('.')[1];
    //         const base64 = base64Url.replace('-', '+').replace('_', '/');
    //         return JSON.parse(window.atob(base64));
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addLogin();
    }

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <input type="email" className="form-control" value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign in</button>
            </form>
            <Footer />
        </>
    )
}

export default Login;