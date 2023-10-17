import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const valueAdded = action.payload
            if (state.cart.find(itm => itm.id === valueAdded.id)) {
              return state
            }
            return {
              ...state,
              cart: [...state.cart, valueAdded]
            }
        },
        deleteFromCart(state,action){
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
    }
})
export const selectAllCart = (state) => state.cart.cart;

export const {addToCart,deleteFromCart} = CartSlice.actions;

export default CartSlice.reducer