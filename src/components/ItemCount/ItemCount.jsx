import { useState } from "react";

const ItemCount = ({initial=1, stock, onAdd }) => {
    
    const [count, setCount] = useState(initial);    
    
    const increment = () => {
        if (count < stock) {
        setCount(prev=> prev + 1);
        }
    };    
    
    const decrement = () => {
        if (count > 1) {
            setCount(prev=> prev - 1);
            }
    };    
    
    return (
        <div className="item-count">
        <div className="controls">
            <button className="button" onClick={decrement}>-</button>
            <h4 className="number">{count}</h4>
            <button className="button" onClick={increment}>+</button>
        </div>
        <div>
            <button className="button" onClick={() => onAdd(count)} disabled={!stock}>
            Agregar al carrito
            </button>
        </div>
        </div>
    );
};



export default ItemCount;