import {createSlice} from "@reduxjs/toolkit";



const scroll = createSlice({
   name: 'scroll',
   initialState:{
      active: true,
   },
   reducers:{
      activateScroll(state) {
         state.active = true
      },
      deactivateScroll(state) {
         state.active = false
      },
   }
});

export const {activateScroll, deactivateScroll} = scroll.actions;

export const scrollReducer = scroll.reducer