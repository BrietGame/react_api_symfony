import React, { useState, useEffect } from 'react';
const App = () => {
    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
// ...
    const addPosts = async (title, body) => {
        await fetch('https://localhost:8000/api/produits/add', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                price: price,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProduct((posts) => [data, ...posts]);
                setName('');
                setPrice('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, price);
    };

    return (
        <div className="app">
            <div className="add-post-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" className="form-control" value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                    <button type="submit">Add Post</button>
                </form>
            </div>
            {/* ... */}
        </div>
    );
};

export default App;
