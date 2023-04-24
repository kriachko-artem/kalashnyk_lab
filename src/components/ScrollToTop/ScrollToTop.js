import {useLocation} from "react-router";
import {useEffect} from "react";

export function ScrollToTop () {
   const location = useLocation();
   useEffect(()=>{
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   },[location])
}