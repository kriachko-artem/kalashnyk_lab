import {createSlice} from "@reduxjs/toolkit";



const menu = createSlice({
   name: 'menu',
   initialState:{
      show: false,
   },
   reducers:{
      showMenu(state) {
         state.show = true
      },
      hideMenu(state) {
         state.show = false
      },
   }
});

export const {showMenu, hideMenu} = menu.actions;

export const menuReducer = menu.reducer