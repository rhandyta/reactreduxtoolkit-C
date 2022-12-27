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
    },
});

export const { buyShoes } = shoes.actions;
export default shoes.reducer;
