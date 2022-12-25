import React from "react";
import { useSelector } from "react-redux";

function Shoes() {
    const shoes = useSelector((state) => state.shoes.stock);
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock Shoes: {shoes}</h1>
            <button>Buy</button>
            <button>Reset Stock</button>
        </div>
    );
}

export default Shoes;
