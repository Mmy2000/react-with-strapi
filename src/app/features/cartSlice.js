import { createSlice } from "@reduxjs/toolkit";
import { addProductToCart } from "../../utils/functions";


const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts = addProductToCart(action.payload , state.cartProducts);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(item => item.id != action.payload);
    },
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions;
export const selectCart = ({cart}) => cart
export default cartSlice.reducer;
