import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt'
import './Home.css'

const Home = () => {

    const [tShirts, setTShirts] = useTShirts();

    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt.id === selectedItem.id)
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item already added');
        }

    };

    const handleRemoveFromCart = (selectedTShirt) => {
        const restItem = cart.filter(tShirt => tShirt.id !== selectedTShirt.id);
        setCart(restItem);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt.id}
                        tShirt={tShirt}
                    ><button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;