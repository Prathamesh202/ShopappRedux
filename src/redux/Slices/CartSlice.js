import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state,action) => {
            state.push(action.payload)  //argument passed in add() function is accessed using action.payload. Therefore here action.payload is post object which we want to add in cart
        },                              //That means if we do this deploy(add(arg)) which means => action.payload = arg
        remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);  // The value returned by reducer function is considered as new state 
        }
    }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;