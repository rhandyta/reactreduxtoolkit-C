import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./Features/Shoes/shoesSlice";
const store = configureStore({
    reducer: { shoes: shoesReducer },
});

export default store;
