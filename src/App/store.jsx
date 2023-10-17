import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/reducers/CartSlice'
import ProductReducer from "../features/reducers/AddProductSlice";

export const store = configureStore({
    reducer: {
        products:ProductReducer,
        cart: CartReducer
    }
})