import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    users: [],
    error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data)
        .catch((err) => err.message);
});

const users = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });
    },
});

export default users.reducer;
