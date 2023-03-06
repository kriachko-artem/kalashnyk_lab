import {configureStore} from "@reduxjs/toolkit";
import {consultationModalReducer} from "./slices/consultationModal";
import {coursesListReducer} from "./slices/coursesLits";

export default configureStore({
   reducer:{
      consultationModalReducer,
      coursesListReducer
   }
})