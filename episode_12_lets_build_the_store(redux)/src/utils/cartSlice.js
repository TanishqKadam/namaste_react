import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart', //name of the cart slice
    initialState:{  //initial state of cart (initial state is obje)
        items:[]
    },
    reducers:{
        //we provide action in this action like addItem,removeItem,like apis to communicate with redux store
        addItem:(state,action)=>{
            //mutating the state over here.(directly modifying )
            state.items.push(action.payload);
        }, //addItem is action and it maps to reducer function and this reducer function modifies slice of the store. and this function gets acess to initialState and action and it modifies the state based on action
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
    },
});

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer; //export reducer
