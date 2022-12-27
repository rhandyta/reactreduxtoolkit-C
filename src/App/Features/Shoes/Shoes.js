import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyShoes } from "./shoesSlice";

function Shoes() {
    const shoes = useSelector((state) => state.shoes.stock);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock Shoes: {shoes}</h1>
            <button onClick={() => dispatch(buyShoes())}>Buy</button>
            <button>Reset Stock</button>
        </div>
    );
}

export default Shoes;
