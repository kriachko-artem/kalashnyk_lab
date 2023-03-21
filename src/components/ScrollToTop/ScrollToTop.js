import {useLocation} from "react-router";
import {useEffect} from "react";

export function ScrollToTop () {
   const location = useLocation();
   useEffect(()=>{
      window.scrollTo(0,0)
   },[location])
}