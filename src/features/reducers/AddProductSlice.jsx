import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [{
        product: 1,
        price: 2,
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0uEPPDsxNc49uNHmmkKVJXQaRXQmGzDtcSrnzVEpdLzAiVHbFpQOhEGrj5DsCxJukBP4f7K8UTGiOjdjJiMwMEdH2pQNZygNu5A1-HOUN53AsATnqQSS57GtogGUrwd7I3KkxGVCHBbs&usqp=CAc',
        id: '1',
    }]
}
const AddProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: {
            reducer(state, action) {
                state.products.push(action.payload)
            }
        },
        updateProducts: {
            reducer(state, action) {
                const value = action.payload
                const product = state.products.map(itm => itm.id === value.id ? { ...itm, product: value.product, price: value.price, url: value.url} : itm)
                return {
                    ...state,
                    products: product
                }
            },
            prepare(product, price, url, id) {
                return {
                    payload: {
                        product, price, url, id
                    }
                }
            }
        },
        deleteProduct(state, action) {
            return {
                ...state,
                products: state.products.filter((item) => item.id !== action.payload)

            }
        },
    }
})

export const selectAllProduct = (state) => state.products.products;

export const { addProduct, updateProducts, deleteProduct } = AddProductSlice.actions;

export default AddProductSlice.reducer
