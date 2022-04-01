import { useEffect, useState } from "react";

const useTShirts = () => {

    const [tShirts, setTShirt] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setTShirt(data))
    }, [])

    return [tShirts, setTShirt];
}

export default useTShirts;