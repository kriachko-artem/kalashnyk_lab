import {Outlet} from "react-router";
import {Loader} from "../../components/Loader/Loader";
import {AnimatePresence} from "framer-motion";


export function Main () {

  return (
       <main>
          <Outlet/>
       </main>
  )
}