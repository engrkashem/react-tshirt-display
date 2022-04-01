import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Unty = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>Unty</h4>
            <p>House: {house}</p>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Unty;