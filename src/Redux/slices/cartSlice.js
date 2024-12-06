import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        state.push({ ...product, quantity: 1, totalPrice: product.price });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      }
    },
    decrementCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      }
    },
    clearCart: (state) => {
      return [];
    }
  }
});

export const { addTocart, removeFromCart, incrementCart, decrementCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
