import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =  createSlice({
    name:"Wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            console.log("Current wishlist", state);
            console.log("Adding wishlist ",action.payload);
            
            
            const existingProduct = state.find((item)=>item.id==action.payload.id)
            if(!existingProduct){
                state.push(action.payload)

            }
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer