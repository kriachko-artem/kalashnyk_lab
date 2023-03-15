import {createSlice} from "@reduxjs/toolkit";

const coursesList = createSlice({
   name: 'coursesList',
   initialState: {
      courses: null
   },
   reducers: {
      setCourses(state, action){
         state.courses = action.payload
      }
   }
});

export const {setCourses} = coursesList.actions

export const coursesListReducer = coursesList.reducer