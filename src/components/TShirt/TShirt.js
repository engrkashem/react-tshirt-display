import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const { tShirt } = props
    const { img, price, name, } = tShirt
    return (
        <div className='tshirt-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: <span>${price}</span></p>
            {props.children}
        </div>
    );
};

export default TShirt;