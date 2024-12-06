import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './slices/wishlistSlice'
import cartReducer from './slices/cartSlice'
const cartStore = configureStore({
    reducer:{
            wishlist:wishlistReducer,
            cart:cartReducer
    }
})

export default cartStore