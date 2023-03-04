import {Layout} from "./Layout/Layout";
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home/Home";
import {Courses} from "./pages/Courses/Cources";
import {Contacts} from "./pages/Contacts/Contacts";

function App() {
   return (
      <>
         <Routes>
            <Route path={'/'} element={<Layout />}>
               <Route index element={<Home />}/>
               <Route path={'courses'} element={<Courses />}/>
               <Route path={'contacts'} element={<Contacts />}/>
            </Route>
         </Routes>
      </>
   );
}

export default App;
