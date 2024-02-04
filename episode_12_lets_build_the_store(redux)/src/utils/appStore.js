import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice';

const appStore = configureStore({
    //we will create slices of our store.
//appStore also has it own reducers which has slice inside it.
reducer:{  //this whole big reducer is for appStore and this will contain small reducers of slices.
 
    cart:cartReducer,  //this cartReducer contains cart slice. each slice will have its own reducers

},
});

export default appStore;