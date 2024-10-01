import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenCartDrawer:false,
  onCloseCartDrawer:false,
  onOpenCartDrawer:false
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    isOpenCartDrawer:(state)=>{
        state.isOpenCartDrawer = !state.isOpenCartDrawer
    },
    onOpenCartDrawerAction:(state)=>{
        state.onOpenCartDrawer = true
        state.isOpenCartDrawer = true
    },
    onCloseCartDrawerAction:(state)=>{
        state.onCloseCartDrawer = false
        state.isOpenCartDrawer = false
    }
    
  },
});

export const { isOpenCartDrawer,onCloseCartDrawerAction,onOpenCartDrawerAction} = globalSlice.actions;
export const selectGlobal = ({global}) => global
export default globalSlice.reducer;