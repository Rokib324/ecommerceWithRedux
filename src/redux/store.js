import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/products/productSlice.js'
import cartReducer from './features/carts/cartSlice.js'
const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer
    }
})
export default store