import { createSlice } from "@reduxjs/toolkit";
import { addProductToCart } from "../../utils/functions";
import { createStandaloneToast } from "@chakra-ui/react";

const {toast} = createStandaloneToast()

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
      toast({
        title:'Item Removed Successfully',
        duration:3000,
        status:"success",
        isClosable:true
      })
    },
    clearCart: (state) => {
      state.cartProducts = [];
      toast({
        title:'Your Cart is empty now!',
        duration:3000,
        status:"success",
        isClosable:true
      })
    },
  },
});

export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;
export const selectCart = ({cart}) => cart
export default cartSlice.reducer;
