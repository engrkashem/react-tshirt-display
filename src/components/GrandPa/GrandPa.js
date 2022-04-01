import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Unty from '../Unty/Unty'
import './GrandPa.css'

export const RingContext = createContext('Diamond')

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const handleBuyAHouse = () => {
        const newHouseNumber = house + 1;
        setHouse(newHouseNumber)
    }
    const ornament = 'Diamond Ring'

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h3>Grand PAA</h3>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy a House</button></p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Unty house={house}></Unty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;