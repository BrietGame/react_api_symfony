import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Register() {

    const [register, setRegister] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const addRegister = async () => {
        if (password === passwordConfirm) {
            await fetch('https://localhost:8000/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                headers: {
                    'Content-type': 'multipart/form-data; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setRegister((posts) => [data, ...posts]);
                    setEmail('');
                    setPassword('');
                    setPasswordConfirm('');
                    console.log(data);
                    navigate('/login');
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addRegister();
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" className="form-control" value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <input type="password" className="form-control" value={passwordConfirm}
                       onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
