import React, { useState } from 'react';
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

function ProductQuantity(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () =>{
        if (count > 0){
            setCount(count - 1)            
        }
    }

    return (
        <div>
            <FaChevronCircleDown onClick={decrement} />
            <span> {count} </span>
            <FaChevronCircleUp onClick={increment} />
        </div>
    );
}

export default ProductQuantity

