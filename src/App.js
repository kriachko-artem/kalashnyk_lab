import {Layout} from "./Layout/Layout";
import {Route, Routes, useLocation} from "react-router";
import {Home} from "./pages/Home/Home";
import {Courses} from "./pages/Courses/Courses";
import {Contacts} from "./pages/Contacts/Contacts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setCourses} from "./store/slices/coursesLits";
import coursesList from './data/data.json'
import {Category} from "./pages/Category/Category";
import {NotFound} from "./pages/NotFound/NotFound";
import {Course} from "./pages/Course/Course";
import {AnimatePresence} from "framer-motion";

function App() {

   const dispatch = useDispatch();

   useEffect(()=>{
      setTimeout(()=>{
         dispatch(setCourses(coursesList))
      },0)
   })

   const location = useLocation();

   return (
      <AnimatePresence mode={'wait'}>
         <Routes location={location} key={location.pathname}>
            <Route path={'/'} element={<Layout />}>
               <Route index element={<Home />}/>
               <Route path={'courses'} element={<Courses />}/>
               <Route path={'courses/:category'} element={<Category />}/>
               <Route path={'courses/:category/:course'} element={<Course />}/>
               <Route path={'contacts'} element={<Contacts />}/>
               <Route path={'*'} element={<NotFound />}/>
            </Route>
         </Routes>
      </AnimatePresence>
   );
}

export default App;
