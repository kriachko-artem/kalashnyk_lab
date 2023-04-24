import {Outlet} from "react-router";
import {useEffect} from "react";

export function Main () {

   useEffect(()=>{
      window.scrollTo({
         top: 0,
      });
   },[])

  return (
       <main>
          <Outlet/>
       </main>
  )
}