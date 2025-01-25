import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) :[],
    statusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
     addToCart(state, action){
        const {productId,quantity} = action.payload;
        const indexProductId = (state.items).findIndex(item => item.productId === productId);
       if(indexProductId >= 0){
         state.items[indexProductId].quantity += quantity;
       }else{
         state.items.push({productId, quantity});
       }
       localStorage.setItem("carts", JSON.stringify(state.items));
     },
      changeQuantity(state, action) {
    const {productId, quantity} =action.payload;
    const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      }
      else{
        state.items = (state.items).filter(item => item.productId !== productId);
      } 
       localStorage.setItem("carts", JSON.stringify(state.items));
    },
      toggleStatusTab(state) {
         console.log('Before:', state.statusTab);
  state.statusTab = !state.statusTab;
  console.log('After:', state.statusTab);
        // if(state.statusTab === false){
        //     state.statusTab = true;
        // }else {
        //     state.statusTab = false;
        // } 
     }
    },
})
const userSlice = createSlice({
  name: "user",
  initialState: { email: "" },
  reducers: {
    setUserEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab} = cartSlice.actions;
export const { setUserEmail } = userSlice.actions;


export const userReducer = userSlice.reducer;
export default cartSlice.reducer;
