import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: 50,
};

const shoes = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        buyShoes: (state) => {
            state.stock--;
        },
        addStock: (state, actions) => {
            state.stock = state.stock + parseInt(actions.payload);
        },
    },
});

export const { buyShoes, addStock } = shoes.actions;
export default shoes.reducer;
