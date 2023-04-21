import {configureStore} from "@reduxjs/toolkit";
import {consultationModalReducer} from "./slices/consultationModal";
import {coursesListReducer} from "./slices/coursesLits";
import {scrollReducer} from "./slices/scroll";
import {menuReducer} from "./slices/menu";

export default configureStore({
   reducer:{
      consultationModalReducer,
      coursesListReducer,
      scrollReducer,
      menuReducer
   }
})