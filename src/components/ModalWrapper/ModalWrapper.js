import './styles/modalWrapper.css'
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {activateScroll, deactivateScroll} from "../../store/slices/scroll";

export function ModalWrapper ({children}) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(deactivateScroll())
      return () => {
         dispatch(activateScroll())
      }
   })

  return (
     <motion.div className={'modalWrapper'}
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 0}}>
        {children}
     </motion.div>
  )
}