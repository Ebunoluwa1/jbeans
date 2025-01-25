import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { userReducer } from './cart'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        // user...
    }
})