import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    products: []
}
const AddProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload)
        },
        updateProducts:{
           reducer(state, action) {
            const value = action.payload
            const product = state.products.map(itm=>itm.id===value.id ? {...itm,product:value.product,price:value.price,url:value.url}:itm)
            return{
                ...state,
                products: product
            }
           },
            prepare(product, price, url,id) {
                return {
                    payload: {
                        product,price,url,id
                    }
                }
            }
        },
        deleteProduct(state, action) {
            return{
                ...state,
                products: state.products.filter((item) => item.id !== action.payload)

            }
        },
    }
})

export const selectAllProduct = (state) => state.products.products;

export const { addProduct, updateProducts, deleteProduct } = AddProductSlice.actions;

export default AddProductSlice.reducer
