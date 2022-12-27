import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStock, buyShoes } from "./shoesSlice";

function Shoes() {
    const shoes = useSelector((state) => state.shoes.stock);
    const [addStockValue, setAddStockValue] = useState(0);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Stock Shoes: {shoes}</h1>
            <button onClick={() => dispatch(buyShoes())}>Buy</button>
            <p>
                <input
                    type="number"
                    name="addStockValue"
                    id="addStockValue"
                    onChange={(e) => setAddStockValue(e.target.value)}
                    value={addStockValue}
                />
                <button onClick={() => dispatch(addStock(addStockValue))}>
                    Add Stock
                </button>
            </p>
        </div>
    );
}

export default Shoes;
