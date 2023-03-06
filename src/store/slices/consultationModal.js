import {createSlice} from "@reduxjs/toolkit";



const consultationModal = createSlice({
   name: 'consultationModal',
   initialState:{
      show: false,
   },
   reducers:{
      showModal(state) {
         state.show = true
      },
      hideModal(state) {
         state.show = false
      },
   }
});

export const {showModal, hideModal} = consultationModal.actions;

export const consultationModalReducer = consultationModal.reducer