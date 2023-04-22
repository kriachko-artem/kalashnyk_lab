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
   const styles = {
      to: {
         backgroundColor: 'rgba(0, 0, 0, 0.18)',
         backdropFilter: 'blur(10px)'
      },
      from: {
         backgroundColor: 'rgba(0, 0, 0, 0)',
         backdropFilter: 'blur(0px)'
      }
   };

  return (
     <motion.div className={'modalWrapper'}
                 initial={styles.from}
                 animate={styles.to}
                 exit={styles.from}
     >
        {children}
     </motion.div>
  )
}