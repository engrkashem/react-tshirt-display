import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    /* 
    conditional rendering options:
    1) Element variable;
    2) Ternary Operator Condition ? true : false;
    3) && Operator (shorthand of 'if true')
    4) || Operator (shorthand of 'if false')
    */
    //Element variable option
    let conditionalMessage;
    if (cart.length === 0) {
        conditionalMessage = <p>Please Add at least one item</p>
    }
    else if (cart.length === 1) {
        conditionalMessage = <p>Please add more...</p>
    }
    else {
        conditionalMessage = <p>Thanks for adding items</p>
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(item => <p>
                    {item.name}
                    <button onClick={() => handleRemoveFromCart(item)}>X</button>
                </p>)
            }
            {
                cart.length === 0 || <p className='orange-color'>YeY... Tou are Buying</p>
            }
            {
                cart.length === 3 && <div className='orange-color'>
                    <h3>Trogonal</h3>
                    <p>Tin jon ke ki ki gift korba?</p>
                </div>
            }
            {conditionalMessage}
            {
                cart.length < 4 ? <p>Keep Adding</p> : <button>Remove all</button>
            }
        </div>
    );
};

export default Cart;