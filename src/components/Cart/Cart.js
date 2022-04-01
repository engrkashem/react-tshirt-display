import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(item => <p>
                    {item.name}
                    <button onClick={() => handleRemoveFromCart(item)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;