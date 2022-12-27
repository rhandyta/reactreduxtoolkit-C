import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./Features/Shoes/shoesSlice";
import usersReducer from "./Features/Users/userSlice";
const store = configureStore({
    reducer: { shoes: shoesReducer, users: usersReducer },
});

export default store;
