import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
                const existingPost = state.find(post => post.id === action.payload.id)
                if (existingPost) {
                    existingPost.cartCount++
                } else {
                    return [...state, action.payload]
                }
            },
            prepare(product) {
                return {
                    payload: { ...product, cartCount: 1 }
                }
            }
        },
        increment(state, action) {
            const getProduct = state.find(itm => itm.id === action.payload)
            if (getProduct) {
                getProduct.cartCount++
            } else {
                return state
            }
        },
        decrement(state, action) {
            const getProduct = state.find(itm => itm.id === action.payload)
            if (getProduct) {
                getProduct.cartCount--
                console.log(getProduct.cartCount);
            } else {
                return state
            }
        },
        removeFromCart(state, action) {
            return(state.filter((item) => item.id !== action.payload))
        },
        deleteFromCart(state, action) {
            return(state.filter((item) => item.id !== action.payload))
        }
    }
})
export const selectAllCart = (state) => state.cart;

export const { addToCart, deleteFromCart, increment, decrement,removeFromCart } = CartSlice.actions;

export default CartSlice.reducer 