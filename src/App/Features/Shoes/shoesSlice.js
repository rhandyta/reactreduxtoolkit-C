import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: 50,
};

const shoes = createSlice({
    name: "shoes",
    initialState,
    reducers: {},
});

export default shoes.reducer;
